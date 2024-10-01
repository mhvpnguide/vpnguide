import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

interface RatingStarsProps {
  value: number; // Rating value between 0 and 5 (e.g., 4.5)
}

const RatingStars = ({ value }: RatingStarsProps) => {

  const mvalue = value/2

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {mvalue >= index + 1 ? (
          <FaStar className="text-[#FFC200] text-2xl" />
        ) : mvalue >= number ? (
          <FaStarHalfAlt className="text-[#FFC200] text-2xl" />
        ) : (
          <AiOutlineStar className="text-[#FFC200] text-[27px]" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1 py-2">
      {ratingStar}
    </div>
  )
}

export default RatingStars;