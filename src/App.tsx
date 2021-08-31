import './App.css';
import UserListPage from './views/user-list';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>User List</h1>
      </header>
      <div className="main">
        <UserListPage />
      </div>
    </div>
  );
}

export default App;
