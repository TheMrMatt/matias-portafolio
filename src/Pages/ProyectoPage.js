import React,{useContext, useEffect} from 'react'
import { Container, Wrapper } from '../Componentes/Commons/Elements'

import Resumen from '../Componentes/Resumen/Resumen'

import Nav from '../Partes/Nav/Nav'

import Contenido from '../Componentes/Contenido/Contenido'
import Footer from '../Partes/Footer/Footer'
import { useParams} from 'react-router';
import { ProyectosContext } from '../Store/Contexto/ProyectosContext'
import { SeparadorData7, SeparadorData6, SeparadorData5} from '../Componentes/Separadores/DataSep'
import SeparadorCerrador from '../Componentes/Separadores/SeparadorCerrador/SeparadorCerrador'
import HeaderP from '../Componentes/HeaderProyecto/HeaderP'
import SeparadorNo from '../Componentes/Separadores/SeparadorNoLink/SeparadorNo'
import ThemeChange from '../Componentes/ThemeChange/ThemeChange'
import { DataContexto } from '../Store/Contexto/DataContexto'
import Loader from '../Componentes/Loader/Loader'

const ProyectoPage = (props) => {

    const {Proyecto, getProyect, loading,Proyectos} = useContext(ProyectosContext)  
    const {dat,temas,getTema} = useContext(DataContexto)
    const camp = useParams(); 
    useEffect(()=>{ 
        getProyect(camp, Proyectos)
        getTema(props.theme, temas)
        
    },[props])
    

    if(loading === true) return <Loader/>
    return (
        <>
            <Container>
                <ThemeChange props={props.setTheme}/>
                <Wrapper>
                    <Nav  imagen={dat[4]} logoI={dat[7]} logo={true}/>
                    <HeaderP data={Proyecto[0]} sentido={false}/>
                    <Resumen data={Proyecto[0].descripcion} link={Proyecto[0].link}/>
                    <SeparadorNo data={SeparadorData5} resp={true} imagen={dat[0]}/>
                    <Contenido data={Proyecto[0].imgDesk} sentido={true} divece={'Escritorio'} />
                    <SeparadorNo  data={SeparadorData6} resp={true} imagen={dat[1]}/>
                    <Contenido data={Proyecto[0].imgMobile} sentido={false} divece={'Mobile'}/>
                    <SeparadorNo  data={SeparadorData7} resp={true} imagen={dat[2]}/>
                    <Contenido data={Proyecto[0].imgFigma} sentido={true} divece={'Figma'}/>     
                    <SeparadorCerrador imagen={dat[3]} diag ={dat[10]}/>
                    <Footer />
                </Wrapper>
            </Container>
        </>
    )
}

export default ProyectoPage

/*
    <Proyecto sentido={false} alt={false}/>
                    
                    
                    
                    <Separador sentido={true} img={sep} cat={'Sobre mi'} resp={true}/>
                    <Contenido sentido={false}/>
                    <Separador sentido={false} img={sep} cat={'Sobre mi'} resp={true}/>
                    <Contenido sentido={true}/>


    
                  
*/