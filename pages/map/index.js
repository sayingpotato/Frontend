import { useEffect, useState, useRef, cloneElement } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

import Router, { useRouter } from 'next/router'
import useGetMapStoreList from '@hooks/useGetMapStoreList';
import MapButtons from '@organisms/mapButtons'
import MarkerContent from '@organisms/markerContent'

import {
  StyledMapDiv,
  StyledMap,
} from './style'

import currentLocation from '@utils/getCurrentLocation'

const KaKaoMap = () => {
  const router = useRouter()

  const goBackrouterValue = [router['query']['goBackLat'], router['query']['goBackLng']]
  
  const imageSize = { width: 30, height: 30 }

  const foodIcon =
    'https://user-images.githubusercontent.com/64068511/229500184-32443c06-a211-42ec-b2bd-22db33723f96.svg'
  const cafeIcon =
    'https://user-images.githubusercontent.com/64068511/229498035-9dfa6500-7267-4cf4-a5d4-660d55e0db6e.svg'

  let data = [
    {
      id: 1,
      latitude: 36.6283,
      longitude: 127.456,

      value: {
        id: 1,
        name: '좋은 원두',
        address: '충북 청주시 서원구 1순환로 672번길 64 (우)28643',
        time: '월요일',
        call: '041-271-1234',
        status: 'OPEN',
        category: 'FOOD',
        discountInfo: 'TODAY_DISCOUNT',
      },
    },
    {
      id: 2,
      latitude: 36.6283,
      longitude: 127.436,

      value: {
        id: 2,
        name: '좋은 원두111',
        address: '충북 청주시 서원구 1순환로 672번길 64 (우)28643',
        time: '월요일111',
        call: '041-271-12341111',
        status: 'CLOSED',
        category: 'CAFE',
        discountInfo: 'NONE',
      },
    },
    {
      id: 3,
      latitude: 36.6283,
      longitude: 127.486,
      value: {
        id: 3,
        name: '좋은 원두222',
        address: '충북 청주시 서원구 1순환로 672번길 64 (우)28643',
        time: '월요일222',
        call: '041-271-122222222211',
        status: 'OPEN',
        category: 'FOOD',
        discountInfo: 'NONE',
      },
    },
  ]

  const mapRef = useRef()

  // 현 위치 (최초 useEffect 함수 또는 새로고침 버튼)
  const [currentCenter, setCurrentCenter] = useState({ lat: 0, lng: 0 })
  // 지도의 중심 값 (최초에는 현 위치를 기준 -> 지도를 움직일 때마다 변경 또는 마커를 클릭할 때 변경)
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  // 라우터 중심값
  const [routerCenter, setRouterCenter] = useState({ lat: goBackrouterValue[0], lng: goBackrouterValue[1] })

  const [markerInfo, setMarkerInfo] = useState({
    id : '',
    name: '',
    address: '',
    time: '',
    call: '',
    today: 0,
    category: '',
    status: '',
  })

  const [openPopUp, setOpenPopUp] = useState(false)

  const handleMarkerClick = (e) => {
    if (
      center.lat === e.getPosition().getLat() &&
      center.lng === e.getPosition().getLng()
    ) {
      setOpenPopUp(true)
    } else {
      setOpenPopUp(true)
      setCenter({
        lat: e.getPosition().getLat(),
        lng: e.getPosition().getLng(),
      })
    }

    const info = JSON.parse(e.getTitle())
    setMarkerInfo(info)
  }

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setCurrentCenter({
          lat: result.latitude,
          lng: result.longitude,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [currentCenter])

  useEffect(() => {
    setCenter({
      lat: routerCenter.lat === undefined ? currentCenter.lat : routerCenter.lat,
      lng: routerCenter.lng === undefined ? currentCenter.lng : routerCenter.lng,
    })
  }, [currentCenter.lat, currentCenter.lng, routerCenter.lat, routerCenter.lng])

  const refreshButtonClick = () => {
    setRouterCenter({
      lat: undefined,
      lng: undefined,
    })
    setCurrentCenter({
      lat: 0,
      lng: 0,
    })
    setOpenPopUp(false)
  }

  const storeListClick = () => {
    router.push({
      pathname: '/storelist',
      query: { lat: center['lat'], lng: center['lng'] },
    })
  }
  
  //백엔드의 response 데이터
  const [datas, setData] = useState(null);
  const getMapStoreList = useGetMapStoreList(center.lat, center.lng);

  useEffect(() => {
    setData(getMapStoreList);
  },[getMapStoreList]);

  return (
    <StyledMapDiv>
      {datas && datas.map((item, index) => {
        return (
          <div key = {index}>{item.markerInfo.category}</div>
        )
      })}
      <StyledMap
        center={center}
        ref={mapRef}
        onClick={() => {
          setOpenPopUp(false)
        }}
        onDragEnd={(map) => setCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        })}
      >
        {data.map((oneData) => (
          <MapMarker 
            className="marker"
            key={`${oneData.id}`}
            position={{ lat: `${oneData.latitude}`, lng: `${oneData.longitude}` }}
            image={{
              src: oneData.value['category'] === 'FOOD' ? foodIcon : cafeIcon,
              size: imageSize,
            }}
            opacity={oneData.value['discountInfo'] === 'TODAY_DISCOUNT' ? 1 : 0.5}
            onClick={handleMarkerClick}
            title={JSON.stringify(oneData.value)}
          />
        ))}
      </StyledMap>

      <MapButtons state={openPopUp} refreshButtonClick={refreshButtonClick} storeListClick={storeListClick} />
      <MarkerContent state={openPopUp} info={markerInfo} />
    </StyledMapDiv>
  )
}

export default KaKaoMap
