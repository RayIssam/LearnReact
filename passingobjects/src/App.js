import './App.css';

const people = [
  {
    id: 1,
    name: "Gregorio Y. Zara's Todos",
    src:"https://images.unsplash.com/photo-1587397845856-e6cf49176c70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    todos: [
      "Improve the videophone",
      "Prepare aeronautics lectures",
      "Work on the alcohol-fuelled engine",
    ],
  },
  {
    id: 2,
    name: "Ray Al-huslan",
    src:"https://images.unsplash.com/photo-1587398099807-ff052ff03b56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    todos: ["learn react useEffect", "learn react useState"],
  },
  {
    id: 3,
    name: "yaren",
    todos: ["learn figma", "learn webflow"],
    src:"https://images.unsplash.com/photo-1511933617088-859b414f00ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
  },
];

function Team() {
  // We need to map over each person's todos, not just the entire people array
  const teamMembers = people.map((person) => (
    <li className='teamMembers' key={person.id}>
        <div>
        <img style={{width:"100px",height:"100px",borderRadius:"50%"}}src={person.src} alt={person.name} />
        </div>
        <div>
        <h1>{person.name}</h1>
        <ul className='todos'>
          {person.todos.map((todo) => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        </div>
    </li>
  ));

  // Return the entire unordered list
  return <ul className='team'>{teamMembers}</ul>;
}

function App() {
  // Return the Team component inside a div
  return <div>
    <h1 style={{color:"white"}}>Team Todos</h1>
    <Team />
    </div>;
}

export default App;
