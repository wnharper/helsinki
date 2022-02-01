import React from "react"

const Header = (prop) => {
  return (
    <h1>{prop.course}</h1>
  )
}

const Content = (prop) => {

  const arr = prop.parts
  return (
    <>
      <Part part={arr[0].name} exercise={arr[0].exercises}/>
      <Part part={arr[1].name} exercise={arr[1].exercises}/>
      <Part part={arr[2].name} exercise={arr[2].exercises}/>
      </>
  )  
}

const Part = (prop) => {
  return (
    <p>
      {prop.part} {prop.exercise}
    </p>
  )
}

const Total = (prop) => {
  return (
    <>
      <p>Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [
      {
        name: 'Fundementals of react',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts} />
    
    </>
  )
}

export default App