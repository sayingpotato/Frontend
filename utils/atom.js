import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const LoginStatus = atom({
    key:"LoginStatus",
    default:0,
    effects_UNSTABLE: [persistAtom]
})
export const TotalPw = atom({
    key:"TotalPw",
    default:"",
    effects_UNSTABLE: [persistAtom],
});

export const TotalId = atom({
    key:"TotalId",
    default:"",
    effects_UNSTABLE: [persistAtom],
});