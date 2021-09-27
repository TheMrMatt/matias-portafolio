import React,{useState} from 'react';
import './App.scss';
import {BrowserRouter, BrowserRouter as  Switch, Route} from 'react-router-dom'
import { ProyectosProvider } from './Store/Contexto/ProyectosContext';
import ProyectoPage from './Pages/ProyectoPage';
import Home from './Pages/Home';
import { ThemeProvider } from "styled-components";
import { DataProvider } from './Store/Contexto/DataContexto';

const YellowTheme = {
  colorFondo: "#EDE74E",
  colorLetras: "#61BFD1",
  colorDetalles: "#000",
  
}
const RedTheme = {
  colorFondo: "#000",
  colorLetras: "#FFF",
  colorDetalles: "#F2572C",
  
}
const BlueTheme = {
  colorFondo: "#FF00B8",
  colorLetras: "#00B8FF",
  colorDetalles: "#001AED",
 
}
const WhiteTheme = {
  colorFondo: "#000",
  colorLetras: "#FFF",
  colorDetalles: "#FFF",
  
}

const themes = {
  yellow: YellowTheme,
  red: RedTheme,
  blue: BlueTheme,
  white: WhiteTheme
}

function App() {


  const [theme, setTheme] = useState("white")
  return (
    <>
      <ProyectosProvider>
        <DataProvider>
        <ThemeProvider theme={themes[theme]}>
          <BrowserRouter basename='/matias-portafolio'>
            <Switch>  
              <Route path='/proyecto/:id' render={(props)=><ProyectoPage theme={theme} setTheme={setTheme} themes={themes[theme]}/>}/>
              <Route path='/' render={(props)=><Home theme={theme} setTheme={setTheme} themes={themes[theme]}/>} exact/>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>  
        </DataProvider>
      </ProyectosProvider>
    </>
  );
}

export default App;
