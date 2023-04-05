import Back from '@components/back/index.js'
import SignUp from '@components/signUp/index.js'
import Level from '@components/level/index.js'
import Line from '@components/line/index.js'

const Register = ({children}) => {
  return (
    <>
      <Back/>
        <SignUp/>
          <Level/>
          <Line/>
          {children}
    </>
  )
}

export default Register
