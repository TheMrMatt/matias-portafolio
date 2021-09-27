import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    
    display: grid;
    grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};
    grid-template-areas:  ${({sentido}) => (sentido ? `'img cat'` : `'cat img'`)};
    border-bottom: 3px solid ${props => props.theme.colorDetalles};

    @media screen and (min-width: 320px) {
        height: 83px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 150px` : `150px auto`)};
    }
    @media screen and (min-width: 768px) {
        height: 103px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 250px` : `250px auto`)};

    }
    @media screen and (min-width: 993px) {
        height: 128px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 250px` : `250px auto`)};   

    }
    @media screen and (min-width: 1200px) {
        height: 128px;
        grid-template-columns: ${({sentido}) => (sentido ? `auto 300px` : `300px auto`)};          

    }



`
 
export const ContIlustracion = styled.div`
    
    grid-area: img;
    border-${({sentido}) => (sentido ? `right` : `left`)}: 3px solid ${props => props.theme.colorDetalles};
    
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

export const Ilustracion = styled.img`
    width: 100%;
    height: 100%;
    user-select: none;
    -o-object-fit: cover;
    object-fit: cover;
    color: pink;
`

export const Categoria = styled.div`
    
    
    grid-area: cat;
    pointer-events: none;
    
    padding: 15px;
    font-family: Redline;
    font-style: normal;
    font-weight: normal;
    
    line-height: 21px;
    /* identical to box height */

    letter-spacing: 0.155em;

    color:  ${props => props.theme.colorLetras};
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


