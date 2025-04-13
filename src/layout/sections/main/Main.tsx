import React from 'react'
import styled from 'styled-components'
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <TextWrapper>
                        <Text>Hi</Text>
                        <Name>I am Anton</Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </TextWrapper>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    padding-top: 180px;
    margin-bottom: 190px;
`

const PhotoWrapper = styled.div`
position: relative;
    width:  350px;
    height: 350px;
    &::before{
        content: "";
        position: absolute;
        top: -8px; /* Сдвигаем вверх на 8px */
        left: -8px; /* Сдвигаем влево на 8px */
        right: -8px; /* Сдвигаем вправо на 8px */
        bottom: -8px; /* Сдвигаем вниз на 8px */
        background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%); /* Градиент */
        border-radius: 238px; /* Скругление углов для псевдоэлемента (на 8px больше, чем у контейнера) */
        z-index: -1; /* Помещаем псевдоэлемент под изображение */
    }
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 230px;
    object-fit: cover;
    object-position: center;
    z-index: -2;
`

const TextWrapper = styled.div`
    text-align: start;
`

const MainTitle = styled.h1`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`

const Name = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`

const Text = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 58px;
    line-height: 1.2069;
    letter-spacing: -0.02em;
    color: #d9d9d9;
`