import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../icon/Icon'
import { animateScroll as scroll } from 'react-scroll'

export const GoTopBtn = () => {

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    })
  }, [])

  return (

    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => { scroll.scrollToTop() }}>
          <Icon iconId={"btn-goTop"} width={"30px"} height={"30px"} viewBox={"0 0 30 30"} />
        </StyledGoTopBtn>
      )}
    </>
  )
}


const StyledGoTopBtn = styled.button`
    position: fixed;
    background-color: black;
    right: 30px;
    bottom: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`