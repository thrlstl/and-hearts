import React, { useState, useEffect } from 'react';
import WhiteHeart from '../../src/assets/images/white-heart.png';
import PinkHeart from '../../src/assets/images/pink-heart.png';

export default function Header(props) {

    const [animation, setAnimation] = useState(0)
    const toggle = props.toggle
    const linkedIn = `https://www.linkedin.com/in/matthewsteeleonline/`
    const github = `https://github.com/thrlstl/and-hearts`
    const blogPost = `https://medium.com/swlh/css-animations-with-react-hooks-1d855dab4a3`

    useEffect(() => {
        renderNotification()
    }, [toggle])

    const renderNotification = () => {
        return toggle ? setAnimation(1) : null
    }

    return (
    <div className='header-container'>
            <a className='header-link-1' target="_blank" href={github}>Code</a>
            <text className='header-text'>|</text>
            <a className='header-link-2' target="_blank" href={blogPost}>Blog Post</a>
            <text className='header-text'>|</text>
            <a className='header-link-2' target="_blank" href={linkedIn}>by Matthew Steele</a>
        <div
        className='notifications-container'
        animation={animation}
        onAnimationEnd={() => setAnimation(0)}>
            <img className='heart-icon' src={WhiteHeart}/>
        </div>
    </div>
    )
}