// components Layout state persists.

import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import newsIcon from '../public/icons8-news.svg'

export default function Navbar()  {


    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={newsIcon}></Image>
                <p className={styles.brand}>News</p>
            </div>
           <div className={styles.links}>
            <Link href="/">
            <a>Home</a>
            </Link>
            <Link href="/news">
            <a>Technology</a>
            </Link>
            <Link href="/business">
            <a>Business</a>
            </Link>
            <Link href="/sports">
            <a>Sports</a>
            </Link>
           </div>
        </nav>
    )
}