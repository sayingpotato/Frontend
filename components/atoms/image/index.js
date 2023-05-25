import { StyledImage } from './style';

const Image = ({ src, alt, className }) => {

    return (
        <StyledImage src={src} alt={alt} className={className}/>
    );
};

export default Image;