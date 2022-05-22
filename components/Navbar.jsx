// components Layout state persists.

import Link from 'next/link'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import newsIcon from '../public/icons8-news.svg'

export default function Navbar()  {

    const [search, setSearch] = useState(false)

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
            {
                search ?  <input type="text" placeholder='search' autoFocus className={styles.input}
                onKeyPress={(e) => {
                    if(e.key === 'Enter'){
                        setSearch(false)
                    }
                }} />
                : <button className={styles.button} onClick={()=> {setSearch(true)}}>Search</button>
            }
           </div>
        </nav>
    )
}