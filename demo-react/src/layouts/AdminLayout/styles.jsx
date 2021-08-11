import styled from "styled-components";

export const AdminContent = styled.div`
    position: relative;
    min-height: 100vh;

    margin-left: ${(props) => props.show ? "300px" : "150px"};
    transition: all 0.4s;
`;