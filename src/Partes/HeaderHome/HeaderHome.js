import React from 'react'
import { Section } from '../../Componentes/Commons/Elements'
import {Lateral,Grafic, Fondo, Bienvenido, Matias, Copy,MatiasCont, Asteriscos, CopyCont, TextCont, Matias2, MatiasCont2, Ilus} from '../../Componentes/HeaderHome/Elements'
import letras from '../../Assets/imagenes/letras.svg'
import './Text.scss'

const HeaderHome = ({imagen, letra, fondo}) => {
    return (
        <>
            <Section>
                <Fondo fondo={fondo}>
                    <Grafic src={letra}/>
                    <TextCont><Bienvenido>Bienvenido a mi portafolio!</Bienvenido></TextCont>
                    
                    <MatiasCont>
                        
                    <h1 class="glitch">
                        <span aria-hidden="true">
                            MATIAS<br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  
                            ROJAS      
                        </span>
                            MATIAS<br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  
                            ROJAS 
                        <span aria-hidden="true">
                            MATIAS<br/>
                                  <br/>
                                  <br/>
                                  <br/>
                                  
                            ROJAS 
                        </span>
                    </h1>
                        
                    </MatiasCont>
                    <TextCont><Copy>Soy Matias Rojas desarrollador Frontend, mi objetivo es crear diseños webs creativos que den al usuario una experiencia unica.</Copy></TextCont>
                    
                </Fondo>
                <Lateral>
                    <CopyCont>
                        <Bienvenido>Bienvenido a mi portafolio!</Bienvenido>
                        <Copy>Soy Matias Rojas desarrollador Frontend, mi objetivo es crear diseños webs creativos que den al usuario una experiencia unica.</Copy>
                    </CopyCont>
                    <Asteriscos>
                        <Ilus src={imagen}/>
                    </Asteriscos>
                </Lateral>
            </Section>
        </>
    )
}

export default HeaderHome
