import React, { useState } from 'react'
import From_to from './From_to'
import Cards from './Cards'
import CardTime from './CardTime'
import { RxCounterClockwiseClock } from "react-icons/rx";
import { FaTrainSubway } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import List_Choice from './List_Choice';

export default function Question_tow() {
    const [value , setValue] = useState(1)
    const [showList , setShowList] = useState(false)
  return (
    <div className='flex flex-col  xs:w-[270px] gap-[50px] items-center w-full'>
         <From_to/>

         <div>
         <div className="overflow-x-auto xs:w-[300px] p-[20px] w-[587px]  scrollbar-none">
            <div className="flex w-[800px]  gap-[20px] items-center">
                <Cards DayName="Sut" DayNumbre="19" month="sep" color="#7367F0" width="71px" height="70px " />
                <Cards DayName="Sun" DayNumbre="20" month="sep" color="#D4D0FA" width="86px" height="74px" />
                <Cards DayName="Mon" DayNumbre="21" month="sep" color="#D4D0FA" width="86px" height="74px" />
                <Cards DayName="Tues" DayNumbre="22" month="sep" color="#D4D0FA" width="86px" height="74px" />
                <Cards DayName="Wed" DayNumbre="23" month="sep" color="#D4D0FA" width="86px" height="74px" />
                <Cards DayName="Thue" DayNumbre="24" month="sep" color="#D4D0FA" width="86px" height="74px" />
            </div>
            </div>
         <div className="overflow-x-auto p-[20px] xs:w-[300px] w-[587px]  scrollbar-none">
            <div className="flex w-[800px] gap-[20px] items-center">
                <CardTime
                color="#7367F0" 
                 Time = "14:02"/>
                <CardTime 
                color="#D4D0FA"
                Time = "14:05"  />
                <CardTime 
                color="#D4D0FA"
                Time = "14:10"  />
                <CardTime 
                color="#D4D0FA"
                Time = "14:15"  />
                <CardTime 
                color="#D4D0FA"
                Time = "14:20" />
                <CardTime 
                color="#D4D0FA"
                Time = "14:25"  />
                <CardTime 
                color="#D4D0FA"
                Time = "14:25"  />
                <CardTime 
                color="#D4D0FA"
                Time = "14:25"  />
            </div>
            </div>
         </div>

         <div className='flex  xs:flex-col xs:items-end  w-full gap-[20px]'>
            <div className='w-[104.09px] xs:justify-center xs:gap-[10px] xs:w-fit flex items-center justify-between
             rounded-lg h-[49.88px] pr-[10px] pl-[10px] bg-[#D4D0FA]'>
                <p className='text-purple-900'>14:02</p>
                <RxCounterClockwiseClock className='text-white '/>
            </div>
            <div className='w-[135.9px] flex items-center xs:justify-center xs:gap-[10px] xs:w-fit 
             rounded-lg h-[49.88px] justify-between pr-[10px] pl-[10px] bg-[#D4D0FA]'>
                <p className='text-purple-900'>19 Sep</p>
                <RxCounterClockwiseClock className='text-white '/>
            </div>
            <div className='w-[135.9px] flex items-center 
             rounded-lg h-[49.88px] xs:justify-center xs:gap-[10px] xs:w-fit
             justify-between pr-[10px] pl-[10px]
              bg-[#D4D0FA]'>
                <div
                onClick={()=>{
                    setValue(value-1)
                }}
                className='size-[30px]
                 text-purple-900 border-gray-400 
                 border-[1px] text-5xl flex items-center
                 justify-center cursor-pointer shadow-md pb-2
                  bg-white rounded'>
                    -
                </div>
                <p className='font-semibold text-xl'>{value}</p>
                <div
                   onClick={()=>{
                    setValue(value+1)
                }}
                className='size-[30px]
                 bg-purple-500 border-gray-400 
                 border-[1px] text-3xl flex items-center
                 justify-center cursor-pointer shadow-md pb-1
                  text-white rounded'>
                    +
                </div>
            </div>
         </div>
       
        <div className='  flex flex-col gap-[20px] items-center  w-full'>
            <p className='text-2xl xs:pr-0 pr-[70px]
             font-semibold self-end
             text-[#7367F0]'>
                الدرجة
            </p>
            <div
             onClick={()=>{
                setShowList(!showList)
            }}
            className='flex flex-row-reverse relative
            border-[0.5px] border-gray-150
             justify-between items-center 
            rounded-xl xs:w-[300px] w-[419px] h-[45px]
            pr-[10px] pl-[10px] cursor-pointer
            '>
                <div
               
                className='flex gap-[10px]'>
                    <p className='text-gray-200 font-semibold'>
                    اولي مميز
                    </p>
                    <div className='size-[30px] rounded-full
                    text-white bg-[#7367F0] flex items-center justify-center'>
                    <FaTrainSubway />
                    </div>
                </div>
                <IoIosArrowDown className='text-[#7367F0]' />   

                {
                   <div     
                    className={`absolute w-full 
                    inset-0  rounded-xl text-gray-400 font-semibold
                    border border-gray-200 
                    ${showList ? 'animate__bounceInDown animate__animated ' 
                        : 'hidden'
                    }
                    `}
                    >
                    <List_Choice
                    header = {' اولى مميز'}
                    li={[
                        ' عادي',
                        'اولى مميز ',
                        'ثاني مميز'
                       
                    ]}
                    />      
                    </div>
                }
            </div>
        </div>

    </div>
  )
}
