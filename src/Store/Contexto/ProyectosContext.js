import React, { createContext, useReducer } from "react";
import ProyectosReducers from "../Reducers/ProyectosReducers";
import Lobo1 from '../../Assets/imagenes/Proyectos/Lobo/Desktop/Lobo1.png'
import Lobo2 from '../../Assets/imagenes/Proyectos/Lobo/Desktop/Lobo2.png'
import Lobo3 from '../../Assets/imagenes/Proyectos/Lobo/Desktop/Lobo3.png'
import Lobo4 from '../../Assets/imagenes/Proyectos/Lobo/Desktop/Lobo4.png'
import Lobo5 from '../../Assets/imagenes/Proyectos/Lobo/Desktop/Lobo5.png'
import MLobo1 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo1.png'
import MLobo2 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo2.png'
import MLobo3 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo3.png'
import MLobo4 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo4.png'
import MLobo5 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo5.png'
import MLobo6 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo6.png'
import MLobo7 from '../../Assets/imagenes/Proyectos/Lobo/Mobile/MLobo7.png'
import FLobo1 from '../../Assets/imagenes/Proyectos/Lobo/Figma/FLobo1.png'
import FLobo2 from '../../Assets/imagenes/Proyectos/Lobo/Figma/FLobo2.png'
import FLobo3 from '../../Assets/imagenes/Proyectos/Lobo/Figma/FLobo3.png'
import FLobo4 from '../../Assets/imagenes/Proyectos/Lobo/Figma/FLobo4.png'
import Contexto1 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto1.png'
import Contexto2 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto2.png'
import Contexto3 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto3.png'
import Contexto4 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto4.png'
import Contexto5 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto5.png'
import Contexto6 from '../../Assets/imagenes/Proyectos/Contexto/Desktop/Contexto6.png'
import MContexto1 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto1.png'
import MContexto2 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto2.png'
import MContexto3 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto3.png'
import MContexto4 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto4.png'
import MContexto5 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto5.png'
import MContexto6 from '../../Assets/imagenes/Proyectos/Contexto/Mobile/MContexto6.png'
import FContexto1 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto1.png'
import FContexto2 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto2.png'
import FContexto3 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto3.png'
import FContexto4 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto4.png'
import FContexto5 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto5.png'
import FContexto6 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto6.png'
import FContexto7 from '../../Assets/imagenes/Proyectos/Contexto/Figma/FContexto7.png'
import Doritos1 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos1.png'
import Doritos2 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos2.png'
import Doritos3 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos3.png'
import Doritos4 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos4.png'
import Doritos5 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos5.png'
import Doritos6 from '../../Assets/imagenes/Proyectos/Doritos/Desktop/Doritos6.png'
import MDoritos1 from '../../Assets/imagenes/Proyectos/Doritos/Mobile/MDoritos1.png'
import MDoritos2 from '../../Assets/imagenes/Proyectos/Doritos/Mobile/MDoritos2.png'
import MDoritos3 from '../../Assets/imagenes/Proyectos/Doritos/Mobile/MDoritos3.png'
import MDoritos4 from '../../Assets/imagenes/Proyectos/Doritos/Mobile/MDoritos4.png'
import MDoritos5 from '../../Assets/imagenes/Proyectos/Doritos/Mobile/MDoritos5.png'
import FDoritos1 from '../../Assets/imagenes/Proyectos/Doritos/Figma/FDoritos1.png'
import FDoritos2 from '../../Assets/imagenes/Proyectos/Doritos/Figma/FDoritos2.png'
import FDoritos3 from '../../Assets/imagenes/Proyectos/Doritos/Figma/FDoritos3.png'
import FDoritos4 from '../../Assets/imagenes/Proyectos/Doritos/Figma/FDoritos4.png'
import DPokemon1 from '../../Assets/imagenes/Proyectos/Pokemon/Desktop/DPokemon1.png'
import DPokemon2 from '../../Assets/imagenes/Proyectos/Pokemon/Desktop/DPokemon2.png'
import MPokemon1 from '../../Assets/imagenes/Proyectos/Pokemon/Mobile/MPokemon1.png'
import MPokemon2 from '../../Assets/imagenes/Proyectos/Pokemon/Mobile/MPokemon2.png'
import FPokemon1 from '../../Assets/imagenes/Proyectos/Pokemon/Figma/FPokemon1.png'
import FPokemon2 from '../../Assets/imagenes/Proyectos/Pokemon/Figma/FPokemon2.png'


