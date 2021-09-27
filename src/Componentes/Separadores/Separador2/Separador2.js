import React, {useContext, useEffect} from 'react'
import { Categoria, Container, ContIlustracion, Flecha, Ilustracion, Wrap } from './Elements'
import { useHistory } from "react-router-dom";
import { ProyectosContext } from '../../../Store/Contexto/ProyectosContext'

const Separador2 = ({data, url,imagen}) => {
    let history = useHistory();
    const { startLoading} = useContext(ProyectosContext)
    useEffect(()=>{

    },[])

    function handleClick(url) {
        
        startLoading()
        history.push(`/proyecto/${url}`);
    }
    return (
        <>
            <Container sentido={data.sentido}>
                
               
                <ContIlustracion sentido={data.sentido}>
                    <Ilustracion src={imagen}/>    
                </ContIlustracion>
                <Wrap onClick={()=>handleClick(url)} >
                    <Categoria>{data.cat}</Categoria> 
                    <Flecha />   
                </Wrap>
                
            </Container>
        </>
    )
}

export default Separador2
