import styled from 'styled-components';

const MyHeader = styled.h1`
        color: indigo;
        text-decoration: overline indigo dotted 2px;
    `

function BasicCSSInJS() {
    return (
        <>
            <MyHeader>Hello! I am created through CSS in JS!</MyHeader>
        </>
    )
}

export default BasicCSSInJS;