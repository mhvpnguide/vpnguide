import Link from 'next/link'
import React from 'react'
const RatingStars = dynamic(() => import("@/components/CustomStar"), { ssr: false });

import Image from 'next/image'
import dynamic from 'next/dynamic';

interface ReviewProps {
  review: {
    img: String,
    rating: number,
    review: String,
    author: String,
    company_link: { name: string; value: string };

  };
}

const SwiperCard: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className='flex h-full w-[250px] flex-col p-2 laptop:w-[307px]'>

      {/* top part */}
      <div className='flex flex-col items-center pb-2'>

        <div className='relative aspect-[2/1] w-full'>
          <Image loading="lazy" src={`/Assests/test-vpn/vpn/${review.img}`} fill alt="vpn image" />
        </div>
        <RatingStars value={review.rating} textSize="[25px]" emptyTextSize="[28px]" />
      </div>

      {/* middle part */}
      <div className='flex-grow rounded-b-xl bg-slate-100 px-2 py-5 text-start text-[12px]'>
        <p>
          {review.review}
        </p>
        <p className='pt-5 font-bold'>~ {review.author}</p>
      </div>

      {/* bottom part */}
      <div className='mx-[4%] mt-auto flex flex-col'>
        <Link target='_blank' href={review.company_link.value} className="mt-auto rounded-lg bg-[#fd5522] px-3 py-1 text-[21px] font-bold text-white hover:bg-[#04aa63]">Buy Now</Link>
      </div>
    </div>
  )
}

export default SwiperCard