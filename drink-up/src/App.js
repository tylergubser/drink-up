import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './components/LogoutButton'

function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <li className="relative">
                        {isAuthenticated
                            ?
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                
                                <LogoutButton />
                            </div>
                            :
                            <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                                
                                <LoginButton/>
                            </div>
                        }
                    </li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
