import './App.css';
import { people } from './people';
import { GetImage } from './getImage';


function App() {
  const List = people.map(person => 
   <li key={person.id} style={{listStyle:"none", display: "flex", alignContent:"center",marginBottom:"50px",gap:"50px",alignItems:"center"}}>
    <div> 
    <img src={GetImage(person)} alt={person.name} style={{width:"200", height:"200", borderRadius:"50%"}}/>
    </div>
    <div> <h1>{person.name}</h1>
    <p><em>{person.profession}</em></p>
    <p>{person.accomplishment}</p>
    </div>
   
  </li>
  )
  return (
    <div style={{width:"50vw",
    display: "flex",
    margin:"10vh auto",
    justifyContent: "center",
    flexDirection:"column",
    alignItems:"center",
    backgroundColor:"#F1F6F9"}}>

    <h1>Scientists</h1>
    <ul style={{listStyle:"none", display: "flex",flexDirection:"column"}}>{List}</ul>

</div>
  )

}
export default App;
