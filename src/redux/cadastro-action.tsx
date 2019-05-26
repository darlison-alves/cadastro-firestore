import { Dispatch } from "redux";
import * as firebase from 'react-native-firebase'

import { GET_USUARIOS, CREATE_USUARIO, LOADING_USUARIO } from "./cadastro-reducer";
import { ICadastro } from "../components/Form/interfaces/ICadastro";

export const getUsuarios = () => (
    (dispatch: Dispatch) => {

        let usuarios = firebase.firestore().collection('usuarios')
        console.log('firestone', usuarios)
        dispatch({type: LOADING_USUARIO})
        dispatch({
            type: GET_USUARIOS
        })
    }    
)

export const cadastrar = (cadastro: ICadastro) => (
    (dispatch: Dispatch) => {
       
        dispatch({type: LOADING_USUARIO})
        Object.assign(cadastro, { type: cadastro.document.length > 11 ? 'business': 'individual' })
        
        dispatch({ type: CREATE_USUARIO, payload: cadastro })
    }
)
