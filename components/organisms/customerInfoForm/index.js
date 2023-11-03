import InlineText from "@components/molecules/inlineText"
import Line from "@components/line"

const CustomerInfoForm = (props) => {

    return (
        <>
            <InlineText textOne="ID" textTwo={props.loginId} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="닉네임" textTwo={props.nickname} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="학번" textTwo={props.customerNumber} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="학과" textTwo={props.customerDept} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="대학교" textTwo={props.customerCollege} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
            <InlineText textOne="학년" textTwo={props.customerGrade} divClassName="infoForm" textOneClassName="infoFormTitle" textTwoClassName="infoFormContent" />
            <Line />
        </>
    )
}

export default CustomerInfoForm
