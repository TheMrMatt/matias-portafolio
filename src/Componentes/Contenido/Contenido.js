import React from 'react'
import Carousel from '../Carousel/Carousel'
import { Desc, Imag, Section, Titulo, Wrap } from './Elements'

const Contenido = ({data,sentido, divece, }) => {
    return (
        <>
            <Section sentido={sentido}>
                <Desc>
                    <Wrap>
                        <Titulo>{divece}</Titulo>
                        
                    </Wrap>
                </Desc>
                <Imag sentido={sentido}>
                    <Carousel data={data} sentido={sentido}/>
                </Imag>
            </Section>
        </>
    )
}

export default Contenido
