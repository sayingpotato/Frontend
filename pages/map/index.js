import { useEffect, useState, useRef, cloneElement } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

import Router, { useRouter } from 'next/router'
import useGetMapStoreList from '@hooks/useGetMapStoreList';
import MapButtons from '@organisms/mapButtons'
import MarkerContent from '@organisms/markerContent'

import {
  StyledMapDiv,
  StyledMap,
} from '../../styles/map/style'

import currentLocation from '@utils/getCurrentLocation'

const KaKaoMap = () => {
  const router = useRouter()

  const goBackrouterValue = [router['query']['goBackLat'], router['query']['goBackLng']]
  
  const imageSize = { width: 30, height: 30 }

  const foodIcon =
    'https://user-images.githubusercontent.com/64068511/229500184-32443c06-a211-42ec-b2bd-22db33723f96.svg'
  const cafeIcon =
    'https://user-images.githubusercontent.com/64068511/229498035-9dfa6500-7267-4cf4-a5d4-660d55e0db6e.svg'

  const mapRef = useRef()

  // 현 위치 (최초 useEffect 함수 또는 새로고침 버튼)
  // const [currentCenter, setCurrentCenter] = useState({ lat: 0, lng: 0 })
  const [currentCenter, setCurrentCenter] = useState({ lat: 36.62517, lng: 127.455409 })
  
  // 지도의 중심 값 (최초에는 현 위치를 기준 -> 지도를 움직일 때마다 변경 또는 마커를 클릭할 때 변경)
  // const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [center, setCenter] = useState({ lat: 36.62517, lng: 127.455409 })
  // 라우터 중심값
  const [routerCenter, setRouterCenter] = useState({ lat: goBackrouterValue[0], lng: goBackrouterValue[1] })

  console.log("현 위치 (최초 useEffect 함수 또는 새로고침 버튼)", currentCenter.lat, currentCenter.lng);
  console.log("지도의 중심 값 (최초에는 현 위치를 기준 -> 지도를 움직일 때마다 변경 또는 마커를 클릭할 때 변경)", center.lat, center.lng);
  console.log("라우터 중심값", routerCenter.lat, routerCenter.lng);

  const [markerInfo, setMarkerInfo] = useState({
    id : '',
    name: '',
    address: '',
    time: '',
    call: '',
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
    const timeText = info.markerInfo.operationHour[0].startDay + '~' + info.markerInfo.operationHour[0].endDay + ' ' + info.markerInfo.operationHour[0].startTime + '~' + info.markerInfo.operationHour[0].endTime
    setMarkerInfo({
      id : info.id,
      name: info.name,
      address: info.markerInfo.address.roadAddr,
      time: timeText,
      call: info.markerInfo.phone,
      category: info.markerInfo.category,
      status: info.markerInfo.status,
    })
  }

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setCurrentCenter({
          // lat: result.latitude,
          // lng: result.longitude,
          lat: 36.62517, lng: 127.455409
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
        {datas && datas.map((oneData, index) => (
          <MapMarker 
            className="marker"
            key={`${oneData.id}`}
            position={{ lat: `${oneData.location.latitude}`, lng: `${oneData.location.longitude}` }}
            image={{
              src: oneData.markerInfo.category === 'FOOD' ? foodIcon : cafeIcon,
              size: imageSize,
            }}
            opacity={oneData.markerInfo.discountInfo === 'TODAY_DISCOUNT' ? 1 : 0.5}
            onClick={handleMarkerClick}
            title={JSON.stringify(oneData)}
          />
        ))}
      </StyledMap>

      <MapButtons state={openPopUp} refreshButtonClick={refreshButtonClick} storeListClick={storeListClick} />
      <MarkerContent state={openPopUp} info={markerInfo} />
    </StyledMapDiv>
  )
}

export default KaKaoMap
