import getLayout from '../components/getLayoutFun'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import { useEffect } from 'react'


export default function news({data}) {
    // const randomNumber = (rangeLast) => {
    //   return  Math.floor(Math.random()*rangeLast)
    // }
    // console.log(data)

// useEffect(
//     () => {
//         // fetch api
//     }, []
// )

    return (
        <>
        <div>
            <h1 className="heading">Top Techcrunch Headlines!</h1>
        </div>
        <div className={styles.newsPage}>
            { // here you always have to check if the array exist by optional chaining
             data.articles?.map(
                (current, index) => {
                    return(
                        <Card datas={current} key={index+current.author} imageSrc={current.urlToImage} title={current.title} author={current.author} url ={current.url}/>
                    )
                }
            )
        }
        </div>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`)
    const data = await response.json() // by default Article length is 104
    // const articles =  data.articles;

    return{
        props : {
            data,
        }
    }
}

news.getLayout = getLayout