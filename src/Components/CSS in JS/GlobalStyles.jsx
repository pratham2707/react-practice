import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    h1 {
        color: orange;
        text-decoration: underline orange wavy 2px;
    }
    p {
        color: grey;
        text-decoration: underline grey wavy 2px;
    }
`

function GlobalStyles() {
    return (
        <>
            <GlobalStyle />
            <h1>I got my styling from GlobalStyle</h1>
            <p>I got my styling from GlobalStyle</p>
        </>
    )
}

export default GlobalStyles;