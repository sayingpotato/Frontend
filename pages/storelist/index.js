import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import useGetSurroundStoreList from '@hooks/useGetSurroundStoreList'

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

  const [data, setData] = useState([
    {
      id: 1,
      name: '좋은 원두',
      discounts : [{people : 2, discountRatio : 5}, {people : 2, discountRatio : 20}],
      storeMapThumbnail: {
        mainImg: '/images/meat1.svg',
        subImg: '/images/meat2.svg',
        subImg2: '/images/meat3.svg',
        subImg3: '/images/meat4.svg',
      },
      storeTopItem: {
        firstGradeItemName: '돼지갈비',
        secondGradeItemName: '삼겹살',
        thirdGradeItemName: '갈매기살',
      },

      topReview: {
        firstGradeReviewName: '음식이 맛있어요',
        firstGradeReviewNumber: 1,
        secondGradeReviewName: '음식이 맛있어요',
        secondGradeReviewNumber: 5,
        thirdGradeReviewName: '음식이 맛있어요',
        thirdGradeReviewNumber: 10,
      },
    }]
  );

  let datas = [
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

  //파라미터에서 위도 경도 값 가져오기 
  const router = useRouter();
  const [latitude, longtitude] = [router['query']['lat'], router['query']['lng']];
  const getMapStoreList = useGetSurroundStoreList(latitude, longtitude);

  useEffect(() => {
    if (latitude !== undefined) {
     setData(getMapStoreList); 
    }
  }, [getMapStoreList]);

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
            {data && data.map((oneData) => (
              <StorelistTemplate key={`${oneData.id}`} 
                storeName={`${oneData.name}`}  
                imageSrc={JSON.stringify(oneData.storeMapThumbnail)} 
                minDiscount={`${oneData.discounts[0].discountRatio}`}
                maxDisount={`${oneData.discounts[oneData.discounts.length - 1].discountRatio}`}
                />
            ))}
          </>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default StoreList
