import './App.css';

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman"]
  return (
    <div className="App">
      <header className="App-header">
            <Person name={nayoks[0]} nayika="Moushumi"></Person>
            <Person name="Jasim" nayika="Shabana"></Person>
            <Person name="BappaRaz" nayika="Cheka"></Person>
            <Person name="Elias Kanchon" nayika="Bobita"></Person>
      </header>
    </div>
  );
}

function Person(props){
    console.log(props);
    const personStyle={
        border:'2px solid yellow',
        borderRadius:'7px',
        marginBottom:'10px',
        padding:'10px'
    }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name} </h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  )
}

export default App;
