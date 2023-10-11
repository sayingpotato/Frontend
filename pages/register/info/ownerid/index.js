import { useEffect, useState } from 'react'
import Image from 'next/image'
import Register from '@pages/register'
import { InfoComponent, InputSpace, RegexComponent } from '../../../../styles/register/info/id/style'
import { isSpecialCharacter } from '@hooks/regex'
import Regex from '@components/regex'
import Next from '@components/next'
import wrong from '@public/images/close.svg'
import right from '@public/images/checkCircle.svg'
import empty from '@public/images/emptyBlock.svg'
import { RegisterLevel } from '@utils/recoil/atom.js'
import { useSetRecoilState } from 'recoil'
import Label from '@components/label/index'
import { useDebounce } from '@hooks/debounce'

const OwnerInfo = () => {
  const [inputValue, setInputValue] = useState('')
  const [isNumber, setIsNUmber] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [isMoreThanSix, setIsMoreThanSix] = useState(false)
  const [state, setState] = useState(0)
  const action = ['English', 'Number', 'Six']
  const setRegisterLevel = useSetRecoilState(RegisterLevel)
  const debouncedSetInputValue = useDebounce(setInputValue, 500)

  const onChangeInput = (e) => {
    debouncedSetInputValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(1)
  }, [])

  useEffect(() => {
    if (!inputValue) {
      setState(0)
      return
    }

    if (isSpecialCharacter(inputValue)) {
      setState(1)
      return
    }

    if (isEnglish && isNumber && isMoreThanSix) {
      setState(2)
    } else {
      setState(1)
    }
  }, [isEnglish, isNumber, isMoreThanSix, inputValue])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'English':
        setIsEnglish(isValid)
        break
      case 'Number':
        setIsNUmber(isValid)
        break
      case 'Six':
        setIsMoreThanSix(isValid)
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
        <Label title={'아이디 입력'} htmlfor="Id" />
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
      <Next state={state} input={inputValue} nextView={'ownerpw'}>
        다음단계
      </Next>
    </Register>
  )
}

OwnerInfo.Layout = ({ children }) => {
  return <div>{children}</div>
}

OwnerInfo.Layout.displayName = 'RegisterLayout'

export default OwnerInfo
