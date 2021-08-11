import styled from "styled-components";


export const AdminContent = styled.div`
    width: ${(props) => props.show ? "calc(100% - 300px)" : "calc(100% - 100px)"};
    margin: 0 auto;
`;