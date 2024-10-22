import './App.css';
import ClassProps from './Props/ClassProps';
import FunctionalProps from './Props/FunctionalProps';

function App() {
  return (
    <div>
      <ClassProps name="Ammar" place="placeX"><p>Child Component</p></ClassProps>
      <ClassProps name="Abid" place="placeY"><button>Click</button></ClassProps>
      <FunctionalProps name="Learner 3" place="placeA"></FunctionalProps>
    </div>
  );
}

export default App;
