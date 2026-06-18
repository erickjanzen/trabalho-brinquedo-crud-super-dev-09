import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
=======
import { RouterOutlet } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BrinquedoCadastrar],
>>>>>>> fce1be28d33f5c276fd08188dd824e26202b05bc
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('trabalho-brinquedo');
}
