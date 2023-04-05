import styled from "styled-components";

const SignUpComponent = styled.div`
    background-color: #28469C;
`;

const TitleTop = styled.div`
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 3px;
    padding: 28px 20px 28px 20px ;
    background-color: #28469C;
    color: white;
`;

const TitleUnder = styled.div`
    display: flex;
    padding: 4px 20px 20px 24px;
    color: #FFFFFF;
    opacity: 0.6;
    box-shadow: 0 4px 4px 0 gray;
    .description {
        font-size: 16px;
        font-weight: 300;
    }
    .logo {
        margin-left: auto;
        font-size: 16px;
        font-weight: 700;
    }
`;

export {SignUpComponent, TitleTop, TitleUnder};