import React from 'react'
import { ButonPr, ButtonWrap, Container, Cv, CvWrap, Red, Redes, RedesWrap, Texto, Wrapp, Insta, Twi, Link, GitHub, DownIcon } from './Elements'
import cv from '../../Assets/Cv/MatiasRojas.pdf'

const Footer = () => {
    return (
        <>
            <Container>
                <Redes>
                    <Texto>Mis Redes: </Texto>   
                    <RedesWrap>
                       
                        <Wrapp>
                            <Red href='https://www.instagram.com/matiase98/' target="_blank">
                                <Insta />    
                            </Red>
                            <Red href='https://twitter.com/Matiaserojas98' target="_blank">
                                <Twi />
                            </Red>
                        </Wrapp>
                        <Wrapp>
                            <Red href='https://www.linkedin.com/in/-matiasrojas/' target="_blank">
                                <Link />
                            </Red>
                            <Red href='https://github.com/TheMrMatt' target="_blank">
                                <GitHub />
                            </Red> 
                        </Wrapp>
                    </RedesWrap>
                </Redes>
                <Cv>
                    <CvWrap>
                        <Texto>Mi Cv:</Texto>
                        <ButtonWrap>
                            <ButonPr href={cv} download>
                                <DownIcon />
                            </ButonPr>
                        </ButtonWrap>
                    </CvWrap>
                </Cv>
            </Container>
        </>
    )
}

export default Footer
