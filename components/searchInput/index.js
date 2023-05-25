import { Input } from "./style"

const SearchInput = ({onChange, value}) => {
    return (
        <Input 
            value={value}
            onChange = {onChange}/>
    )
}
export default SearchInput