import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Typo from './Typo'
import useDataFetch from './custom-hooks/useDataFetch'
import Loader from './Loader'


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1rem',
        justifyContent: 'center',
        backgroundColor: '#000000',
        minHeight: '100vh',
        padding: '1rem',
    },
    container: {
        width: '400px',
        height: '200px',
        borderRadius: '1rem',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        boxShadow: '#696c80 6px 6px 7px',
        '&:hover': {
            transform: 'rotate(-1.5deg) scale(1.03)'
        },
    },
    '@media (max-width: 900px)': {
        container: {
            width: '300px',
            height: '150px',
        }
    },
    '@media (max-width: 600px)': {
        container: {
            width: '160px',
            height: '80px',
        }
    }
})

function RootContainer() {
    const classes = useStyles()
    const [leftResponse, setLeftResponse] = useState()

    // call api
    const { data, loading } = useDataFetch('https://65b3f716770d43aba47ac437.mockapi.io/portfolio/getCommanComponent')
    useEffect(() => {
        if (data) {
            setLeftResponse(data.data)
        }
    }, [data])

    // copy code on click
    const handleClick = (value) => {
        navigator.clipboard.writeText(value).then(() => {
            alert('Content copied to clipboard!');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };
    return (
        <>
            {loading ?
                <Loader />
                :
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
            }
        </>
    )
}

export default RootContainer