import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// toujours déclarer les routes globales en bas (lecture du haut vers le bas)
const routes: Routes = [
  { path: "", redirectTo: "pokemons", pathMatch: "full" }, // route par défaut (sans paramêtre)
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
