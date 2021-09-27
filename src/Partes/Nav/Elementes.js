import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';

import { Link as LinkR } from 'react-router-dom';

export const NavContainer = styled.div`
    
    
    @media screen and (min-width: 320px) {
        display: none;
    }
    @media screen and (min-width: 768px) {
        display: none;
    }
    @media screen and (min-width: 993px) {
        width: 100%;
        height: 125px;
        display: grid; 
        grid-template-columns: [uno] 200px [dos] 200px [tres] auto [cuatro] 250px [end];
    }
    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 125px;
        display: grid; 
        grid-template-columns: [uno] 250px [dos] 250px [tres] auto [cuatro] 300px [end];
    }

    border-bottom: 3px solid  ${props => props.theme.colorDetalles};
`

export const ProyectCont = styled(LinkS)`
    grid-column-start: uno;
    grid-column-end: dos;
    padding: 10px;
    font-size: 24px;
    color:  ${props => props.theme.colorLetras};
    border-right: 3px solid  ${props => props.theme.colorDetalles};
    ${({logo}) => (logo ? `display: none` : `display: flex`)};
    cursor: pointer;
    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
    }
`

export const ContactCont = styled(LinkS)`
    grid-column-start: dos;
    grid-column-end: tres;
    border-right: 3px solid  ${props => props.theme.colorDetalles};
    padding: 10px;
    font-size: 24px;
    color:  ${props => props.theme.colorLetras};
    ${({logo}) => (logo ? `display: none` : `display: flex`)};
    cursor: pointer;
    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
    }
`

export const AboutCont = styled(LinkS)`
    grid-column-start: tres;
    grid-column-end: cuatro; 
    ${({logo}) => (logo ? `display: none` : `display: flex`)};
    padding: 10px;
    font-size: 24px;
    color:  ${props => props.theme.colorLetras};
    cursor: pointer;
    transition: all 0.7s ease-in-out;

    &:hover{
        color:  ${props => props.theme.colorFondo};
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
    }
`

export const IconCont = styled.div`
    grid-column-start: cuatro;
    grid-column-end: end;
    border-left: 3px solid  ${props => props.theme.colorDetalles};
    height: 125px;    
    
    
`

export const LogoCont = styled(LinkR)`
    grid-column-start: uno;
    grid-column-end: cuatro;
    display :${({logo}) => (logo ? `flex` : `none`)};
    align-items: center;
    justify-content: center;
    height: 125px;    
    
`

export const Logo = styled.img`
        
    width: 100%;
    height: 100%;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
        
    
`

export const LogoPag = styled.img`
        
    width: 400px;
    height: 100px;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
        
    
`


/*display: flex;
    align-items: center;
    justify-content: center; */