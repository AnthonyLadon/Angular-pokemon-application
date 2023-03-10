import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonModule } from "./pokemon/pokemon.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  // Attention à l'ordre de déclaration des routes pour pas tomber dans une erreur 404 !
  imports: [BrowserModule, PokemonModule, AppRoutingModule], // AppRoutingModule en dernier
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
