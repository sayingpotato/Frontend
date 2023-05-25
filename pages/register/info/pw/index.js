import { useEffect, useState } from 'react'
import Image from 'next/image'
import { InfoComponent, InputSpace, RegexComponent } from '../id/style'
import Register from '@pages/register/index'
import Regex from '@components/regex'
import Next from '@components/next'
import wrong from '@public/images/close.svg'
import right from '@public/images/checkCircle.svg'
import empty from '@public/images/emptyBlock.svg'
import { RegisterLevel } from '@utils/recoil/atom.js'
import { useSetRecoilState } from 'recoil'
import Label from '@components/label'

const Pw = () => {
  const [inputValue, setInputValue] = useState('')
  const [inputCheck, setInputCheck] = useState(0)
  const [isNumber, setIsNUmber] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)
  const [isMoreThanEight, setIsMoreThanEight] = useState(false)
  const [isSpecialCharacter, setIsSpecialCharacter] = useState(false)
  const [state, setState] = useState(0)
  const [totalState, setTotalState] = useState(0)
  const action = ['English', 'Number', 'Eight', 'SpecialCharacter']
  const setRegisterLevel = useSetRecoilState(RegisterLevel)

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

    if (isEnglish && isNumber && isMoreThanEight && isSpecialCharacter) {
      setState(2)
    } else {
      setState(1)
    }

    if (state === 2 && inputCheck === 2) {
      setTotalState(2)
      return
    }
    setTotalState(1)
  }, [
    isEnglish,
    isNumber,
    isMoreThanEight,
    inputValue,
    isSpecialCharacter,
    inputCheck,
    state,
  ])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'English':
        setIsEnglish(isValid)
        break
      case 'Number':
        setIsNUmber(isValid)
        break
      case 'Eight':
        setIsMoreThanEight(isValid)
        break
      case 'SpecialCharacter':
        setIsSpecialCharacter(isValid)
        break
    }
  }

  const chooseImage = (state) => {
    switch (state) {
      case 0:
        return empty
      case 1:
        return wrong
      case 2:
        return right
    }
  }

  const onChangeCheckInput = (e) => {
    if (inputValue == e.target.value) {
      setInputCheck(2)
      return
    }
    setInputCheck(1)
  }
  return (
    <Register>
      <InfoComponent>
        <Label htmlfor="Pw" title={'비밀번호 입력'} />
        <InputSpace
          id="Pw"
          onChange={onChangeInput}
          state={state}
          type={'password'}
        />
        <Image className="close" src={chooseImage(state)} alt="close" />
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
      <InfoComponent>
        <Label htmlfor="Pw" title={'비밀번호 확인'} />
        <InputSpace
          id="Pw"
          onChange={onChangeCheckInput}
          state={inputCheck}
          type={'password'}
        />
        <Image className="close" src={chooseImage(inputCheck)} alt="close" />
      </InfoComponent>
      <Next state={totalState} input={inputValue} nextView={'nickname'} />
    </Register>
  )
}

Pw.Layout = ({ children }) => {
  return <div>{children}</div>
}

Pw.Layout.displayName = 'RegisterLayout'

export default Pw
