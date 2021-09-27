import React from 'react'
import { Col1, Col2, SectionInverse,Texto, Deco, DecoCont, VideoCont,Wrap, DecoCont2,TextoCont} from './Elements'
import pibe from '../../Assets/imagenes/mia.jpg'
import './foto.scss'
const About = ({imagen}) => {
    return (
        <>
            <SectionInverse>
                
                <Col1>
                        <Texto>
                                Tengo 23 años y actualmente vivo en Tucumán, Argentina.  
                                Además de dedicarme al desarrollo Frontend soy estudiante de Ingeniería Informática en la Universidad del Norte Santo Tomas de Aquino.<br/>
                                Me apasiona el diseño web, me gusta ser creativo con mis diseños e intento innovar siempre con el objetivo de darle una experiencia única al usuario.<br/>
                                Por mi cuenta he diseñado diferentes proyectos a modo de muestra de lo que puedo llegar a hacer. Cada proyecto tiene una planificación previa con un tiempo limite de desarrollo, tareas diarias, una maqueta en Figma. Me puse el desafío de trabajar como si fuera proyectos reales con clientes reales.<br/> 
                                Espero que sea de tu agrado mi portafolio, cualquier feedback es bienvenido!
                        </Texto>
                </Col1>
                <Col2>
                    <Wrap>
                        <TextoCont>
                            <Texto>
                                    Tengo 23 años y actualmente vivo en Tucumán, Argentina.  
                                    Además de dedicarme al desarrollo Frontend soy estudiante de Ingeniería Informática en la Universidad del Norte Santo Tomas de Aquino.<br/>
                                    Me apasiona el diseño web, me gusta ser creativo con mis diseños e intento innovar siempre con el objetivo de darle una experiencia única al usuario.<br/>
                                    Por mi cuenta he diseñado diferentes proyectos a modo de muestra de lo que puedo llegar a hacer. Cada proyecto tiene una planificación previa con un tiempo limite de desarrollo, tareas diarias, una maqueta en Figma. Me puse el desafío de trabajar como si fuera proyectos reales con clientes reales.<br/> 
                                    Espero que sea de tu agrado mi portafolio, cualquier feedback es bienvenido!
                            </Texto>
                        </TextoCont>

                        <DecoCont>
                            <Deco src={imagen}/>
                        </DecoCont>
                        
                        <VideoCont>
                            <div className="c-glitch" style={{backgroundImage:` url(${pibe})`}}>
                                <div className="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div className="c-glitch__img"style={{backgroundImage:` url(${pibe})`}}></div>
                                <div className="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div className="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                                <div className="c-glitch__img" style={{backgroundImage:` url(${pibe})`}}></div>
                            </div>
                        </VideoCont>
                        <DecoCont2>
                            <Deco src={imagen}/>
                        </DecoCont2>
                    </Wrap>    
                </Col2>
            </SectionInverse>
        </>
    )
}

export default About
