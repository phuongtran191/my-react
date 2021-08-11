import styled from "styled-components";

export const DashboardContent = styled.div`
    position: relative;
    min-height: 100vh;
    padding: 1rem;

    margin-left: ${(props) => props.show ? "300px" : "150px"};
    transition: all 0.4s;
`;