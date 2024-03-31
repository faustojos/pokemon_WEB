import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Pokemon {
  name: string;
  imageUrl: string;
  growing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, //
  imports: [
    CommonModule
  ]
})
export class AppComponent {
previousPokemon() {
throw new Error('Method not implemented.');
}
nextPokemon() {
throw new Error('Method not implemented.');
}
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  pokemons: Pokemon[] = [
    { name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', growing: false },
    { name: 'Pikachu', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', growing: false },
    { name: 'Charizard', imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png', growing: false },
    { name: 'Pikachu', imageUrl: 'https://uprostim.com/wp-content/uploads/2021/04/image038.png', growing: false }
  ];

  startGrowing(pokemon: Pokemon) {
    pokemon.growing = true;
  }

  stopGrowing(pokemon: Pokemon) {
    pokemon.growing = false;
  }

  currentPokemonIndex = 0; // Índice del Pokémon actualmente seleccionado

  growPokemon() {
    // Aumenta el tamaño del Pokémon actualmente seleccionado
    this.pokemons[this.currentPokemonIndex].growing = true;
    // Después de un tiempo, detiene el crecimiento del Pokémon actual
    setTimeout(() => {
      this.pokemons[this.currentPokemonIndex].growing = false;
      // Avanza al siguiente Pokémon
      this.currentPokemonIndex++;
      // Si hemos alcanzado el último Pokémon, volvemos al primero
      if (this.currentPokemonIndex >= this.pokemons.length) {
        this.currentPokemonIndex = 0;
      }
    }, 1000);
  }
}
