import styled from "styled-components";
import {Link} from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff' : 'rgb(90, 70, 155)')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? 'rgb(90, 70, 155)' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '15px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? 'rgb(90, 70, 155)' : '#000')};
        border: 1px solid #fff;
    }
`