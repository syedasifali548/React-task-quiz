import { Button } from '@material-ui/core'
import React from 'react'







   

const IsCorrect = ({correct,isRight}) => {

   
    return (
        <div className="btn_boxx"  >
        {   correct  &&   <Button  style={{backgroundColor:isRight?"green":"red",color:"white"}}      variant="contained"  >{correct}</Button>  }
        </div>
    )
}

export default IsCorrect
