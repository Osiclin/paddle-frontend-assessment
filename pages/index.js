import Head from 'next/head'

//components
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Details from '../components/Details/Details'

//styles
import styles from '../styles/Home.module.css'
import Piano from '../components/Piano/Piano'
import Plan from '../components/Plan/Plan'
import CallToAction from '../components/CallToAction/CallToAction'
import Partners from '../components/Partners/Partners'
import Customer from '../components/Customer/Customer'
import Subscribe from '../components/Subscribe/Subscribe'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peddle</title>
        <meta name="description" content="Peddle" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <div style={{marginBottom: '2.722rem'}}>
          <Hero/>
        </div>
        <div style={{padding: '0 1rem', marginBottom: '9.375rem'}}>
          <Details/>
        </div>
        <Piano/>
        
        <div style={{background: 'linear-gradient(180deg, #F8F8F8 -45.04%, rgba(248, 248, 248, 0) 88.56%)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Plan/>
          <CallToAction/>
          <Partners/>
          <Customer/>
        </div>
        <Subscribe/>
      </main>

      <div style={{backgroundColor: '#f8f8f8'}}>
        <Footer/>
      </div>
      
    </div>
  )
}
