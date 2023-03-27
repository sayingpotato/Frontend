import { useRecoilState } from 'recoil';
import { LoginStatus } from '../../utils/atom.js';
import Total from '../../styles/total.js'
import { Practice } from './style.js';

function Sample() {
  const [login, setLogin] = useRecoilState(LoginStatus);

  return (
    <Practice>{login}sss</Practice>
  );
}

export default Sample;