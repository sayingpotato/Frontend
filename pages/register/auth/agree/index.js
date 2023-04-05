import { useState, useEffect } from 'react'
import Register from '@pages/register'
import right from '@public/images/checkCircleTrue.svg'
import wrong from '@public/images/checkCircleFalse.svg'
import Image from 'next/image'
import Next from '@components/next'
import Label from '@components/label'
import { AgreeComponent, OneAgree } from './style'
import { RegisterLevel } from '@utils/atom.js'
import { useSetRecoilState } from 'recoil'

const Agree = () => {
  const setRegisterLevel = useSetRecoilState(RegisterLevel)
  const [state, setState] = useState(1)
  const [useAgree, setUseAgree] = useState(false)
  const [infoAgree, setInfoAgree] = useState(false)
  const [locateAgree, setLocateAgree] = useState(false)
  const [allAgree, setAllAgree] = useState(false)

  useEffect(() => {
    if (useAgree && infoAgree && locateAgree) {
      setState(2)
      return
    }
    setState(1)
  }, [useAgree, infoAgree, locateAgree])

  useEffect(() => {
    if (allAgree) {
      setUseAgree(true)
      setInfoAgree(true)
      setLocateAgree(true)
      return
    }
    setUseAgree(false)
    setInfoAgree(false)
    setLocateAgree(false)
  }, [allAgree])

  const sample = [
    { title: '이용약관 동의', state: useAgree, setState: setUseAgree },
    {
      title: '개인정보 수집 및 이용 동의',
      state: infoAgree,
      setState: setInfoAgree,
    },
    {
      title: '위치기반서비스 이용약관 동의',
      state: locateAgree,
      setState: setLocateAgree,
    },
    { title: '모두 동의 합니다.', state: allAgree, setState: setAllAgree },
  ]

  useEffect(() => {
    setRegisterLevel(0)
  }, [])

  return (
    <Register>
      <AgreeComponent>
        <Label title={'동의 여부'} />
        {sample.map((item, index) => {
          return (
            <OneAgree
              onClick={() => item.setState(item.state ? false : true)}
              key={index}
              state={item.state}
            >
              <Image
                width={30}
                height={30}
                src={item.state ? right : wrong}
                className="agreeIcon"
                alt="agreeIcon"
              />
              {item.title}
            </OneAgree>
          )
        })}
      </AgreeComponent>
      <Next state={state} nextView={'id'} />
    </Register>
  )
}
Agree.Layout = ({ children }) => {
  return <div>{children}</div>
}

Agree.Layout.displayName = 'RegisterLayout'

export default Agree
