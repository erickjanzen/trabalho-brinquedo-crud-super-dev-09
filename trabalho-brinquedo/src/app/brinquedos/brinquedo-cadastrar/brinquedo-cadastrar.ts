import { Component, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';

@Component({
  selector: 'app-brinquedo-cadastrar',
  imports: [FormsModule],
  templateUrl: './brinquedo-cadastrar.html',
  styleUrl: './brinquedo-cadastrar.css',
})
export class BrinquedoCadastrar {
  brinquedo = signal<BrinquedoModel>({
    id: crypto.randomUUID(),
    modelo: "",
    preco: null,
    quantidade: null,
    marca: ""
  })

  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();

    brinquedos.push(this.brinquedo());

    const brinquedoString = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos",brinquedoString)

    alert("Brinquedo cadastrado com sucesso");
  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");

    if (brinquedosString === null) {
      return [];
    }

    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
