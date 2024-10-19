import Link from 'next/link'
import React from 'react'
import RatingStars from './CustomStar'
import Image from 'next/image'

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
    <div className='p-2 laptop:w-[307px] w-[250px]'>
      {/* top part */}
      <div className='flex items-center flex-col pb-2'>

        <div className='relative aspect-video w-full'>
          <Image src={`/Assests/test-vpn/vpn/${review.img}`} fill alt="vpn image" />
        </div>
        <RatingStars value={review.rating} />
      </div>
      {/* middle part */}
      <div className='text-[12px] py-5 text-start bg-slate-100 px-2 rounded-b-xl'>
        <p>
          {review.review}
        </p>
        <p className='font-bold pt-5'>~ {review.author}</p>
      </div>
      {/* bottom part */}
      <div className='flex flex-col mx-[4%]'>
        <Link href={review.company_link.value} className="bg-[#fd5522] hover:bg-[#04aa63] text-white font-bold px-3 py-1 rounded-lg mt-auto text-[21px]">Buy Now</Link>
      </div>
    </div>
  )
}

export default SwiperCard