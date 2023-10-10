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

const College = () => {
  const [inputCustomerNumberValue, setInputCustomerNumberValue] = useState('')
  const [inputCustomerDeptValue, setInputCustomerDeptValue] = useState('')
  const [inputCustomerCollegeValue, setInputCustomerCollegeValue] = useState('')

  const [isMoreThanTwo, setIsMoreThanTwo] = useState(false)
  const [isKoreanEnglishDept, setIsKoreanEnglishDept] = useState(false)
  const [isKoreanEnglishCollege, setIsKoreanEnglishCollege] = useState(false)

  const setRegisterLevel = useSetRecoilState(RegisterLevel)
  const [state, setState] = useState(0)

  const actionCustomerNumber = ['Number']
  const actionCustomerDept = ['KoreanEnglish']
  const actionCustomerCollege = ['KoreanEnglish']

  const onChangeCustomerNumberInput = (e) => {
    setInputCustomerNumberValue(e.target.value)
  }

  const onChangeCustomerDeptInput = (e) => {
    setInputCustomerDeptValue(e.target.value)
  }

  const onChangeCustomerCollegeInput = (e) => {
    setInputCustomerCollegeValue(e.target.value)
  }

  useEffect(() => {
    setRegisterLevel(2)
  }, [])

  useEffect(() => {
    if (!inputCustomerNumberValue || !inputCustomerDeptValue|| !inputCustomerCollegeValue) {
      setState(0)
      return
    }

    if (isMoreThanTwo && isKoreanEnglishDept && isKoreanEnglishCollege) {
      setState(2)
      return
    }

    setState(1)
  }, [inputCustomerNumberValue, inputCustomerDeptValue, inputCustomerCollegeValue, isMoreThanTwo, isKoreanEnglishDept, isKoreanEnglishCollege])

  const handleColorChange = (action, isValid) => {
    switch (action) {
      case 'Number':
        setIsMoreThanTwo(isValid)
        break
      case 'KoreanEnglish':
        setIsKoreanEnglishDept(isValid)
        setIsKoreanEnglishCollege(isValid)
        break
    }
  }

  return (
    <Register>
        <InfoComponent>
            <Label htmlfor="CustomerNumber" title={'학번 입력'} />
            <InputSpace id="CustomerNumber" onChange={onChangeCustomerNumberInput} state={state} />
            <RegexComponent>
                {actionCustomerNumber.map((item, index) => {
                return (
                    <Regex
                        action={item}
                        key={index}
                        input={inputCustomerNumberValue}
                        onValidityChange={handleColorChange}
                    />
                )
                })}
            </RegexComponent>
        </InfoComponent>

        <InfoComponent>
            <Label htmlfor="CustomerDept" title={'학과명 입력'} />
            <InputSpace id="CustomerDept" onChange={onChangeCustomerDeptInput} state={state} />
            <RegexComponent>
                {actionCustomerDept.map((item, index) => {
                return (
                    <Regex
                        action={item}
                        key={index}
                        input={inputCustomerDeptValue}
                        onValidityChange={handleColorChange}
                    />
                    )
                })}
            </RegexComponent>
        </InfoComponent>

        <InfoComponent>
            <Label htmlfor="CustomerCollege" title={'대학교명 입력'} />
            <InputSpace id="CustomerCollege" onChange={onChangeCustomerCollegeInput} state={state} />
            <RegexComponent>
                {actionCustomerCollege.map((item, index) => {
                return (
                    <Regex
                        action={item}
                        key={index}
                        input={inputCustomerCollegeValue}
                        onValidityChange={handleColorChange}
                    />
                    )
                })}
            </RegexComponent>
        </InfoComponent>

        <Next state={state} input={[inputCustomerNumberValue, inputCustomerDeptValue, inputCustomerCollegeValue]} nextView={'login'} />
    </Register>
  )
}

College.Layout = ({ children }) => {
  return <div>{children}</div>
}

College.Layout.displayName = 'RegisterLayout'

export default College
