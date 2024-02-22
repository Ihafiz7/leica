import React from 'react'
import Header from './Components/Header'
import Secction1 from './sections/Secction1'
import { Section2 } from './sections/Section2'
import Section3 from './sections/Section3'
import { Section4 } from './sections/Section4'
import { Section5 } from './sections/Section5'
import { Section6 } from './sections/Section6'


const Home = () => {
  return (
    <div className='bg-stone-200'>
      <div className='flex justify-center'>
        <Header />
      </div>
      <section>
        <Secction1 />
      </section>
      <section>
          <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 />
      </section>
      <section>
        <Section5 />
      </section>
      <section>
        <Section6 />
      </section>
    </div>
  )
}

export default Home