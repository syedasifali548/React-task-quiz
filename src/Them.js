import { createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import React from 'react'


export const theme =createMuiTheme({
    
palette:{
    primary:{
        main:'#304ffe',
        light:'#fafafa'
    },
    secondary:{
        main:'#2979ff',
        light:'#424242'
    }

}
,typography:{
   
}
,shape:{
    borderRadius:25
},
overrides:{
    
    MuiAccordion:{
            root:{
                disableElevation:true
            }
    },
     MuiIconButton:{
         root:{
            
            padding:0,
            ' & :hover':{
              
               backgroundColor:'#fff'
            }
         }
     },


  MuiFilledInput:{
   root:{
       backgroundColor:""
   },
   MuiToolbar:{
       root:{
           
           minHeight:'20px'
       }
   }
  },
    MuiButton:{
        root:{
            fontSize:'0.8rem',
            padding:7,
            fontWeight:600,
            paddingLeft:25,
            paddingRight:25,
            textTransform:'non',
           
        }
        ,fullWidth:{
            maxWidth:''
        },
        
            
       
        
    }
    ,
   

   
}
, props:{
    MuiButton:{
        disableRipple:false,
        disableElevation:true,
    }
    ,MuiTextField:{
        variant:"filled",
        InputLabelProps:{
            shrink:true
        }
       
    }
}


})