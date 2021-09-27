import styled from "styled-components";
import {keyframes} from 'styled-components'


const animation1 = keyframes`
    from{
        mask-position: 0% 0%;
    }
    to{
        mask-position: 100% 0%;
    }
`


export const Pro = styled.div`
    padding: 10px;

    @media screen and (min-width: 320px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
    }
    @media screen and (min-width: 768px) {
        grid-row-start: uno;
        grid-row-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        

    }
    @media screen and (min-width: 993px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-${({sentido}) => (sentido ? `left` : `right`)}: 3px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: uno;
        grid-column-end: dos;
        grid-area: pro;
        background: url();
        background-size: cover;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        
        border-${({sentido}) => (sentido ? `left` : `right`)}: 3px solid ${props => props.theme.colorDetalles};
    }    
`

export const Fondo = styled.img`
    position: absolute; 
    top:0;
    left: 0;

    width: 100%;
    height: 100%;

`

export const Desc = styled.div`
    
        
  
   padding: 10px;
   
    @media screen and (min-width: 320px) {
        grid-row-start: dos;
        grid-row-end: end;
        border-top: 3px solid ${props => props.theme.colorDetalles};
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;

    }
    @media screen and (min-width: 768px) {
        grid-row-start: dos;
        grid-row-end: end;
        border-top: 3px solid ${props => props.theme.colorDetalles};
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;

    }
    @media screen and (min-width: 993px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;
        border-top: 0px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        grid-column-start: dos;
        grid-column-end: end;
        
        display: flex;
        flex-direction: column;
        grid-area: des;
        align-items: flex-start;
        justify-content: space-between;
        border-top: 0px solid ${props => props.theme.colorDetalles};
    }
`

export const Nombre = styled.div`
    pointer-events: none;
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    
    line-height: 84px;
    letter-spacing: 0.155em;
    z-index: 20;
    color: ${props => props.theme.colorLetras};

    @media screen and (min-width: 320px) {
        font-size: 30px;

    }
    @media screen and (min-width: 768px) {
        font-size: 64px;
    }
    @media screen and (min-width: 993px) {
        font-size: 72px;
    }
    @media screen and (min-width: 1200px) {
        font-size: 96px;
    }

`

export const Identificador = styled.div`
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 63px;
    letter-spacing: 0.06em;
    pointer-events: none;
    color: ${props => props.theme.colorLetras};
`

export const TecsWrap = styled.div`
    width: 100%;
    height: 100px;
    
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
    justify-content: space-between;

`

export const Tecs = styled.div`
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
export const ImagHover = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: -10;
    opacity: 0;
    transition: all 0.7s ease-in-out;

   

`


export const SectionInverse = styled.div`
    min-height: 500px;
    cursor: pointer;
    @media screen and (min-width: 320px) {
        width: 100%;
        
        display: grid; 
        grid-template-columns: [uno] auto [end];
        grid-template-rows: [uno] auto [dos] 200px [end];
        grid-template-areas:    'pro' 
                                'des';
    }
    @media screen and (min-width: 768px) {
        display: grid; 
        grid-template-columns: [uno] auto [end];
        grid-template-rows: [uno] auto [dos] 200px [end];
        grid-template-areas:  'pro' 
                              'des'; 
    }
    @media screen and (min-width: 993px) {
        display: grid; 
        grid-template-columns: ${({sentido}) => (sentido ? `[uno] 250px [dos] auto [end]` : `[uno] auto [dos] 250px [end]`)};  
        grid-template-areas:  ${({sentido}) => (sentido ? `'des pro'` : `'pro des'`)}; 
        grid-template-rows: [uno] auto [end];
    }
    @media screen and (min-width: 1200px) {
        display: grid; 
        grid-template-columns: ${({sentido}) => (sentido ? `[uno] 300px [dos] auto [end]` : `[uno] auto [dos] 300px [end]`)};          
        grid-template-areas:  ${({sentido}) => (sentido ? `'des pro'` : `'pro des'`)};
        grid-template-rows: [uno] auto [end];
    }

    
    border-bottom: 3px solid ${props => props.theme.colorDetalles};

    &:hover{
        ${ImagHover}{
            
            transition: all 1.5s ease-in-out;
            opacity: 0.8;
            z-index: 10;
        }
    }
    &:hover:after{
        ${ImagHover}{
            animation: ${animation1} 0.5s steps(29) fordwards;
            
        }
    }

`

/*
     &:hover {
        


        ${Pro}{
            background: url(${props=>props.imgs});
            
            width: 100%;
            user-select: none;
            -o-object-fit: cover;
            object-fit: cover;
        }   
}
*/