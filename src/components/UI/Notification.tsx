import React from 'react'
import { motion } from 'framer-motion'
import classes from './Notification.module.css'

const Notification: React.FC<{ message: string }> = (props) => {
    return (
        <motion.div initial={{ y: '-100vh' }} animate={{ y: 0 }} className={classes.notification}>
            <div>{props.message}</div>
        </motion.div>
    )
}

export default Notification
