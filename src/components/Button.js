import styled from 'styled-components'


export const Button = styled.button`
/* Adapt the colors based on primary prop */
background: transparent;
text-transform: capitalize;
font-size: 1.4rem;
border: 0.05rem solid var(--lightBlue);
border-color: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
color: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem; 
cursor: pointer; 
margin: 0.2rem 0.5rem 0.2rem 0; 
transition: all 0.5s ease-in-out; 
&:hover {
    background: ${props => props.cart?"var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus {
    outline: none;
}
`;
 
