import { useState, useEffect } from 'react'
import Register from '../../index'
import { InfoComponent } from '@pages/register/info/id/style'
import { Authdiv } from './style'
import AuthButton from '@components/authButton/index'
import right from '@public/images/checkCircle.svg'
import Image from 'next/image'
import Next from '@components/next'
import { RegisterLevel } from '@utils/recoil/atom.js'
import { useSetRecoilState } from 'recoil'
import Label from '@components/label'

const Auth = () => {
  const [state, setState] = useState(0)
  const setRegisterLevel = useSetRecoilState(RegisterLevel)

  const onClickAuthButton = () => {
    if (state === 2) {
      setState(1)
      return
    }
    setState(2)
  }

  useEffect(() => {
    setRegisterLevel(0)
  }, [])

  return (
    <Register>
      <InfoComponent>
        <Label title={'휴대폰 인증'} />
        <Authdiv>
          <AuthButton onClick={onClickAuthButton} title="인증하기" />
          {state === 2 && <Image src={right} alt="right" className="right" />}
        </Authdiv>
      </InfoComponent>
      <Next state={state} nextView={'agree'} />
    </Register>
  )
}

Auth.Layout = ({ children }) => {
  return <div>{children}</div>
}

Auth.Layout.displayName = 'RegisterLayout'

export default Auth
