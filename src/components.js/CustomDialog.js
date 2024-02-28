import React, { useState } from 'react'
import { Dialog } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Button from './Button';


const useStyles = makeStyles({
    root: {
        height: '400px',
        width: '500px',
        padding: '10px'
    },
    dialog__body: {
        height: '85%',
        width: '100%',
    },
    dialog__footer: {
        height: '15%',
        width: 'inherit',
        maxHeight: '100px',
        position: 'absolute',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

function CustomDialog() {
    const classes = useStyles()
    const [ openDialog, setOpenDialog] = useState(true)
    const handleClose = () => {
        setOpenDialog(false)
    }
    return (
        <Dialog open={openDialog}>
            <div className={classes.root}>

                <div className={classes.dialog__body}></div>
                <div className={classes.dialog__footer}>
                    <Button 
                    onClick={handleClose}
                    >Close</Button>
                    <Button>Save</Button>
                </div>
            </div>
        </Dialog>
    )
}

export default CustomDialog