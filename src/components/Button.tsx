import styled from "styled-components";

export const Button = styled.button`
    width: 150px;
    display: flex;
    align-items: center;
    gap: 45px;
    background: transparent;
    border: none;
    color: #676cdb;
    transition: all.3s;
    cursor: pointer;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 30px;
    line-height: 1.2;

    svg {
        stroke: #676cdb;
        pointer-events: none;
    }
    &:hover{
        color: #fff;
        svg {
            stroke:#fff;
        }
    }
`
