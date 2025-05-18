import styled from 'styled-components'
import photo from '../../../assets/images/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { font } from '../../../styles/Common'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import { theme } from '../../../styles/Theme'

export const Home = () => {
    return (
        <StyledMain id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} gap={"15px"}>
                    <TextWrapper>
                        <Text>Hi</Text>
                        <Name>I am Anton</Name>
                        <MainTitle>
                            <p>A Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </MainTitle>
                    </TextWrapper>
                    <Tilt
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={1.1}
                        gyroscope={true}>
                        <PhotoWrapper>
                            <Photo src={photo} alt="my photo" />
                        </PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    /* padding-top: 350px; */
    /* margin-bottom: 300px; */
    display: flex;
    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
            justify-content: center;
            gap: 40px;
        }
  }
`

const PhotoWrapper = styled.div`
    position: relative;
    max-width:  350px;
    max-height: 350px;
    height: 100%;
    &::before{
        content: "";
        position: absolute;
        top: -8px; 
        left: -8px; 
        right: -8px; 
        bottom: -8px; 
        background: linear-gradient(180deg, #E70FAA 0%, #00C0FD 100%); 
        border-radius: 50%;  
        z-index: -1; 
    }
`

const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1 / 1;
    z-index: -2;
`

const TextWrapper = styled.div`
    width:100%;
    max-width: 410px;
    text-align: start;
`

const MainTitle = styled.h1`
    ${font({ family: "'Poppins', sans-serif", weight: 700, color: "#d9d9d9", lineHeight: 1.2069, Fmax: 58, Fmin: 36 })}
    letter-spacing: -0.02em;
    white-space: nowrap;
    p{
        display: none;
    }
`

const Name = styled.p`
${font({ family: "'Poppins', sans-serif", weight: 700, color: "#d9d9d9", lineHeight: 1.2069, Fmax: 58, Fmin: 36 })}
    letter-spacing: -0.02em;
`

const Text = styled.p`
${font({ family: "'Poppins', sans-serif", weight: 700, color: "#d9d9d9", lineHeight: 1.2069, Fmax: 58, Fmin: 36 })}
    letter-spacing: -0.02em;
`