import styled from 'styled-components'
// import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Icon } from '../../../components/icon/Icon'
import { SocialList } from '../../../components/socialList/SocialList'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'
import emailjs from '@emailjs/browser'
import { ElementRef, useRef } from 'react'

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return

        emailjs
            .sendForm('service_pnw232l', 'template_mwttojr', form.current, {
                publicKey: 'JS79o22pcNlph6zcg',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            e.target.reset()
    };

    return (
        <StyledContacts id={"contact"}>
            <Container>
                <ContentWrapper>
                    <TitleWrapper>
                        <Title>
                            Let’s
                            Connect
                        </Title>
                        <SocialList />
                    </TitleWrapper>
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <FieldWrapper>
                            <TextField >Your name:</TextField>
                            <Field required aria-label="Your name" name="user_name"/>
                        </FieldWrapper>
                        <FieldWrapper>
                            <TextField >Your email  address:</TextField>
                            <Field required type='email' aria-label="Your email  address" name="email" />
                        </FieldWrapper>
                        <FieldWrapper>
                            <TextField >Tell about the project:</TextField>
                            <Field required aria-label="Tell about the project:" as={"textarea"} name="message"/>
                        </FieldWrapper>
                        <Button type={"submit"}>Send
                            <Icon iconId={"arrow"} width={"22"} height={"20"} viewBox={"0 0 22 20"} />
                        </Button>
                    </StyledForm>
                </ContentWrapper>
            </Container>
        </StyledContacts>
    )
}


const StyledContacts = styled.section`
    min-height: 100vh;
    /* margin-bottom: 230px; */
    display: flex;
`

const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media ${theme.media.tablet}{
       max-width: none;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media ${theme.media.tablet}{
        flex-direction: column;
    }
`

const TitleWrapper = styled.div`
        width: calc( (100% - 40px) / 2);
`

const Title = styled.h2`
${font({ family: "'Poppins', sans-serif", weight: 700, color: "#fff", lineHeight: 1.2, Fmax: 100, Fmin: 56 })}
    /* font-family: "Poppins", sans-serif; */
    /* font-weight: 700; */
    /* font-size: 100px; */
    /* line-height: 1.2; */
    /* color: #fff; */
    margin-bottom: 32px;
`

const FieldWrapper = styled.div`

    margin-bottom: 40px;
`

const Field = styled.input`
    width: 100%;
    height: 60px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    /* outline: none; */
    transition: .3s;
    resize: none;
    color: #fff;
`

const TextField = styled.label`
    display: block;
    color: #fff;
`
