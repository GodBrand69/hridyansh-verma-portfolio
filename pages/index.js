import { motion } from 'framer-motion'
import About from '../components/about'
import Skills from '../components/skills'
import Contact from '../components/contact'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Home from '../components/home'
import Footer from '../components/footer'
import Projects from '../components/projects'
import Head from 'next/head'
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function Index() {
  return (
    <>
    <Head>
      <title>Hridyansh Verma</title>
      <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>

  )
}
