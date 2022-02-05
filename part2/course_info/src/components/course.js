import React from "react";

const Part = ({parts}) => parts.map((part) => <li key={part.id}>{part.name} {part.exercises}</li>)
    
const TotalCourses = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div><h3>Total of {total} exercises</h3></div>
    )
}
const Course = ({course}) => {

    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                <Part parts={course.parts} />
            </ul>
            <TotalCourses parts={course.parts} />
        </div>
        
    )
}

export default Course;