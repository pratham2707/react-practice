import styled from 'styled-components';

const Button = styled.button`
    padding: 1rem 2rem;
    background-color: ${props => props.$btntype === 'primary' ? '#007bff' : '#6c757d'};
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    `

function PropsBasedStyles() {
    return (
        <>
            <Button $btntype="primary">Primary Button</Button>
            <Button $btntype="secondary">Secondary Button</Button>
        </>
    )
}

export default PropsBasedStyles;