import React,{useEffect, useState} from 'react'
import {NavContainer, ProyectCont, ContactCont, AboutCont, IconCont, Logo, LogoCont, LogoPag} from './Elementes'


const Nav = ({logoI, imagen, logo}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    }, [])

    return (
        <>
            <NavContainer>
                <ProyectCont to='proyectos' smooth={true}
                                      duration={2000} spy={true}
                                      exact='true' offset={0} logo={logo}>Proyectos</ProyectCont>
                <ContactCont to='contacto' smooth={true}
                                      duration={2000} spy={true}
                                      exact='true' offset={0} logo={logo}>Contacto</ContactCont>
                <AboutCont to='about' smooth={true}
                                      duration={2000} spy={true}
                                      exact='true' offset={0} logo={logo}>Sobre Mi</AboutCont>
                <LogoCont to={'/'} logo={logo}>
                    
                    <LogoPag src={logoI}/>
                </LogoCont>
                
                <IconCont>
                    <Logo src={imagen}/>
                </IconCont>
            </NavContainer>
        </>
    )
}

export default Nav
