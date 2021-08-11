import styled from "styled-components";
import { Button } from 'antd';
import { Images } from "../../assets/constants/images";

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 135px;
    padding: 0 11em;
    background-image: url(${Images.bgTop});
    background-position-x: left;
    background-position-y: bottom;
    background-size: 10px 135px;
    background-repeat: repeat-x;
    background-attachment: scroll;
    background-origin: initial;
    background-clip: initial;
    background-color: transparent;
`;
export const NavButton = styled(Button)`
    margin-top: 2rem;
    margin-right: 22px !important;

    font-size: 1.2rem;
    font-weight: bold;
    color: black;

    &:hover {
        color: red;
    }
`;