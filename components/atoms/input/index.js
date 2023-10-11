import { StyledInput } from './style';

const Input = ({ className, type, onChange, value }) => {

    return (
        <StyledInput className={className} type={type} onChange={onChange} value={value} />
    );
};

export default Input;