import React from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
display:flex;
border: 2px solid black;
margin:2px auto;
`

export default class App extends React.Component {
  state = {
    
    listaPokemons: [],
    imagemPokemon: ""

  };

  pegarPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((resposta) => {
        this.setState({ listaPokemons: resposta.data.results });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  pegarDadosPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((resposta) => {
        this.setState({ imagemPokemon: resposta.data.sprites.front_default });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  selecionouPokemon = (evento) => {
    const nomePokemon = evento.target.value;
    this.pegarDadosPokemon(nomePokemon);
  };

  componentDidMount() {
    this.pegarPokemons();
  }

  render() {
    return (
      <div className="App">
        <Container>
        {this.state.imagemPokemon && <img alt={'Imagem'} src={this.state.imagemPokemon}/>}
        <select onChange={this.selecionouPokemon}>
          <option value={""}></option>
          {this.state.listaPokemons.map((poke) => {
            return (
              <option key={poke.name} value={poke.name}>
                {poke.name}
              </option>
            );
          })}
        </select>
        </Container>
      </div>
      
    );
  }
}
