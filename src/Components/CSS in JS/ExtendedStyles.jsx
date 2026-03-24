import styled from 'styled-components';

const button = styled.button`
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
`

const PrimaryButton = styled(button)`
    background-color: #007bff;
    color: #fff;
`

const SecondaryButton = styled(button)`
    background-color: #6c757d;
    color: #fff;
`

function ExtendedStyles() {
    return (
        <>
            <PrimaryButton>Primary Button</PrimaryButton>
            <SecondaryButton>Secondary Button</SecondaryButton>
        </>
    )
}

export default ExtendedStyles;