import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApuracoesService } from '../../services/apuracoes.service';
import { Apuracoes } from '../../models/apuracoes.model';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apuracoes?: Apuracoes;

  constructor(private apuracaoService: ApuracoesService) {}

  ngOnInit(): void {
    this.apuracoes = this.apuracaoService.getAll();
  }  
}

