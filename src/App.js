import React, { Component } from 'react';
import axios from 'axios';

import PokemonSlot from './components/PokemonSlot'
import { AppWrapper, StyledInput } from './App.styled';
import { getPokemonUrl } from './utils/requests'
class App extends Component {
  state = {
		pokemonIndex: 1,
		myPokemon: {},
		isShiny: false
  }

	componentDidMount() {
		this.fetchNewPokemon();
	}

	componentDidUpdate() {
		this.fetchNewPokemon();
	}



	handleOnChange = e => {
		const val = e.target.value;
		val >= 1 && this.setState({
			pokemonIndex: +val,
		})
	}

	handleOnCheck = e => {
		const val = e.target.checked;
		this.setState({
			isShiny: val,
		})
	}


  fetchNewPokemon() {
    axios.get(getPokemonUrl(this.state.pokemonIndex))
      .then(({ data }) => {
				const { name, sprites } = data; 

				this.setState({
					myPokemon: {
							name,
							spriteUrl: this.state.isShiny ? sprites.front_shiny : sprites.front_default
						}
				});
			})
			.catch(e => console.log(e));
  };


  render() {
    return (
      <AppWrapper>
				<StyledInput
					type='Number'
					value={this.state.pokemonIndex}
					onChange={this.handleOnChange}
				/>
				<div>	
					<label for='shiny'>Shiny?</label>
					<input
					name='shiny' 
					type='checkbox'
					checked={this.state.isShiny}
					onChange={this.handleOnCheck}
					/>
				</div>

				<PokemonSlot
					name={this.state.myPokemon.name}
					spriteUrl={this.state.myPokemon.spriteUrl}
				/>
      </AppWrapper>
    );
  };
};

export default App;
