import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};
    grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};
    border-bottom: 3px solid ${props => props.theme.colorDetalles};

    @media screen and (min-width: 320px) {
        height: 83px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto` : ` auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img'` : `'img'`)};
    }
    @media screen and (min-width: 768px) {
        height: 103px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 200px` : `200px auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};

    }
    @media screen and (min-width: 993px) {
        height: 128px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 250px` : `250px auto`)};   
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};

    }
    @media screen and (min-width: 1200px) {
        height: 128px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};
        grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};          

    }



`
 
export const ContIlustracion = styled.div`
    
    grid-area: img;
    
    
    
    @media screen and (min-width: 320px) {
        height: 80px;
        border-${({sentido}) => (sentido ? `right` : `left`)}: 0px solid ${props => props.theme.colorDetalles};
        
    }
    @media screen and (min-width: 768px) {
        height: 100px;
        border-${({sentido}) => (sentido ? `right` : `left`)}: 3px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 993px) {
        height: 125px;
        
        border-${({sentido}) => (sentido ? `right` : `left`)}: 3px solid ${props => props.theme.colorDetalles};
    }
    @media screen and (min-width: 1200px) {
        height: 125px;
        
        border-${({sentido}) => (sentido ? `right` : `left`)}: 3px solid ${props => props.theme.colorDetalles};
    }

`    

export const Ilustracion = styled.img`
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    user-select: none;
    @media screen and (min-width: 320px) {
        height: 80px;
        
    }
    @media screen and (min-width: 768px) {
        height: 100px;
        

    }
    @media screen and (min-width: 993px) {
        height: 125px;
        

    }
    @media screen and (min-width: 1200px) {
        height: 125px;
        
    }
   
`

export const Categoria = styled.div`
    
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.055em;

    color: ${props => props.theme.colorLetras};
    transition: all 0.7s ease-in-out;
    
    @media screen and (min-width: 320px) {
        font-size: 14px;
     }
     @media screen and (min-width: 768px) {
        font-size: 16px;
     }
     @media screen and (min-width: 993px) {
        font-size: 18px;
     }
     @media screen and (min-width: 1200px) {
        font-size: 20px; 
     }
`



export const Wrap = styled.div`
    
    flex-direction: row;
    justify-content: space-between;
    padding: 10px; 
    text-decoration: none;
    grid-area: cat;
    pointer-events: none;
    transition: all 0.7s ease-in-out;    
    
    @media screen and (min-width: 320px) {
       display: none;
    }
    @media screen and (min-width: 768px) {
        display: flex;
    }
    @media screen and (min-width: 993px) {
        display: flex;
    }
    @media screen and (min-width: 1200px) {
        display: flex;   

    }

`