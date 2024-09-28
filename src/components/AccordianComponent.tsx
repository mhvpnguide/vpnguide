"use client"
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import React, { useState } from 'react'
import CustomProgress from './CustomProgressBar'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { log } from 'console'

interface BlogsProps {
    blog:{
      streaming: number;
    privacy_and_logging: number;
    server_location: number;
    security_and_features: number;
    customer_support: number;
    torrenting: number;
    speed: number;
    bypassing_censorship: number;
    ease_of_use: number;
    price_and_value: number;
    }
}

const AccordianComponent: React.FC<BlogsProps> = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = ()=>{
    setIsOpen(!isOpen)
  }
  return (
      <Accordion variant="splitted" className='customAccording'>
        <AccordionItem key="1" aria-label="Accordion 1" title={isOpen ? "Less Details" : "More Details"} onClick={handleToggle}>
          <div className=" laptop:w-[15%]  flex-col gap-4 mt-4">
            <div className="flex gap-2">
              <MdOutlinePrivacyTip className="text-[20px]" />
              <div className="w-full">
                <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.streaming}</span></div>
                <CustomProgress
                  value={blog.streaming}
                  size="sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlinePrivacyTip className="text-[20px]" />
              <div className="w-full">
                <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.streaming}</span></div>
                <CustomProgress
                  value={blog.streaming}
                  size="sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlinePrivacyTip className="text-[20px]" />
              <div className="w-full">
                <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.streaming}</span></div>
                <CustomProgress
                  value={blog.streaming}
                  size="sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlinePrivacyTip className="text-[20px]" />
              <div className="w-full">
                <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.streaming}</span></div>
                <CustomProgress
                  value={blog.streaming}
                  size="sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlinePrivacyTip className="text-[20px]" />
              <div className="w-full">
                <div className="text-[10px] text-gray-700 flex justify-between pb-1"><span>Streaming</span><span>{blog.streaming}</span></div>
                <CustomProgress
                  value={blog.streaming}
                  size="sm"
                />
              </div>
            </div>

          </div>
        </AccordionItem>
      </Accordion>
  )
}

export default AccordianComponent