import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography} from '@material-ui/core/';
import Cart from './Cart';

const Header = () =>{
    return(
        <>
            <Grid className="header" container direction="row" justify="space-between" alignItems="center" item xs={12}>
                    <Typography className="header-name" variant='h5'>
                        <Link to="/" >
                            SongWriter Shop
                        </Link>
                    </Typography>
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/contato">
                        Contato
                    </Link>
                    <Cart />
            </Grid>
        </>
    )
}

export default Header;