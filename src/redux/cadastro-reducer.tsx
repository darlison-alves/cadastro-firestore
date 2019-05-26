import { ICadastro } from "../components/Form/interfaces/ICadastro";

interface IAction {
    type: string
    payload: any
}

interface ISTATE_CADASTRO {
    loading: Boolean,
    usuarios: Array<ICadastro>
}

const INITIAL_STATE: ISTATE_CADASTRO = {
    loading: false,
    usuarios: []
}

export const GET_USUARIOS = 'GET_USUARIOS'
export const CREATE_USUARIO = 'CREATE_USUARIO'
export const LOADING_USUARIO = 'LOADING_USUARIO'

export default (state: ISTATE_CADASTRO = INITIAL_STATE, action: IAction) => {
    switch(action.type) {
        case LOADING_USUARIO:
            return {
                ...state,
                loading: true
            }
        case GET_USUARIOS:
            return {
                ...state,
                loading: false
            }
        case CREATE_USUARIO:
            const usuarios = state.usuarios
            usuarios.push(action.payload)
            return {
                ...state,
                usuarios,
                loading: false
                
            }
        default:
            return state
    }
}