import { useEffect, useState, useRef, use } from 'react'
import Router, { useRouter } from 'next/router'

import Text from "@atoms/text"
import { ContentWholeDiv, ContentDiv } from '../../styles/who/style'

import ImageTitle from '@molecules/imageTitle'

const Who = () => {
    const onClickOwnerRegister = () => {
        Router.push({
          pathname: '/register/auth/ownerself',
          query: {  },
        })
    }

    const onClickRegister = () => {
        Router.push({
          pathname: '/register/auth/self',
          query: {  },
        })
    }
    
    return (
        <div>
            <Text text="누구신가요?" className="whoText"></Text>    
            <ContentWholeDiv>
                <ContentDiv>
                    <ImageTitle onClick={onClickOwnerRegister} imageClassName='whoLogo' textClassName='whoAreText' src="/images/whoOwner.png" alt="/images/whoOwner.png" text="점주님" />
                </ContentDiv>
                <ContentDiv>
                    <ImageTitle onClick={onClickRegister} imageClassName='whoLogo' textClassName='whoAreText' src="/images/whoPotato.png" alt="/images/whoPotato.png" text="감자" />
                </ContentDiv>
            </ContentWholeDiv>
        </div>
        
    )
}

export default Who;