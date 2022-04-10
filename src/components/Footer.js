import React from "react";
import { Grid } from '@material-ui/core/';


const Footer = () =>{
    return(
        <>
         <Grid className="footer" container direction="row" alignItems="center" item xs={12}>
            <div className="footer-text">
                Desenvolvido por Sergio Silveira | email:sergio.desenvolvedor.web@gmail.com
            </div> 
         </Grid>
        </>
    )
} 

export default Footer;