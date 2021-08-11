import styled, { css } from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: ${(props) => (props.show ? "300px" : "150px")};
  height: 100%;
  z-index: 9;
  
  background-color: #2c353e;
  overflow-y: auto;
  transition: all 0.4s;
`;
export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0rem 1rem;
    color: #fff;
    font-size: 1.3rem;
`;
export const SidebarBrand = styled.div`
    margin: ${(props) => props.show ? "1rem auto" : ".3rem"};
    
    & > img {
        width: 75px;
    }
`;
export const SidebarMenu = styled.div`
    padding: 1rem;
`;
export const SidebarMenuItem = styled.div`
    position: relative;
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
    & > span:last-child {
        padding-left: 1rem;
    }
`;
