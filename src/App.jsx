import React from 'react'
import { Button, Typography } from '@mui/material'
import Header from './components/Header'
import './App.css'
import CourseCard from './components/CourseCard'

const courseList = [
  {
    image: "https://cdn.servermania.com/kb/KB-MERN-Featured.jpg",
    heading: "Fullstack MERN Enginerring",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, commodi! Voluptates dolorum minima sequi pariatur nisi ad maxime. Asperiores,"
  },
  {
    image: "https://res.cloudinary.com/practicaldev/image/fetch/s--LeqrCOME--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/91ovedmu4grqhjh434rq.png",
    heading: "Java Backend Enginerring",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, commodi! Voluptates dolorum minima sequi pariatur nisi ad maxime. Asperiores,"
  },
  {
    image: "https://blog.talent500.co/wp-content/uploads/2023/10/datascience-pdusit-stock.jpg",
    heading: "Data Analytics",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, commodi! Voluptates dolorum minima sequi pariatur nisi ad maxime. Asperiores,"
  },

]

const App = () => {
  return (
    <div>
      <Header/>

      <div style={{marginTop: '30px'}}>
        <Typography variant='h3' align='center'>
          Welcome to Acciojob
        </Typography>
        <Typography variant='body2' align='center'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, commodi! Voluptates dolorum minima sequi pariatur nisi ad maxime. Asperiores, error eaque possimus odit quidem temporibus in aperiam optio reiciendis ratione.
        </Typography>
      </div>


      <Typography variant='h4' align='center' marginTop='30px'>
          Our amazing courses
      </Typography>
      <div style={{
        display: 'flex', 
        gap: '16px', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        marginTop: '20px', 
        paddingBottom: '100px'
      }}>
        {courseList.map((course, index) => <CourseCard key={index} image={course.image} description={course.description} heading={course.heading} />)}
      </div>

      <footer>
        <Typography align='center'>
          Made with ❤️ by Omraj Sharma
        </Typography>
      </footer>
      
    </div>
  )
}

export default App