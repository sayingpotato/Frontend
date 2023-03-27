import { useEffect, useState, useRef } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'
import { BiCurrentLocation } from 'react-icons/bi'

import { StyledMapDiv, StyledMap, StyledMapButton } from './style'

import currentLocation from '../../utils/getCurrentLocation'

const KaKaoMap = () => {
  const foodSrc =
    'https://user-images.githubusercontent.com/44117975/226111201-c9dc37f4-cd7a-49d3-8d18-303852bb996b.png'

  const cafeSrc = 'https://img.lovepik.com/element/40050/4595.png_860.png'

  const imageSize = { width: 30, height: 30 }

  let data = [
    {
      id: 1,
      lat: 36.6283,
      lng: 127.456,
      name: '우체국',
      status: 'TODAY_DISCOUNT',
      category: 'food',
    },
    {
      id: 2,
      lat: 36.6283,
      lng: 127.436,
      name: '병원',
      status: 'NONE',
      category: 'cafe',
    },
    {
      id: 3,
      lat: 36.6283,
      lng: 127.486,
      name: '우체국1',
      status: 'TODAY_DISCOUNT',
      category: 'food',
    },
  ]

  const MapResult = data.map((oneData) => {
    return (
      <MapMarker
        key={`${oneData.id}`}
        position={{ lat: `${oneData.lat}`, lng: `${oneData.lng}` }}
        image={{
          src: oneData.category === 'food' ? foodSrc : cafeSrc,
          size: imageSize,
        }}
        opacity={oneData.status === 'TODAY_DISCOUNT' ? 1 : 0.5}
      />
    )
  })

  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)

  const [state, setState] = useState({
    center: { lat: lat, lng: lng },
  })
  const mapRef = useRef()

  useEffect(() => {
    currentLocation()
      .then((result) => {
        setLat(result.latitude)
        setLng(result.longitude)
        setState({
          center: { lat: result.latitude, lng: result.longitude },
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }, [state])

  const refreshButtonClick = () => {
    const map = mapRef.current
    let currentLat = map.getCenter().getLat()
    let currentLng = map.getCenter().getLng()

    setState({
      center: { lat: currentLat, lng: currentLng },
    })
  }

  return (
    <StyledMapDiv>
      <StyledMap center={state.center} ref={mapRef}>
        {MapResult}
        <StyledMapButton onClick={refreshButtonClick}>
          <BiCurrentLocation size={40} />
        </StyledMapButton>
      </StyledMap>
    </StyledMapDiv>
  )
}

export default KaKaoMap
