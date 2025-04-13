import React from 'react'
import styled from 'styled-components'
import { SectionTitle } from '../../../components/SectionTitle'
import { Button } from '../../../components/Button'
import { Container } from '../../../components/Container'
import { Icon } from '../../../components/icon/Icon'
import { SocialList } from '../../../components/socialList/SocialList'

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContentWrapper>
                    <TitleWrapper>
                        <Title>
                            Let’s
                            Connect
                        </Title>
                        <SocialList />
                    </TitleWrapper>
                    <StyledForm>
                        <FieldWrapper>
                            <TextField>Your name:</TextField>
                            <Field />
                        </FieldWrapper>
                        <FieldWrapper>
                            <TextField>Your email  address:</TextField>
                            <Field placeholder={""} />
                        </FieldWrapper>
                        <FieldWrapper>
                            <TextField>Tell about the project:</TextField>
                            <Field placeholder={""} as={"textarea"} />
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
    min-height:100vh;
    display: flex;
`

const StyledForm = styled.form`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`

const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const TitleWrapper = styled.div`
        max-width: 440px;
        width: 100%;
`

const Title = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 100px;
    line-height: 1.2;
    color: #fff;
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
