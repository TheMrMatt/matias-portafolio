import React from 'react'
import { Dec, Container, ContIlustracion, Ilustracion, DecCont } from './Elements'



const SeparadorCerrador = ({sentido, imagen, diag}) => {
    return (
        <>
            <Container sentido={sentido}>
                
               
                <ContIlustracion>
                    <Ilustracion src={imagen}/>    
                </ContIlustracion>
                <DecCont>
                    <Dec src={diag}/>
                </DecCont>
                
            </Container>
        </>
    )
}

export default SeparadorCerrador
