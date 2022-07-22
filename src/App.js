import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import TableData from './components/TableData/TableData';


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <TableData></TableData>
      <h1 className='text-primary'>hello</h1>
    </div>
  );
}

export default App;
