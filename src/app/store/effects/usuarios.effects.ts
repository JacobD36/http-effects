import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import * as usuariosActions from "../actions";
import { UsuarioService } from '../../services/usuario.service';
import { cargarUsuariosError } from '../actions/usuarios.actions';

@Injectable()
export class UsuariosEffects {
    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService
    ) {}

    cargarUsuarios$ = createEffect(() => this.actions$.pipe(
        ofType(usuariosActions.cargarUsuarios),
        mergeMap(() => this.usuariosService.getUsers().pipe(
            map(users => usuariosActions.cargarUsuariosSuccess({ usuarios: users })),
            catchError(err => of(usuariosActions.cargarUsuariosError({ payload: err })))
        ))
    ));
}