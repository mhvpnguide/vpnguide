import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

interface RatingStarsProps {
  value: number; // Rating value between 0 and 5 (e.g., 4.5)
  textSize?: string;
  emptyTextSize?: string;
}

const RatingStars = ({ value,textSize= '2xl', emptyTextSize='[27px]' }: RatingStarsProps) => {

  const mvalue = value/2

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {mvalue >= index + 1 ? (
          <FaStar className={`text-[#FFC200] text-${textSize}`} />
        ) : mvalue >= number ? (
          <FaStarHalfAlt className={`text-[#FFC200] text-${textSize}`} />
        ) : (
          <AiOutlineStar className={`text-[#FFC200] text-${emptyTextSize}`} />
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