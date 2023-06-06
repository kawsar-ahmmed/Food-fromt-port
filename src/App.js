import { useEffect, useState } from 'react';
import './index.css'



function App() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };

    // POST data to the server
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };





  return (
    <div className="App">
      <form action="" onSubmit={handleAddUser}>
        <input type="text" placeholder='name' name='name' />
        <input type="email" placeholder='email' name='email' />
        <button>Add user</button>
      </form>
      <header className="App-header">
        {
          users.map(user =>
            <div key={user.id}>
              <ul>
                <li>Name:{user.name} Email: {user.email} Id: {user.id}</li>
              </ul>
            </div>
          )
        }
      </header>
    </div>
  );
}

export default App;
