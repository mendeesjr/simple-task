import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  tarefas : Tarefa[];

  constructor(private tarefaService : TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
    console.log(this.tarefas);
  }

  listarTodos() : Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa) : void {
    $event.preventDefault();
    if(confirm('Deseja excluir a tarefa "' + tarefa.id + '" ?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa) : void {
    if(confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '" ?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
