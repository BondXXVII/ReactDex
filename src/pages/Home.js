import React from 'react';
import Search from '../components/Search';
import { fetchPokemon } from '../services/GetPokemon';
import PokemonData from '../components/PokemonData';
import { Spinner } from 'react-bootstrap';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        pokemon: '',
        load: false,
        error: ''    
        };
    }

    render() {
        const getPokemon = (query) => {
            if (!query) {return "";}
            this.setState({load: true});
            console.log(query);
            setTimeout(async () => {
                try {
                    this.setState({error: ''});
                    const response = await fetchPokemon(query);
                    // console.log('below is resp');
                    // console.log(response);
                    const results = await response.json();
                    // console.log('below is results');
                    // console.log(results);
                    this.setState({pokemon: results});
                    this.setState({load: false});
                } catch (error) {
                    this.setState({error: "Pokemon not found..."});
                    this.setState({load: false});
                }
            }, 1200);            
        }
        const spinnerStyle = {
            width: '10em',
            height: '10em'
        }

        return (
            <div>
                <h3>{this.state.error}</h3>
                <Search getPokemon={getPokemon}/>
                {this.state.load ? (
                    <div style={{textAlign: 'center'}}>
                        <Spinner style={spinnerStyle} animation='border' />
                    </div>
                ): null}
                {!this.state.load && this.state.pokemon ? (
                    <div>
                        <PokemonData 
                        name={this.state.pokemon.name}
                        sprite={this.state.pokemon.sprites.front_default}
                        type={this.state.pokemon.types}
                        abilities={this.state.pokemon.abilities}
                        stats={this.state.pokemon.stats}
                        />
                    </div>
                ): null}
            </div>
        );
    }
}




export default HomePage;