import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import NoteLayout from './components/NoteLayout';

const App = () => {
  return (
    <>
      <div className="container-fluid bg-dark">
        <h1 className="text-center display-4 text-white">Notes</h1>
        <hr />
      </div>
      <div className="container-fluid">
        <BrowserRouter>
          <Route path="/" component={NoteLayout} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
