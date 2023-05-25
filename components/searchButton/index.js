import { Button } from "./style"

const SearchButton = ({backGroundColor, color, onClick}) => {
    return (
        <Button 
            backGroundColor={backGroundColor}
            color={color}
            onClick={onClick}>검색</Button>
    )
}

export default SearchButton