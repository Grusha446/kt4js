import React, { useState } from 'react';
import classes from './MyButton.module.css';

const MyButton1 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    )
}
export default MyButton1;