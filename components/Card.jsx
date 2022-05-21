import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import image from '../public/imageSample.jpg'

const Card = ({ imageSrc, title, author, url}) => {
  return (
   <a href={url} target='_blank'>
    <div className={styles.Card}>
        <div className={styles.imageDiv}>
            <img src={imageSrc} className='thisImage'/> 
            {/* for image to be work in next/Image it is to be explicitly metnioned in next.config.js */}
            {/* this is working because I defined the thisImage in globalCss module */}
        </div>
        <div className="cardText">
            {title} <br /> <span className={styles.span}>By:- {author}</span>
        </div>
    </div>
   </a>
  )
}

export default Card