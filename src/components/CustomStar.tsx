import React, { Suspense } from "react";

// Lazy load the icons
const AiOutlineStar = React.lazy(() => import("react-icons/ai").then(mod => ({ default: mod.AiOutlineStar })));
const FaStarHalfAlt = React.lazy(() => import("react-icons/fa").then(mod => ({ default: mod.FaStarHalfAlt })));
const FaStar = React.lazy(() => import("react-icons/fa6").then(mod => ({ default: mod.FaStar })));

interface RatingStarsProps {
  value: number; // Rating value between 0 and 5 (e.g., 4.5)
  textSize?: string;
  emptyTextSize?: string;
}

const RatingStars = ({ value, textSize = '2xl', emptyTextSize = '[27px]' }: RatingStarsProps) => {
  
  if(value>=9.8) value=11;
  if(value>=8.1 && value<=8.5) value=8

  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number =  index+0.5;   

    return (
      <span key={index}>
        {
          value > ((index+1)*2) ?
            (<Suspense fallback={<div>Loading components...</div>}><FaStar className={`text-[#FFC200] text-${textSize}`} /></Suspense>)
            :
            (value/2) > number ?
              (<Suspense fallback={<div>Loading components...</div>}><FaStarHalfAlt className={`text-[#FFC200] text-${textSize}`} /></Suspense>)
              :
              (<Suspense fallback={<div>Loading components...</div>}><AiOutlineStar className={`text-[#FFC200] text-${emptyTextSize}`} /></Suspense>)
        }
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