// import React from 'react'

// function DialogboxReg() {
//     return (
//         <div>DialogboxReg</div>
//     )
// }

// export default DialogboxReg


import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HomeRegFrom from './HomeRegFrom';

export default function DialogboxReg() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>

            <div style={{ marginTop: '40px' }} className="mission-cta-buttons">
                <button onClick={handleClickOpen} className="mission-btn fill-btn">
                    <span>Start Your Journey</span>
                    <i class="fas fa-rocket btn-icon"></i>
                </button>
            </div>

            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Open alert dialog
            </Button> */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <HomeRegFrom open={open} handleClose={handleClose} />
            </Dialog>
        </React.Fragment>
    );
}
