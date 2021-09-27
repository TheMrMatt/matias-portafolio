import styled from "styled-components";

import {keyframes} from 'styled-components'


export const Fondo = styled.div`
    grid-column-start: uno;
    grid-column-end: cuatro;
    min-height: 82vh;
    background: url(${({fondo}) => fondo});
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const Grafic = styled.img`
    position: absolute;
    top:0;
    left:0;
    -o-object-fit: cover;
    object-fit: cover;
    
    background-size: cover;
    @media screen and (min-width: 320px) {
        
        height: 100%;
       
    }
    @media screen and (min-width: 768px) {
        
        height: 100%;
        
    }
    @media screen and (min-width: 993px) {
        width: 220px;
        height: 100%;
    }
    @media screen and (min-width: 1200px) {
        width: 220px;
        height: 100%;
    }
`

export const Bienvenido = styled.div`
    pointer-events: none;
    @media screen and (min-width: 320px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 16px;
        /* identical to box height */
        text-align: center;
       
        color:  ${props => props.theme.colorLetras};
    }
    @media screen and (min-width: 768px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 17px;
        /* identical to box height */
        text-align: left;

        color:  ${props => props.theme.colorLetras};

    }
    @media screen and (min-width: 993px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 17px;
        /* identical to box height */
        text-align: left;

        color:  ${props => props.theme.colorLetras};
    }
    @media screen and (min-width: 1200px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        /* identical to box height */
        text-align: left;

        color:  ${props => props.theme.colorLetras}; 
    }

`

const animation = keyframes`
    0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
`

export const Matias = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    
    line-height: 32px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color:  ${props => props.theme.colorLetras};
    @media screen and (min-width: 320px) {
        font-size: 2.5em;
       
    }
    @media screen and (min-width: 768px) {
        font-size: 5em;
        
    }
    @media screen and (min-width: 993px) {
        font-size: 6.25em;
    }
    @media screen and (min-width: 1200px) {
        font-size:9em;
    }


   

`

export const Matias2 = styled.span`
    position: absolute;
    
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    
    line-height: 32px;
    /* identical to box height */
    text-align: center;
    letter-spacing: 0.4em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    @media screen and (min-width: 320px) {
        font-size: 2.5em;
       
    }
    @media screen and (min-width: 768px) {
        font-size: 5em;
        
    }
    @media screen and (min-width: 993px) {
        font-size: 6.25em;
    }
    @media screen and (min-width: 1200px) {
        font-size:9em;
    }
`

export const MatiasCont2 = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    
    @media screen and (min-width: 320px) {
        height: 150px;
        margin-left: 0.52em;
        margin: 50px 0px 80px 0px; 
    }
    @media screen and (min-width: 768px) {
        height: 200px;
        margin-left: 1.0em;
        margin: 80px 0px 100px 0px; 
    }
    @media screen and (min-width: 993px) {
        height: 250px;
        margin-left: 1.0em;
    }
    @media screen and (min-width: 1200px) {
        height: 300px;
        margin-left: 1.0em;
    }


`

export const MatiasCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    
    @media screen and (min-width: 320px) {
        height: 150px;
        margin-left: 0.52em;
        margin: 50px 0px 80px 0px; 
    }
    @media screen and (min-width: 768px) {
        height: 200px;
        margin-left: 1.0em;
        margin: 80px 0px 100px 0px; 
    }
    @media screen and (min-width: 993px) {
        height: 250px;
        margin-left: 1.0em;
    }
    @media screen and (min-width: 1200px) {
        height: 300px;
        margin-left: 1.0em;
    }

   

    &:hover {
        


            ${Matias}{
                text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

                animation: ${animation} 500ms infinite;
            }   
    }

`

export const Copy = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    
    /* identical to box height */
    pointer-events: none;

    color:  ${props => props.theme.colorLetras};

    @media screen and (min-width: 320px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 17px;
        /* identical to box height */
        
        width: 260px;

        color:  ${props => props.theme.colorLetras};
    }
    @media screen and (min-width: 768px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 15px;
        /* identical to box height */
        width: 400px;

        color:  ${props => props.theme.colorLetras};

    }
    @media screen and (min-width: 993px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 15px;
        /* identical to box height */
        width: 250px;

        color:  ${props => props.theme.colorLetras};
    }
    @media screen and (min-width: 1200px) {
        font-family: Redline;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 18px;
        /* identical to box height */
        width: 250px;
        
        color:  ${props => props.theme.colorLetras};
    }
`

export const TextCont = styled.div`
    
    @media screen and (max-width: 768px) {
        display: flex;
        background-color:  ${props => props.theme.colorFondo};    
       
    }
    @media screen and (min-width: 993px) {
        display: none; 
    }
    @media screen and (min-width: 1200px) {
        display: none; 
    }
`

export const Lateral = styled.div`
    
 
    @media screen and (max-width: 993px) {
        display:none;   
    }
    @media screen and (min-width: 993px) {
        grid-column-start: cuatro;
        grid-column-end: end;
        border-left: 3px solid  ${props => props.theme.colorDetalles};
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

    }
    @media screen and (min-width: 1200px) {
        grid-column-start: cuatro;
        grid-column-end: end;
        border-left: 3px solid  ${props => props.theme.colorDetalles};

    }
`

export const Asteriscos = styled.div`
    width: 100%;
    height: 150px;
    
    border-top: 3px solid  ${props => props.theme.colorDetalles};
`
export const Ilus = styled.img`
    width: 100%;
    height: 100%;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
`

export const CopyCont = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
   
`