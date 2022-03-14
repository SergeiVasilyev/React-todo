import './App.css';
import TodoLista from './TodoLista.js';


function App() {
  const data = [
    {"otsikko": "Ykkönen"},
    {"otsikko": "Kakkonen"},
    {"otsikko": "Kolmonen"},
  ];
  return (
    <div className="App">
      <TodoLista iteemit={data} />

    </div>
  );
}

export default App;
