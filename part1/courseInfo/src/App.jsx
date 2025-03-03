const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.tasks}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.section1} tasks={props.task1} />
      <Part name={props.section2} tasks={props.task2} />
      <Part name={props.section3} tasks={props.task3} />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>No of exercises {props.task1 + props.task2 + props.task3}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        section1={course.parts[0].name}
        task1={course.parts[0].exercises}
        section2={course.parts[1].name}
        task2={course.parts[1].exercises}
        section3={course.parts[2].name}
        task3={course.parts[2].exercises}
      />
      <Total
        task1={course.parts[0].exercises}
        task2={course.parts[1].exercises}
        task3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
