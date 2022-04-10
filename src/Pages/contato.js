import React from "react";
import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () =>{
    return(
        <>
            <Grid className="container" container spacing={10}>
                <Grid item xs={1}>
                </Grid>
                <Grid className="form" item xs={10}>
                    <div>
                        <h3>Contatos</h3>
                        <TextField id="name" label="Nome" fullWidth/>
                        <TextField id="email" label="Email" fullWidth/>
                        <TextField id="message" label="Mensagem" fullWidth/>
                    </div>
                    <br />
                    <Button variant="contained" color="primary">
                    Enviar
                    </Button>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Contatos;