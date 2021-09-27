import React, {useEffect, useState} from 'react'
import { ButtonI, Container, Imag, Wrap, ButtonD, ImagCont, Wrap2, RightIcon, LeftIcon } from './Elements'



const Carousel = ({data, sentido}) => {

    const [ind, setInd] = useState(0)
    


    useEffect(()=>{

        
    },[ind])

    function Mas(){
        if(ind === data.length -1){
            setInd(0)
        }
        else{
            setInd(ind+1)
        }
        
    }

    function Menos(){
        if(ind < 1){
            setInd(data.length - 1)
        }
        else{
            setInd(ind-1)
        }

        
    }


    
    
    return (
        <>
            <Container sentido={sentido}>
               
                <Wrap>
                    <ButtonI onClick={()=>Menos()}>
                        <LeftIcon />
                    </ButtonI>
                </Wrap>
                <Wrap2>
                    <ButtonI onClick={()=>Menos()}> <LeftIcon /> </ButtonI>
                    <ButtonD onClick={()=>Mas()}>  <RightIcon /> </ButtonD>
                </Wrap2>
                <ImagCont>
                    < Imag src={data[ind]}/>
                </ImagCont>             
               
                <Wrap>
                    <ButtonD onClick={()=>Mas()}>
                        <RightIcon />
                    </ButtonD>
                </Wrap>
            </Container>
        </>
    )
}

export default Carousel
