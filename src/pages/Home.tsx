import Content from '../section/home/Component'
import Hero from '../section/home/Hero'
import Navbar from '../components/navbar/Navbar'
import Component from '../section/home/Component'
import Template from '../section/home/Template'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <title>ZaicodeUI - Home</title>

      <Navbar />
      <Hero />
      <Component />
      <Template />
      <Footer />
    </>
  )
}

export default Home
