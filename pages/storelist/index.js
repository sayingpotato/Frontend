import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'

import StorelistTemplate from '@templates/storelistTemplate'

import Title from "@molecules/title"

const StoreList = () => {
  const animate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  let data = [
    {
      id: 1,
      name: '좋은 원두',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/meat1.svg',
        secondImage: '/images/meat2.svg',
        thirdImage: '/images/meat3.svg',
        fourthImage: '/images/meat4.svg',
      },
      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firstTopReview: '음식이 맛있어요',
        secondTopReview: '가성비가 좋아요',
        thirdTopReview: '분위기가 좋아요',
      },
    },
    {
      id: 2,
      name: '좋은 원두2222',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/meat1.svg',
        secondImage: '/images/meat2.svg',
        thirdImage: '/images/meat3.svg',
        fourthImage: '/images/meat4.svg',
      },
      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firstTopReview: '음식이 맛있어요',
        secondTopReview: '가성비가 좋아요',
        thirdTopReview: '분위기가 좋아요',
      },
    },
    {
      id: 3,
      name: '좋은 원두333',
      maxValue: '25%',
      minValue: '15%',
      images: {
        firstImage: '/images/meat1.svg',
        secondImage: '/images/meat2.svg',
        thirdImage: '/images/meat3.svg',
        fourthImage: '/images/meat4.svg',
      },

      topMenu: {
        firstTopMenu: '돼지갈비',
        secondTopMenu: '삼겹살',
        thirdTopMenu: '갈매기살',
      },

      topReview: {
        firstTopReview: '음식이 맛있어요',
        secondTopReview: '가성비가 좋아요',
        thirdTopReview: '분위기가 좋아요',
      },
    },
  ]

  const router = useRouter()

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial={animate.initial}
          animate={animate.animate}
          exit={animate.exit}
        >
          <>
            <Title text="내 주변 가게"/>
            {data.map((oneData) => (
              <StorelistTemplate key={`${oneData.id}`} 
                storeName={`${oneData.name}`} 
                imageSrc={JSON.stringify(oneData.images)} 
                minDiscount={`${oneData.minValue}`}
                maxDisount={`${oneData.maxValue}`}
                />
            ))}
          </>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default StoreList
