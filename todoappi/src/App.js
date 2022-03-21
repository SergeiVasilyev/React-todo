import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import './App.css';
import TodoLista from './TodoLista.js';


export default class App extends React.Component {
  state = {
    iteemit: [],
    virheViesti: null
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/tehtavat/`)
      .then(res => {
        const iteemit = res.data;
        console.log('iteemit ', iteemit)
        this.setState({ iteemit });
      })
      .catch(error => {
        this.setState({virheViesti: error.message})
        console.log(error)
      })
  }

  render() {
    const data = this.state.iteemit;
    console.log(data)
    if (this.state.virheViesti){
      return (
        <Container>
          Virhe: {this.state.virheViesti}
        </Container>
      )
    }
    return (
      <Container className="App">
        <TodoLista 
          iteemit={data} 
          merkitseTehtavaTehdyksi={
            (id) => this.merkitseTehtavaTehdyksiRajapinnassa(id)
          }
        />
      </Container>
    );
  }
  merkitseTehtavaTehdyksiRajapinnassa(id) {
    console.log(id)
    axios.patch(`http://127.0.0.1:8000/api/tehtavat/${id}/`, {
      tehty: true
    })
    .then(() => this.componentDidMount())
    .catch(error => {
      this.setState({virheViesti: error.message})
    })
  }
}

// function App() {
//   const data = [
//     {"otsikko": "Ykkönen"},
//     {"otsikko": "Kakkonen"},
//     {"otsikko": "Kolmonen"},
//   ];
//   return (
//     <div className="App">
//       <TodoLista iteemit={data} />

//     </div>
//   );
// }


