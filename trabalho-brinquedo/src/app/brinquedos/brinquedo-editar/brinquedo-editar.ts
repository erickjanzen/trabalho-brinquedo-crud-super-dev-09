import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { BrinquedoModel } from '../../models/brinquedo.model/brinquedo.model';

@Component({
  selector: 'app-brinquedo-editar',
  imports: [FormsModule],
  templateUrl: './brinquedo-editar.html',
  styleUrl: './brinquedo-editar.css',
})
export class BrinquedoEditar {
  brinquedo = signal<BrinquedoModel>({
    id: "",
    modelo: "",
    marca: "",
    quantidade: null,
    preco: null
  });

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    const brinquedoString = localStorage.getItem("brinquedos");
    if (brinquedoString === null) {
      alert("Nenhum brinquedo cadastrado")
      router.navigate(["/brinquedos"]);
      return;
    }

    const brinquedos = JSON.parse(brinquedoString) as BrinquedoModel[];
    const brinquedosEncontrados = brinquedos.filter(brinquedo => brinquedo.id === idParaEditar);
    if (brinquedosEncontrados.length === 0) {
      alert("Brinquedo não encontrado")
      router.navigate(["/brinquedos"]);
      return;
    }
    this.brinquedo.set(brinquedosEncontrados[0]);
  }
  
  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();
    const indiceBrinquedoParaEditar = brinquedos.findIndex(x => x.id === this.brinquedo().id);
    brinquedos[indiceBrinquedoParaEditar].modelo = this.brinquedo().modelo;
    brinquedos[indiceBrinquedoParaEditar].marca = this.brinquedo().marca;
    brinquedos[indiceBrinquedoParaEditar].quantidade = this.brinquedo().quantidade;
    brinquedos[indiceBrinquedoParaEditar].preco = this.brinquedo().preco;

    const brinquedoString = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos",brinquedoString)
    
    alert("Brinquedo alterado com sucesso");
    
    this.router.navigate(["/brinquedos"]);
  }
  
  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {
    const brinquedosString = localStorage.getItem("brinquedos");
    
    if (brinquedosString === null) {
      return [];
    }
    
    return JSON.parse(brinquedosString) as BrinquedoModel[];
  }
}