const initialState = {
    Proyectos: [
        {
            titulo: 'Contexto',
            id: '01',
            tecnologia: ['React.js', 'Mongo Db', 'Node.js', 'Express'],
            descripcion: `Este proyecto es un sitio web de noticias. 
            El objetivo de este proyecto fue hacer una app con el stack MERN, en el cual tuvieran distintos tipos de usuarios con distintos tipos de accesos y privilegios. 
            El mismo cuenta con 3 tipos de usuarios, el normal que serían los usuarios comunes, el autor que tiene acceso al dashboard donde puede publicar un artículo o editar los artículos que sean de su autoría. Por último está el usuario admin que puede publicar y editar cualquier articulo sin importar si no es de su autoría, también puede editar las portadas de cada sección a su gusto.  `,
            imgDesk: [Contexto1, Contexto2, Contexto3, Contexto4, Contexto5, Contexto6],
            imgMobile: [MContexto1, MContexto2, MContexto3, MContexto4, MContexto5, MContexto6],
            imgFigma: [FContexto1, FContexto2, FContexto3, FContexto4, FContexto5, FContexto6, FContexto7],
            link: ''
        },
        {
            titulo: 'Pokemon',
            id: '02',
            tecnologia: ['Angular.js', 'Typescript', 'NGrx'],
            descripcion: '',
            imgDesk: [DPokemon1, DPokemon2],
            imgMobile: [MPokemon1, MPokemon2],
            imgFigma: [FPokemon1, FPokemon2],
            link: 'https://pokemonappmatias.web.app/'
        },
        {
            titulo: `El lobo de Wall Street `,
            id: '03',
            tecnologia: ['React.js', 'Gspa', 'JavaScript'],
            descripcion: `Este proyecto es una mini experiencia de la película El lobo de Wall street, la cual tiene como objetivo de mostrar la información de la película de una manera distinta.`,
            imgDesk: [Lobo1, Lobo2, Lobo3, Lobo4, Lobo5],
            imgMobile: [MLobo1, MLobo2, MLobo3, MLobo4, MLobo5, MLobo6, MLobo7],
            imgFigma: [FLobo1, FLobo2, FLobo3, FLobo4],
            link: 'https://thewolfofw.herokuapp.com/'
        },
        {
            titulo: 'Doritos',
            id: '04',
            tecnologia: ['React.js', 'Three.js', 'JavaScript'],
            descripcion: `Este proyecto es un sitio web informativo del producto Doritos. En el cual la presentación del producto es en un escenario 3d.  `,
            imgDesk: [Doritos1, Doritos2, Doritos3, Doritos4, Doritos5, Doritos6],
            imgMobile: [MDoritos1, MDoritos2, MDoritos3, MDoritos4, MDoritos5],
            imgFigma: [FDoritos1, FDoritos2, FDoritos3, FDoritos4],
            link: 'https://doritos3dweb.herokuapp.com/'
        }
    ],
    Proyecto: {},
    loading: true
}


export const ProyectosContext = createContext(initialState)


export const ProyectosProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProyectosReducers, initialState);

    function getProyect(iD, proy) {
        const data = proy.filter(p => p.id === iD.id)


        dispatch({
            type: 'GET_PROY',
            payload: data
        })
    }

    function startLoading() {
        dispatch({
            type: 'START_LOADING'
        });
    }

    return (
        <ProyectosContext.Provider value={{
            Proyectos: state.Proyectos,
            Proyecto: state.Proyecto,
            loading: state.loading,
            startLoading,
            getProyect
        }}>
            {children}
        </ProyectosContext.Provider>
    )

}