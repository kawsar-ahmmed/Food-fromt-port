import { useEffect, useState } from 'react';



function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])
  console.log(users)
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map(user =>
            <div>
              <ul>
                <li key={user.id}>Name:{user.name} Email: {user.email} Id: {user.id}</li>
              </ul>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
