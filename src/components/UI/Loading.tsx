import React from 'react'
import classes from './Loading.module.css'

const Loading: React.FC = () => {
    return (
        <div className={classes[`lds-roller`]}>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

    )
}

export default Loading


