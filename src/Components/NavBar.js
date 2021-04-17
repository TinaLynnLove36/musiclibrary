import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'




const NavBar = () => {
    return(
        <div>
            <AppBar position="fixed" style={{ background: '#f2f2f6'}}>
                <Toolbar>
                    <Typography variant="title" color='primary' className='navText'>
                        Welcome to Your Digital Music Library
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;