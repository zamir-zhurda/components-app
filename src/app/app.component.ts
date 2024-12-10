import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, RouterModule, ElementsModule, CollectionsModule],
  imports: [RouterOutlet, RouterModule],


templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'components-app';
}
