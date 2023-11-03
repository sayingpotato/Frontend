import Line from "@components/line"
import InlineText from "@components/molecules/inlineText"

const OwnerInfoForm = (props) => {
    return (
        <>
            <InlineText textOne="ID" textTwo={props.loginId} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="닉네임" textTwo={props.nickname} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="사업자 등록 번호" textTwo={props.ownerBusinessNumber} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
        </>
    )
}

export default OwnerInfoForm
