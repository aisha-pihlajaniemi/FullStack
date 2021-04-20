const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  //console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = ({ course }) => {
  console.log(course)
  return (
    <div>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  )
}

const Total = ({ course }) => {
  //console.log(parts)
  return (
    <div>
      <p>Number of exercises: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} </p>
    </div>
  )
}

const App =()=> {
  const course = {
    name: 'Half Stack application development',
    parts: [
    {
      name: 'Fundamentals of React: ',
      exercises: 10},
    {
      name: 'Using props to pass data: ',
      exercises: 7},
    { 
      name: 'State of component: ',
      exercises: 14
    }
    ]
  }
  
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  );
}

export default App;
