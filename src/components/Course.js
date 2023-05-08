import React  from 'react';

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    );
  };
  
  const Header = ({ course }) => <h1>{course.name}</h1>;
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, parts) => sum + parts.exercises, 0)
    return <p> Total of exercises : {total}</p>
  }
  
  const Part = ({ parts }) => (
    <p>
      {parts.name} {parts.exercises}
    </p>
  );
  
  const Content = ({ parts }) => (
    <>
      {parts.map((parts) => (
        <Part key={parts.id} parts={parts} />
      ))}
    </>
  );

export default Course