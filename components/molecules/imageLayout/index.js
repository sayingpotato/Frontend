import { StyledImageLayoutWholeDiv, StyledImageLayoutOneDiv, StyledImageLayoutTwoDiv, StyledImageLayoutThreeDiv } from './style';

import Image from "@atoms/image";

const imageLayout = ({ imageSrc, className }) => {
    return (
        <StyledImageLayoutWholeDiv>
            <StyledImageLayoutOneDiv>
                <Image src={imageSrc.mainImg} alt={imageSrc.mainImg} className="imageLayoutImage"/>
            </StyledImageLayoutOneDiv>
            <StyledImageLayoutTwoDiv>
                <Image src={imageSrc.subImg1} alt={imageSrc.subImg1} className="imageLayoutMiddleImage"/>
                <Image src={imageSrc.subImg2} alt={imageSrc.subImg2} className="imageLayoutMiddleImage"/>
            </StyledImageLayoutTwoDiv>
            <StyledImageLayoutThreeDiv>
                <Image src={imageSrc.subImg3} alt={imageSrc.subImg3} className="imageLayoutImage"/>
            </StyledImageLayoutThreeDiv>
        </StyledImageLayoutWholeDiv>
    );
};

export default imageLayout;