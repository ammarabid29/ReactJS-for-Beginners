import './App.css';
import { ClassComp, ClassComp1 } from './Components/ClassComp';
import FunctionalComp from './Components/FunctionalComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div >
      <h1>Hello! Welcome to the SimpliLearn</h1>
      <h1>This video is about components</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp></ClassComp>
      <ClassComp1></ClassComp1>
      <Click></Click>
      <Counter></Counter>
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;
