import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

function App() {
    return (
      <main className="flex flex-col h-screen justify-center items-center">
        <div className="flex flex-col justify-center items-center border-2 border-accent p-10 rounded-lg shadow-lg bg-base-content text-white">
            <Router>
                <Routes>
                      <Route path='/' element={ <Home />} />
                      <Route path='/log-in' element={ <LogIn />} />
                      <Route path='/sign-up' element={ <SignUp />} />
                </Routes>
            </Router>
          </div>
      </main>
    );
}

export default App;
