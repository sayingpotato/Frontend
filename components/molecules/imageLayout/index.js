import { StyledImageLayoutWholeDiv, StyledImageLayoutOneDiv, StyledImageLayoutTwoDiv, StyledImageLayoutThreeDiv } from './style';

import Image from "@atoms/image";

const imageLayout = ({ className }) => {
    return (
        <StyledImageLayoutWholeDiv>
            <StyledImageLayoutOneDiv>
                <Image src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" className="imageLayoutImage"/>
            </StyledImageLayoutOneDiv>
            <StyledImageLayoutTwoDiv>
                <Image src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" className="imageLayoutMiddleImage"/>
                <Image src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" className="imageLayoutMiddleImage"/>
            </StyledImageLayoutTwoDiv>
            <StyledImageLayoutThreeDiv>
                <Image src="images/bronzeMedal.svg" alt="images/bronzeMedal.svg" className="imageLayoutImage"/>
            </StyledImageLayoutThreeDiv>
        </StyledImageLayoutWholeDiv>
    );
};

export default imageLayout;