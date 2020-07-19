import { DefaultTheme, css } from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryColor: string,
        secondaryColor: string,
        font: {
            size: string,
            family: string,
            weight: string
        },
        color: {
            default: string,
            button: string
        },
        button: {
            border: string,
            background: string
        }
    }
}

export const textBase = css`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size};
  font-weight: ${props => props.theme.font.weight};
  color: ${props => props.theme.color.default};
`;

export const lightTheme: DefaultTheme = {
    primaryColor: "#333",
    secondaryColor: "#666",
    font: {
        size: "17px",
        family: "Helvetica",
        weight: "normal"
    },
    color: {
        default: "white",
        button: "red"
    },
    button: {
        border: "1px solid red",
        background: "white"
    }
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#fff",
    secondaryColor: "#cacaca",
    font: {
        size: "17px",
        family: "Helvetica",
        weight: "normal"
    },
    color: {
        default: "black",
        button: "red"
    },
    button: {
        border: "1px solid red",
        background: "black"
    }
};