import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Card from '../components/Card'
import getLayout from '../components/getLayoutFun'

export default function Home({data}) {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons8-news.svg" />
      </Head>
              <h1 className={styles.welcome}>Welcome to Our news website !</h1>

    </div>
    <div>
          <h1 className="heading">General news</h1>
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
    const response = await fetch(`https://newsapi.org/v2/top-headlines?category=general&country=in&apiKey=${process.env.NEWS_API_KEY}`)
    const data = await response.json() // by default Article length is 104
    // const articles =  data.articles;

    return{
        props : {
            data,
        }
    }
}

Home.getLayout = getLayout
