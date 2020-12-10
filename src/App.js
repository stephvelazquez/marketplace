import './App.css';
import React from 'react';
import Card from './Card.js'

function App() {
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [fruit, setFruit] = React.useState('')
  const [members, setMembers] = React.useState([])
  const [showForm, setShowForm] = React.useState(false)

  console.log(members)
  return (
    <div className="App">
    <div className="header">
      <h1 className="header-text">Marketplace</h1>
      </div>
      <div className="main">
        <h1>Your household</h1>
        <p>Welcome to The Marketplace! Review your household below:</p>
        <span className="members-grid">
        {members.length > 0 ?
          members.map(member => (
            <Card
              name={member.name}
              description={member.description}
              favoriteFruit={member.fruit}
            />
          )) : <p className="no-member-msg">There are currently no members in your household.</p>
        }
        </span>
        <button className="button" onClick={() => setShowForm(true)}>
          Add new member
        </button>

        {showForm &&
          <form className="form" onSubmit={e => {
              e.preventDefault()
              setMembers([...members, {name: name, description: description, fruit: fruit}])
              setName('')
              setDescription('')
              setFruit('')
              setShowForm(false)
            }}
          >
          <div className="fields">
            <label htmlFor="name">Name </label>
            <input className="form-input" id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>

          <div className="fields">
            <label htmlFor="description" >Description </label>
            <input className="form-input" id="description" type="text" value={description} onChange={e => setDescription(e.target.value)} />
          </div>

          <div className="fields">
            <label htmlFor="fruit">Favorite fruit </label>
            <input className="form-input" id="fruit" type="text" value={fruit} onChange={e => setFruit(e.target.value)} />
          </div>

          <span>
            <button className="button form-buttons" onClick={() => setShowForm(false)}>Cancel</button>
            <button className="button form-buttons" type="submit">Add</button>
          </span>
          </form>}
      </div>
    </div>
  );
}

export default App;
