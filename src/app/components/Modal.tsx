import { useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  idRoom: number
}

const Modal = ({ isOpen, onClose, idRoom }: ModalProps) => {
  const [comment, setComment] = useState('')
  const [feedbackSuccess, setFeedbackSuccess] = useState(false)
  const [feedbackError, setFeedbackError] = useState('')

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/createFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_room: idRoom,
          feedback: comment,
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

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-700 bg-opacity-50">
        <div className="w-1/2 rounded-lg bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Avaliação</h2>
          <textarea
            className="mb-4 w-full rounded border border-gray-300 p-2"
            placeholder="Digite seu comentário..."
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="flex justify-end">
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
          {feedbackSuccess && (
            <p className="mt-2 text-green-500">Feedback enviado com sucesso!</p>
          )}
          {feedbackError && (
            <p className="mt-2 text-red-500">{feedbackError}</p>
          )}
        </div>
      </div>
    )
  )
}

export default Modal
