import React, { createContext, useReducer } from "react";
import DataReducers from "../Reducers/DataReducers";
import sepa1 from '../../Assets/imagenes/SeparadoresPrin.svg'
import sepa2 from '../../Assets/imagenes/Separadores2.svg'
import sepa3 from '../../Assets/imagenes/Separadores5.svg'
import sepa4 from '../../Assets/imagenes/Separadores4.svg'
import diag from '../../Assets/imagenes/linesDiagonales1.svg'
import aste from '../../Assets/imagenes/aste.svg'
import aboutDec from '../../Assets/imagenes/DecoracionAbout.svg'
import logo from '../../Assets/imagenes/Logo.svg'
import letras from '../../Assets/imagenes/letras.svg'
import fondo from '../../Assets/imagenes/fondo.svg'
import diago from '../../Assets/imagenes/diag.svg'
import sepa1B from '../../Assets/imagenes/Separadores1B.svg'
import sepa2B from '../../Assets/imagenes/Separadores2B.svg'
import sepa3B from '../../Assets/imagenes/Separadores5B.svg'
import sepa4B from '../../Assets/imagenes/Separadores4B.svg'
import diagB from '../../Assets/imagenes/linesDiagonales1B.svg'
import asteB from '../../Assets/imagenes/asteB.svg'
import aboutDecB from '../../Assets/imagenes/DecoracionAboutB.svg'
import logoB from '../../Assets/imagenes/LogoB.svg'
import letrasB from '../../Assets/imagenes/letrasB.svg'
import fondoB from '../../Assets/imagenes/fondoB.svg'
import diagoB from '../../Assets/imagenes/diagB.svg'
import sepa1N from '../../Assets/imagenes/Separadores1N.svg'
import sepa2N from '../../Assets/imagenes/Separadores2N.svg'
import sepa3N from '../../Assets/imagenes/Separadores5N.svg'
import sepa4N from '../../Assets/imagenes/Separadores4N.svg'
import diagN from '../../Assets/imagenes/linesDiagonales1N.svg'
import asteN from '../../Assets/imagenes/asteN.svg'
import aboutDecN from '../../Assets/imagenes/DecoracionAboutN.svg'
import logoN from '../../Assets/imagenes/LogoN.svg'
import letrasN from '../../Assets/imagenes/letrasN.svg'
import fondoN from '../../Assets/imagenes/fondoN.svg'
import diagoN from '../../Assets/imagenes/diagN.svg'

const initialState = {
    temas:[
        {
            id: 'white',
            separadores: [sepa1, sepa2, sepa3, sepa4, diag, aboutDec, aste, logo, letras, fondo, diago]
        },
        {
            id: 'yellow',
            separadores: [sepa1N, sepa2N, sepa3N, sepa4N, diagN, aboutDecN, asteN, logoN, letrasN, fondoN, diagoN]
        },
        {
            id: 'blue',
            separadores: [sepa1B, sepa2B, sepa3B, sepa4B, diagB, aboutDecB, asteB, logoB, letrasB, fondoB, diagoB]
        },
        {
            id: 'red',
            separadores: [sepa1, sepa2, sepa3, sepa4, diag, aboutDec, aste, logo, letras, fondo, diago]
        }
    ],
    loading: false,
    dat: {
        id: 'white',
        separadores: [sepa1, sepa2, sepa3, sepa4, diag, aboutDec, aste, logo, letras, fondo, diago]
    }
}

export const DataContexto = createContext(initialState)


export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducers, initialState);

    function getTema(iD, tema){
        const dev = tema.filter(p => p.id === iD)
        
        
        dispatch({
            type:'GET_TEMA',
            payload: dev[0].separadores
        })    
    }

    function startLoading() {
        dispatch({
            type: 'START_LOADING'
        });
    }

    return(
        <DataContexto.Provider value={{
            dat: state.dat,
            temas: state.temas,
            loading: state.loading,
            getTema,
            startLoading
        }}>
            {children}
        </DataContexto.Provider>
    )
}