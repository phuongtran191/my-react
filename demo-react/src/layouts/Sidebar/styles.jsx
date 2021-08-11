import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.show ? "0" : "-200")};

  width: 300px;
  height: 100%;

  z-index: 9;
  background-color: #2c353e;
  transition: all 0.4s;
`;
export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0rem 1rem;
`;
export const SidebarMenu = styled.div`
    padding: 1rem;
`;
export const SidebarMenuItem = styled.div`
    display: flex;
    align-items: center;
    height: 40px;

    padding: 0rem 1rem;

    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #3c4955;
    }
    ${(props) => props.active && css`
        background-color: #141d27 !important;
    `};
`;
