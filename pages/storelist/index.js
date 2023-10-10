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

  const [data, setData] = useState();

  //파라미터에서 위도 경도 값 가져오기 
  const router = useRouter();
  const [latitude, longtitude] = [router['query']['lat'], router['query']['lng']];
  const getMapStoreList = useGetSurroundStoreList(latitude, longtitude);

  useEffect(() => {
    if (latitude !== undefined && longtitude !== undefined) {
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
              <StorelistTemplate key={oneData.id}
                storeName={oneData.name}
                imageSrc={oneData.storeMapThumbnail} 
                minDiscount={oneData.minDiscountRatio}
                maxDisount={oneData.maxDiscountRatio}
                menuTopArr={oneData.storeTopItem}
                reviewTopArr={oneData.storeTopReview}
                />
            ))}
          </>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default StoreList
