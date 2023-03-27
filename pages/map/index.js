import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { BiCurrentLocation } from 'react-icons/bi'

import { StyledMapDiv, StyledMap, StyledMapButton, Div } from './style'

import MarkerInformation from '../../components/markerInfo/index'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const foodSrc =
    'https://user-images.githubusercontent.com/44117975/226111201-c9dc37f4-cd7a-49d3-8d18-303852bb996b.png'

  const cafeSrc = 'https://img.lovepik.com/element/40050/4595.png_860.png'

  const imageSize = { width: 30, height: 30 }

  let data = [
    {
      id: 1,
      latitude: 36.6283,
      longitude: 127.456,

      value: {
        name: '좋은 원두',
        address: '충북 청주시',
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
        name: '좋은 원두111',
        address: '충북 청주시111',
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
        name: '좋은 원두222',
        address: '충북 청주시222',
        time: '월요일222',
        call: '041-271-122222222211',
        status: 'OPEN',
        category: 'FOOD',
        discountInfo: 'NONE',
      },
    },
  ]

  const mapRef = useRef()

  const [currentCenter, setCurrentCenter] = useState({ lat: 0, lng: 0 })
  const [center, setCenter] = useState({ lat: 0, lng: 0 })
  const [markerInfo, setMarkerInfo] = useState({
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
  
  const MapResult = data.map((oneData) => {
    return (
      <MapMarker
        key={`${oneData.id}`}
        position={{ lat: `${oneData.latitude}`, lng: `${oneData.longitude}` }}
        image={{
          src: oneData.value['category'] === 'FOOD' ? foodSrc : cafeSrc,
          size: imageSize,
        }}
        opacity={oneData.value['discountInfo'] === 'TODAY_DISCOUNT' ? 1 : 0.5}
        onClick={handleMarkerClick}
        title={JSON.stringify(oneData.value)}
      />
    )
  })

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
      lat: currentCenter.lat,
      lng: currentCenter.lng,
    })
  }, [currentCenter.lat, currentCenter.lng])

  const refreshButtonClick = () => {
    setCurrentCenter({
      lat: 0,
      lng: 0,
    })
    setOpenPopUp(false)
  }

  return (
    <StyledMapDiv>
      <StyledMap
        center={center}
        ref={mapRef}
        onClick={() => {
          setOpenPopUp(false)
        }}
      >
        {MapResult}
      </StyledMap>
      <StyledMapButton onClick={refreshButtonClick} state={openPopUp}>
        <BiCurrentLocation size={40} />
      </StyledMapButton>
      <Div state={openPopUp}>
        <MarkerInformation info={markerInfo} />
      </Div>
    </StyledMapDiv>
  )
}

export default KaKaoMap
