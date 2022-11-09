import { CadastrarTarefaComponent } from './cadastrar';
import { ListarTarefaComponent } from './listar';
import { EditarTarefaComponent } from './editar';
import { Routes } from "@angular/router";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent
  }
];
