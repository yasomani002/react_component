import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Typo from './Typo'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '1rem',
    },
    container: {
        width: '430px',
        height: '240px',
        border: '2px solid #000000',
        borderRadius: '1rem',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            transform: 'rotate(-1.5deg) scale(1.03)'
        },
    }
})

function RootContainer() {
    const classes = useStyles()
    const handleClick = (value) => {
        navigator.clipboard.writeText(value).then(() => {
            alert('Content copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };
    const [error, setError] = useState()
    const [leftResponse, setLeftResponse] = useState()
    useEffect(() => {
        axios.get("https://65b3f716770d43aba47ac437.mockapi.io/portfolio/getCommanComponent")
            .then((response) => setLeftResponse(response?.data))
            .catch((error) => setError(error))
    }, [])
    return (
        <div className={classes.root}>

            {leftResponse?.map((item, index) => {
                return (
                    <div key={index} className={classes.container} onClick={() => handleClick(item.contentToCopy)}>
                        <Typo variant='ka01'>{item.title}</Typo>
                        <Typo variant='lb02'>Click to copy code.</Typo>
                    </div>
                )
            })}
        </div>
    )
}

export default RootContainer