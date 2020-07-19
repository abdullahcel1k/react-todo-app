import styled from "styled-components";

export const TaskList = styled.ul`
    overflow: auto;
    max-height: 350px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #db958b;
        border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: grey;
    }
`;