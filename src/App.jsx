import "./App.css";
import Nav from './Nav';
import Canvas from './Canva';
import Intro from'./Intro'
import Team from'./Team'


function App() {
  return (
    <div className=" top-0 left-0 w-full">
      <Nav />
      <Canvas />
      <Intro />
      <Team />
    </div>
  );
}

export default App;
