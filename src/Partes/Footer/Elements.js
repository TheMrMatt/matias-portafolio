import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaDownload} from "react-icons/fa";


export const Container = styled.div`
    width: 100%;
    min-height: 150px;
    display: grid;
    grid-template-columns:  auto 300px;
    grid-template-areas:  'red cv';
    grid-template-rows: auto;
    border-top: 3px solid ${props => props.theme.colorDetalles};
    @media screen and (min-width: 320px) {
        
        grid-template-columns: auto;
        grid-template-rows: auto
                            150px ;
        grid-template-areas:  'red'
                              'cv';
    }
    @media screen and (min-width: 768px) {
        
        grid-template-columns: auto 200px;
        grid-template-rows: auto;
        grid-template-areas:  'red cv';
    }
    @media screen and (min-width: 993px) {
        
        grid-template-columns: auto 250px;   
        grid-template-rows: auto;
        grid-template-areas:  'red cv';
    }
    @media screen and (min-width: 1200px) {
        
        grid-template-columns: auto 300px;          
        grid-template-rows: auto;
        grid-template-areas:  'red cv';
    }



`
 
export const Redes = styled.div`
    padding: 10px;
    grid-area: red;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    
    @media screen and (min-width: 320px) {
        border-bottom: 3px solid ${props => props.theme.colorDetalles};
        
    }
    @media screen and (min-width: 768px) {
        border-right: 3px solid ${props => props.theme.colorDetalles};
        border-bottom: 0px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 993px) {
        border-right: 3px solid ${props => props.theme.colorDetalles};
        border-bottom: 0px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        border-right: 3px solid ${props => props.theme.colorDetalles};
        border-bottom: 0px solid ${props => props.theme.colorDetalles};
    }
`    

export const RedesWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
`

export const Wrapp = styled.div`
    width: 50%;
    

    @media screen and (min-width: 320px) {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    @media screen and (min-width: 768px) {
        height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
    @media screen and (min-width: 993px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    @media screen and (min-width: 1200px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;         
    }
`

export const Red = styled(LinkR)`
    
`
export const Insta = styled(FaInstagramSquare)`
    width: 60px;
    height: 60px;
    color: ${props => props.theme.colorLetras};
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    
    &:hover{
        color: ${props => props.theme.colorDetalles};
        transition: all 0.7s ease-in-out;
    }
`

export const Link = styled(FaLinkedin)`
    width: 60px;
    height: 60px;
    color: ${props => props.theme.colorLetras};
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    
    &:hover{
        color: ${props => props.theme.colorDetalles};
        transition: all 0.7s ease-in-out;
    }

`

export const Twi = styled(FaTwitterSquare)`
    width: 60px;
    height: 60px;
    color: ${props => props.theme.colorLetras};
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    
    &:hover{
        color: ${props => props.theme.colorDetalles};
        transition: all 0.7s ease-in-out;
    }
`

export const GitHub = styled(FaGithubSquare)`
    width: 60px;
    height: 60px;
    color: ${props => props.theme.colorLetras};
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    
    &:hover{
        color: ${props => props.theme.colorDetalles};
        transition: all 0.7s ease-in-out;
    }
`

export const Ilustracion = styled.img`
    width: 100%;
    
    background-size: cover;
    @media screen and (min-width: 320px) {
        max-height: 80px;
    }
    @media screen and (min-width: 768px) {
        max-height: 100px;
    }
    @media screen and (min-width: 993px) {
        max-height: 125px;
    }
    @media screen and (min-width: 1200px) {
        max-height: 125px;  
    }
`

export const Cv = styled.div`
    
    
    grid-area: cv;
    
    
    padding: 15px;
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.155em;

    color: ${props => props.theme.colorLetras};

    
`

export const CvWrap = styled.div`

`

export const Texto = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */
    pointer-events: none;
    letter-spacing: 0.155em;

    color: ${props => props.theme.colorLetras};
`

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    
`


export const DownIcon = styled(FaDownload)`
    width: 30px;
    height: 30px;
    transition: all 0.7s ease-in-out;
    color: ${props => props.theme.colorLetras};
    
`

export const ButonPr = styled.a`
    text-decoration: none;
    width: 200px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid ${props => props.theme.colorDetalles};
    cursor: pointer;
    background-color: ${props => props.theme.colorFondo}; 
    transition: all 0.7s ease-in-out;


    &:hover{
        border: 2px solid ${props => props.theme.colorFondo};
        cursor: pointer;
        background-color: ${props => props.theme.colorDetalles}; 
        transition: all 0.7s ease-in-out;
        ${DownIcon}{
            color: ${props => props.theme.colorFondo};
            transition: all 0.7s ease-in-out;
        }
    }



`

