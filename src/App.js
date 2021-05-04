import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
  'bootstrap-css-only/css/bootstrap.min.css'; import
  'mdbreact/dist/css/mdb.css';
import Jumbotron from '../src/components/Jumbotron/Jumbotron';
import Results from "../src/components/Results/Results"
import Search from './components/Search/Search';

function App() {
  return (
    <div>
      <Jumbotron />
      <Results />
    </div>

  );
}

export default App;