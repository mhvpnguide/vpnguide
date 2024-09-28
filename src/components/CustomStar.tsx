interface RatingStarsProps {
    value: number; // Rating value between 0 and 5 (e.g., 4.5)
}

const RatingStars = ({ value }: RatingStarsProps) => {
    // Create an array of 5 elements to render the stars
    const stars = Array.from({ length: 5 }, (_, idx) => idx + 1);

    return (
        <div className="flex space-x-1">
           {stars.map((star) => {
        const starValue = star * 2; // Each star represents 2 rating points

        if (value >= starValue) {
          // Full star if value is greater than or equal to the starValue
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          );
        } else if (value >= starValue - 1) {
          // Half star if value is within 1 point of the starValue
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400"
            >
              <defs>
                <linearGradient id={`halfStarGradient-${star}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={`url(#halfStarGradient-${star})`}
              />
            </svg>
          );
        } else {
          // Empty star if value is less than the starValue - 1
          return (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          );
        }
      })}
        </div>
    )
}

export default RatingStars;