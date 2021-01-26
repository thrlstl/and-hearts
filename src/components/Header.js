import React, { useState, useEffect } from 'react';
import WhiteHeart from '../../src/assets/images/white-heart.png';
import PinkHeart from '../../src/assets/images/pink-heart.png';

export default function Header(props) {

    const [animation, setAnimation] = useState(0)
    const toggle = props.toggle
    const URL = `https://www.linkedin.com/in/matthewsteeleonline/`

    useEffect(() => {
        renderNotification()
    }, [toggle])

    const renderNotification = () => {
        return toggle ? setAnimation(1) : null
    }

    return (
    <div className='header-container'>
            <a className='header-text' target="_blank" href={URL}>by Matthew Steele</a>
        <div
        className='notifications-container'
        animation={animation}
        onAnimationEnd={() => setAnimation(0)}>
            <img className='heart-icon' src={WhiteHeart}/>
        </div>
    </div>
    )
}