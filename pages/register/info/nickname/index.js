import { useEffect, useState } from 'react'
import Image from 'next/image'
import Register from '@pages/register'
import { InfoComponent, InputSpace, RegexComponent } from '../id/style'
import Regex from '@components/regex'
import Next from '@components/next'
import wrong from '@public/images/close.svg'
import right from '@public/images/checkCircle.svg'
import empty from '@public/images/emptyBlock.svg'
import { RegisterLevel } from '@utils/recoil/atom.js'
import { useSetRecoilState } from 'recoil'
import Label from '@components/label/index'

const NickName = () => {
  const [inputValue, setInputValue] = useState('')
  const [isMoreThanTwo, setIsMoreThanTwo] = useState(false)
  const [isKoreanEnglish, setIsKoreanEnglish] = useState(false)
  const setRegisterLevel = useSetRecoilState(RegisterLevel)
  const [state, setState] = useState(0)

  const action = ['Two', 'KoreanEnglish']

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(1)
  }, [])

  useEffect(() => {
    if (!inputValue) {
      setState(0)
      return
    }

    if (isMoreThanTwo && isKoreanEnglish) {
      setState(2)
      return
    }
    setState(1)
  }, [isMoreThanTwo, inputValue, isKoreanEnglish])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'Two':
        setIsMoreThanTwo(isValid)
        break
      case 'KoreanEnglish':
        setIsKoreanEnglish(isValid)
        break
    }
  }

  const chooseImage = () => {
    switch (state) {
      case 0:
        return empty
      case 1:
        return wrong
      case 2:
        return right
    }
  }

  return (
    <Register>
      <InfoComponent>
        <Label htmlfor="Id" title={'닉네임 입력'} />
        <InputSpace id="Id" onChange={onChangeInput} state={state} />
        <Image className="close" src={chooseImage()} alt="close" />
        <RegexComponent>
          {action.map((item, index) => {
            return (
              <Regex
                action={item}
                key={index}
                input={inputValue}
                onValidityChange={handleColorChange}
              />
            )
          })}
        </RegexComponent>
      </InfoComponent>
      <Next state={state} input={inputValue} nextView={'college'} />
    </Register>
  )
}

NickName.Layout = ({ children }) => {
  return <div>{children}</div>
}

NickName.Layout.displayName = 'RegisterLayout'

export default NickName
