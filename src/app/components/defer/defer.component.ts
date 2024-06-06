import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  contentLoaded = false;
  showPlaceholder = true;

  ngOnInit() {
    // Mostrar el loading después de 100ms si el contenido no se ha cargado
    setTimeout(() => {
      if (!this.contentLoaded) {
        this.showPlaceholder = false;
      }
    }, 500);

    // Simular la carga diferida con un retraso de 2 segundos
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }
}
