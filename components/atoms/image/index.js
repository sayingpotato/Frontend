import { StyledImage } from './style';

const Image = ({ src, alt, className, onClick }) => {

    return (
        <StyledImage src={src} alt={alt} className={className} onClick={onClick} />
    );
};

export default Image;