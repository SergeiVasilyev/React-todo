import React from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

import * as api from './api'
import './App.css';
import TodoLista from './TodoLista.js';
import KirjautumisDialogi from './KirjautumisDialogi';


export default class App extends React.Component {
  state = {
    iteemit: [],
    virheViesti: null,
    kirjauduttu: false
  }

  lataaTehtavat() {
      api.haeTehtavat()
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

    if (!this.state.kirjauduttu) {
      return (
        <KirjautumisDialogi kirjaudu={
          (kayttaja, salasana) => {
            api.kirjaudu(kayttaja, salasana)
              .then(() => {
                this.setState({kirjauduttu: true})
                this.lataaTehtavat()
              })
            .catch((error) => {
              this.setState({virheViesti: error.message})
            })
            // const onnistuiko = api.kirjaudu(kayttaja, salasana)
            // this.setState({kirjauduttu: onnistuiko})
            // if (onnistuiko) {
            //   this.lataaTehtavat()
            // }
          }
        }/>
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
    api.merkitseTehdyksi(id)
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


