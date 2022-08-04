import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction('[Uusario] Cargar Usuario', props<{id: string}>());
export const cargarUsuarioSuccess = createAction('[Uusario] Cargar Usuario Success', props<{usuario: Usuario}>());
export const cargarUsuarioError = createAction('[Uusario] Cargar Usuario Error', props<{payload: any}>());