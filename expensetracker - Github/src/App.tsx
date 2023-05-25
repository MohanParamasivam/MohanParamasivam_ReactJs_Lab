import React, {useState} from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ExpenseTracker from './Components/ExpenseTracker';
import ShowData from './Components/ShowList';

function App() {
  const [showform, setShowForm] = useState<boolean>(false);

  const success = () => {
    setShowForm(false);
  };
  const cancel = () => {
    setShowForm(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowData />} />
        <Route path="/add" element={<ExpenseTracker onTrue={success} onClose={cancel}  />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;