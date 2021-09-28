import React,{useContext} from 'react'
import { DataContexto } from '../../Store/Contexto/DataContexto'
import {Wrapp, ThemeCh, ColorY, ColorB, ColorR, ColorW} from './Elements'

const ThemeChange = ({props}) => {

    const {data,startLoading} = useContext(DataContexto)


    function ChangeThemeY(){
        startLoading()
        props('yellow')
        
        console.log('change Yellow', data)
    }
    function ChangeThemeR(){
        startLoading()
        props('red')
        
        console.log('change Red', data)
    }
    function ChangeThemeB(){
        startLoading()
        props('blue')
        
        console.log('change Blue', data)
    }
    function ChangeThemeW(){
        startLoading()
        props('white')
        
        console.log('change White', data)
    }

    return (
        <>
            <Wrapp>
                <ThemeCh>
                    <ColorY onClick={()=>ChangeThemeY()}/>
                    
                    <ColorB onClick={()=>ChangeThemeB()}/>
                    <ColorW onClick={()=>ChangeThemeW()}/>
                </ThemeCh>
            </Wrapp>
        </>
    )
}

export default ThemeChange
