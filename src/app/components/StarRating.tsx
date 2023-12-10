import { useState } from 'react'

const StarRating = ({ onChange }: { onChange: (rating: number) => void }) => {
  const [rating, setRating] = useState<number>(0)

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating)
    onChange(selectedRating)
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`cursor-pointer text-2xl ${
            value <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating
