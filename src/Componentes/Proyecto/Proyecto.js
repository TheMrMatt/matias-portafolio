import React,{useContext} from 'react'
import {SectionInverse, Desc, Pro, Nombre, Identificador,TecsWrap, Tecs, ImagHover} from './Elements'
import { useHistory } from "react-router-dom";
import { ProyectosContext } from '../../Store/Contexto/ProyectosContext';

const Proyecto = ({data,sentido}) => {

    let history = useHistory();
    const { startLoading} = useContext(ProyectosContext)

    function handleClick(url) {
        
        startLoading()
        history.push(`/proyecto/${url}`);
    }
    

    return (
        <>
            <SectionInverse onClick={()=>handleClick(data.id)} sentido={sentido} imgs={data.imgDesk[0]}>
                <Pro sentido={sentido} imgs={data.imgDesk[0]}>
                    <ImagHover src={data.imgDesk[0]}/>
                    <Nombre>{data.titulo}</Nombre>
                </Pro>
                <Desc sentido={sentido}>
                    <Identificador>.{data.id}</Identificador>
                    <TecsWrap>
                        {data.tecnologia.map( tec => (
                            <Tecs key={tec}>{tec}</Tecs>    
                        ))}
                    </TecsWrap>
                </Desc>
            </SectionInverse>
        </>
    )
}

export default Proyecto
