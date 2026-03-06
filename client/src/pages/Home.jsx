import React from 'react'
import Hero from '../components/homepage/hero'
import { Curriculum } from '../components/homepage/Curriculum'
import { Courses } from '../components/homepage/Courses'
import { Instructor } from '../components/homepage/Instructor'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Courses/>
      <Curriculum/>
      <Instructor/>
    </div>
  )
}

export default Home
