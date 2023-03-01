import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[pkmBorderCard]",
})
export class BorderCardDirective {
  // Déclaration des propriétées
  private initialColor = "#f5f5f5";
  private defaultColor = "#009688";
  private defaultHeight = 180;

  // permet d'acceder via ElementRef à des elements du DOM
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  // Permet de récupérer la string passée dans pkmBorderCard (ici une couleur)
  // et la stocker dans la variable borderColor
  @Input("pkmBorderCard") borderColor: string;

  // écoute l'évennement mouseenter (survol) et appelle la fonction onMouseEnter()
  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }
  // Pareil mais écoute l'evennement "fin du survol"
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder("#f5f5f5");
  }

  // Fonction qui Set la valeur de hauteur dans l'element
  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  // Fonction qui Set la valeur CSS de la bordure dans l'element
  private setBorder(color: string) {
    let border = "solid 4px " + color;
    this.el.nativeElement.style.border = border;
  }
}
