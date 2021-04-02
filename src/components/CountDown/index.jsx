import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CountDown.scss'

function index(props) {
    const [currentSecond, setCurrentSecond] = useState(0)
    const countdown = (seconds) => {
        if(second === -1) return
        setCurrentSecond(seconds)

    }
    return (
        <p className="countdown">
            {currentSecond}
        </p>
    );
}

export default index;