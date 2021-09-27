import React from 'react'
import {SectionInverse, Desc, Pro, Nombre, Identificador,TecsWrap, Tecs, ImagHover} from './Elements'

const HeaderP = ({data,sentido, alt}) => {
    return (
        <>
            <SectionInverse  sentido={sentido}>
                <Pro sentido={sentido}>
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

export default HeaderP
