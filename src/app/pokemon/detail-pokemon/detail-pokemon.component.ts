import { Component, OnInit } from "@angular/core";
// importer ActivatedRoute pour recup les parametres envoyé dans l'URL
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined; // Current Pokemon

  // injection d'ActivatedRoute via le constructeur
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS;
    // Récupération
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemon = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
    }
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
}
