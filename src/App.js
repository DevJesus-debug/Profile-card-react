import { useState } from 'react';

function App() {

  //const [state, setState] = useState(initialState)

  const [paragraph, setParagraph] = useState("My name is Jesus")
  const [count, setCount] =useState(0)


  const name =()=>{
    setParagraph("My name is Jesus")
  }

  const skills =()=>{
    setParagraph("I'm a Frontend Developer")
  }

  const increment =()=>{
    setCount(count + 1)
  }



  return (
    <div className="container">
      <header>
        <div className="img-cont"></div> 
      </header>
      <h1>Hello!</h1>
      <p>{paragraph}</p>
      <div className="btn-cont">
      <button onClick={name} className='btn'>Name</button>
      <button onClick={skills} className='btn'>Skills</button>
      </div>
      <div className="like-cont">
        <div className="counter">{count}</div>
        <i onClick={increment} className="far fa-thumbs-up"></i>
      </div>
      <div className="icon">
      <a href="https://www.linkedin.com/in/jesus-a-terrazas-bb32401a1/" target="_blank"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com/DevJesus-debug" target="_blank"><i className="fab fa-github-square"></i></a>
      </div>
    </div>
  );
}

export default App;
