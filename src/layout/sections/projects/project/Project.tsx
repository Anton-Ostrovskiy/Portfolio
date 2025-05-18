import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type ProjectPropsType = {
  item: {
    title: string
    description: string
    stack: string
    src: string
  }
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <ImgWrapper>
        <Image src={props.item.src} alt="" />
      </ImgWrapper>
      <ContentWrapper>
        <Title>{props.item.title}</Title>
        <Text>{props.item.description}</Text>
        <TechStack>Tech stack:<span>{props.item.stack}</span></TechStack>

        <LinkWrapper>
          <PreviewLink>
            <Icon width={"20"} height={"20"} viewBox={"0 0 20 20"} iconId={"chain"} />
            <Link href={"#!"}>Live Preview</Link>
          </PreviewLink>
          <CodeLink>
            <Icon width={"20"} height={"20"} viewBox={"0 0 30 30"} iconId={"git"} fill={"white"}/>
            <Link href={"#!"}>View Code</Link>
          </CodeLink>
        </LinkWrapper>
      </ContentWrapper>
    </StyledProject>
  )
}

const StyledProject = styled.div`
    width: 100%;
    max-width:550px;
    background: #363636;
    border-radius: 20px;
`

const ImgWrapper = styled.div`
  
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const ContentWrapper = styled.div`
  text-align: start;
  padding: 25px 30px;
`

const Title = styled.h3`
    margin-bottom: 17px;
`

const Text = styled.p`
    margin-bottom: 12px;
`

const TechStack = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.625;
    color: #ccc;
    margin-bottom: 21px;
    span{
      font-weight: 300;
      font-size: 14px;
    }
`

const Link = styled.a`
    text-decoration: underline;
    color:#fff;
    white-space: nowrap;
`

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const PreviewLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const CodeLink = styled(PreviewLink)`
  
`