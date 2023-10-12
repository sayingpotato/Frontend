import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()

export const LoginStatus = atom({
    key:"LoginStatus",
    default:false,
    effects_UNSTABLE: [persistAtom],
})

export const LoginOwnerStatus = atom({
    key:"LoginOwnerStatus",
    default:false,
    effects_UNSTABLE: [persistAtom],
})

export const TotalPw = atom({
    key:"TotalPw",
    default:"",
});

export const RegisterInfo = atom({
    key:"RegisterInfo",
    default:"",
});

export const RegisterOwnerInfo = atom({
    key:"RegisterOwnerInfo",
    default:"",
});

export const RegisterLevel = atom({
    key:"RegisterLevel",
    default:0,
});

export const Token = atom({
    key:"Token",
    default:"",
    effects_UNSTABLE: [persistAtom],
});

export const StudentCard = atom({
    key:"StudentCard",
    default:"",
})

export const OrderData = atom({
    key:"OrderData",
    default:"",
})

export const ReviewData = atom({
    key:"ReviewData",
    default:"",
})

export const WhoStatus = atom({
    key:"WhoStatus",
    default:"",
})