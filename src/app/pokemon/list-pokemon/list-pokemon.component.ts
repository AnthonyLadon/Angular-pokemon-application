import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pokemon-list";

@Component({
  selector: "app-list-pokemon",
  templateUrl: "./list-pokemon.component.html",
  styles: [],
})
export class ListPokemonComponent {
  //Typage de pokemonList en tableau de pokemons : pokemon[] (Force le typage de la variable)
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
