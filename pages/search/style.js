import styled from "styled-components";

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-left: 4px;
`;

const FirstSearchDiv = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 3px solid #747474;
    width: 80%;
    Input {
        flex-grow: 1;
    }
`;

const SecondSearchDiv = styled.div`
    Button {
        padding: 6px 12px 6px 12px;
        margin-left: 12px;
    }
`;

const SearchTag = styled.div`
    font-size: 12px;
    font-weight: 900;
    background-color: white;
    padding: 4px 12px 4px 12px;
    margin-top: 4px;
    display: inline-block;
`;


const StoreNameList = styled.div`
    background-color: white;
    display: flex;
    gap: 12px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const StoreName = styled.div`
    background-color: #EFEFEF;
`;
const StoreNames = styled.div`
    font-size:12px;
    font-weight: 700;
    text-align: center;
    margin-top: 6px;
`;

const Store = styled.div`
    padding: 16px;
`;

const StorePicture = styled.div`
    .storeImage {
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Menu = styled.div`
    display: flex;
    padding: 12px;
    border-bottom: 1px solid #B0B0B0;

    .menuImage {
        object-fit: cover;
        border-radius: 8px;
    }
`;

const MenuName = styled.div`
    background-color: #EFEFEF;
    height: 10vh;   
`;

const MenuNameList = styled.div`
    background-color: white;
`;

const MenuInfo = styled.div`
    padding-left: 12px;
`
const MenuNames = styled.div`
    font-weight: 800;
`
const MenuDescription = styled.div`
    margin-top: 6px;
    font-size:10px;
    color: #575656;
`
const MenuMenu = styled.div`
    font-size:10px;
    margin-top: 6px;
    color: #28469C;
    display: flex;
    gap: 12px;
    p {
        margin: 0;
    }
`

export {SearchDiv, FirstSearchDiv, SecondSearchDiv, StoreName, MenuName, SearchTag, MenuNameList, StoreNameList, StoreNames, Store, StorePicture, Menu, MenuInfo, MenuDescription, MenuMenu, MenuNames}