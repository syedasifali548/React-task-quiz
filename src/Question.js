import React ,{useState} from 'react'
import { Box, Button, Grid, Typography, useTheme } from '@material-ui/core';
import question from './questions.json'
import IsCorrect from './IsCorrect';
import CustomizedProgressBars from './Progressbar';
import StarIcon from '@material-ui/icons/Star';
const Question = () => {

   const  [index,setIndex] =useState(0)
   const  [disable,setDisable] =useState(false)
   const  [Correct,setCorrect] =useState("")
   const  [totalCorrect,setTotalCoorect] =useState(0)
   const  [Nextdisable,setNextdisable] =useState(true)
   const  [Quizeover,setQuizeOver] =useState(true)
   const  [isRight,setIsRight] =useState(false)
  
    console.log(question)

     const theme=useTheme()
    const Start =()=>{
      
        setQuizeOver(false)
        setDisable(false)
        setNextdisable(true)
        setTotalCoorect(0)
        setIndex(0)
        
    }


    const NextQuestion =()=>{

        setDisable(false)
        setIsRight(false)
        setNextdisable(true)
        setIndex(
            index=>index+1
        )
        setCorrect("")
    }

    const Select =(text,totalCorrect)=>{

        

        console.log(text)
          if(text){

            setDisable(true)
            setNextdisable(false)
          }

          if(text==decodeURI(question[index].correct_answer)){
     
            setCorrect("Correct")
            setTotalCoorect((value)=>value+1)
          
           
            setIsRight(true)
          }
          else{
            setCorrect(`Sorry! Correct answer is  ${decodeURIComponent(question[index].correct_answer)}`)
          }
          
          if(index==question.length+1){

            setQuizeOver(true)
          }

  
    }
     var newscore=0
     newscore =totalCorrect/(index+1)

    
      var maxscore= (totalCorrect+ (question.length-index-1))/question.length
    console.log(maxscore)
    
    return (

        <div className="app_root"  >
        <div   className="quiz_box">
        {
            !Quizeover?
             <div>
           
            
           
            <Typography  variant={'h4'}   >{`Question  ${index+1}  of  ${question.length}`}</Typography>
            <Typography  variant={'body2'}   >{decodeURIComponent(question[index].category)}</Typography>
            
            {

           question[index].difficulty=="hard" &&
              <div>
                {
                  [1,2,3,4,5].map((value,index)=>(
                <StarIcon  style={{color:index<3?  "green" :"lightgray" }}     />
              ))
                }
              </div>
              
              

              
            } 
            {

           question[index].difficulty=="medium" &&
              <div>
                {
                  [1,2,3,4,5].map((value,index)=>(
                <StarIcon  style={{color:index<2 && "green"  }}     />
              ))
                }
              </div>
              
              

              
            } 
            {

           question[index].difficulty=="easy" &&
              <div>
                {
                  [1,2,3,4,5].map((value,index)=>(
                <StarIcon  style={{color:index<1 && "green"  }}     />
              ))
                }
              </div>
              
              

              
            } 

            
            <Box mt={4}  >
            <Typography variant="body1"  >{decodeURIComponent(question[index].question)}</Typography>
            </Box>
           

            <Grid container >   
            {
               question[index].incorrect_answers.map(answer=>(
                   <Grid item lg={6}  xs={12}>
                   <div className="btn_box">
                   <Button variant="contained" disableElevation  disabled={disable}    onClick={(e)=>Select(e.currentTarget.innerText)}  >{decodeURIComponent(answer)}</Button>
                   </div>
                  
                   </Grid>
                  
                  
               ))
            }
          
           
            </Grid>
            <IsCorrect  isRight={isRight} correct={Correct}  />
              {
                index <question.length-1 && <Box mt={3}  > 
                <Button color="primary" disableElevation  variant="contained"  disabled={Nextdisable} onClick={NextQuestion}>Next</Button> </Box>
              }  
              <Box py={1} >
            <CustomizedProgressBars  desc={`max possible score : ${maxscore*100}%`}    index={index} score={maxscore}    />
            </Box>
            <Box py={1} >
            <CustomizedProgressBars  desc={` Score : ${newscore*100}%`}    index={index} score={newscore}    />
            </Box>
        </div>
        :<div  className="startbtn" >
            <Button color="primary" disableElevation  variant="contained" onClick={Start}  >Start</Button>
        </div>
        }

        </div>
       
        
           
        </div>
    )
}

export default Question
