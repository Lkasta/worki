import { useState } from 'react'
import StarRating from './StarRating'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  idRoom: number
}

const Modal = ({ isOpen, onClose, idRoom }: ModalProps) => {
  const [comment, setComment] = useState('')
  const [feedbackSuccess, setFeedbackSuccess] = useState(false)
  const [feedbackError, setFeedbackError] = useState('')
  const [rating, setRating] = useState<number>(0)

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      if (!comment.trim()) {
        setFeedbackSuccess(false)
        setFeedbackError('Por favor, adicione um comentário antes de enviar.')
        return
      }

      const response = await fetch('/api/createFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_room: idRoom,
          feedback: comment,
          rating,
        }),
      })

      if (response.ok) {
        // Feedback bem-sucedido
        setFeedbackSuccess(true)
        setFeedbackError('')
        setComment('')
        onClose()
      } else {
        // Feedback falhou
        const errorData = await response.json()
        setFeedbackSuccess(false)
        setFeedbackError(
          errorData.error || 'Erro desconhecido ao enviar feedback',
        )
      }
    } catch (error) {
      console.error('Erro na chamada da API:', error)
      setFeedbackSuccess(false)
      setFeedbackError('Erro de rede ao enviar feedback')
    }
  }

  const handleModalClose = () => {
    // Reinicia os estados ao fechar o modal
    setFeedbackSuccess(false)
    setFeedbackError('')
    onClose()
  }

  const handleRatingChange = (selectedRating: number) => {
    setRating(selectedRating)
  }

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-700 bg-opacity-50">
        <div className="w-1/2 rounded-lg bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">
            Conte para nós sua experiência com a sala de trabalho:
          </h2>
          <StarRating onChange={handleRatingChange} />
          <textarea
            className="mb-4 w-full rounded border border-gray-300 p-2"
            placeholder="Digite seu comentário..."
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="flex justify-between">
            <div>
              {feedbackSuccess && (
                <p className=" text-green-500 ">
                  Feedback enviado com sucesso!
                </p>
              )}
              {feedbackError && (
                <p className=" text-red-500">{feedbackError}</p>
              )}
            </div>
            <div>
              <button
                className="rounded bg-violet-700 px-4 py-2 text-white"
                onClick={handleSubmit}
              >
                Enviar
              </button>
              <button
                className="ml-2 rounded bg-red-500 px-4 py-2 text-white"
                onClick={handleModalClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Modal
