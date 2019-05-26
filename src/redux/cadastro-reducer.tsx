interface IAction {
    type: string
    payload: any
}


const INITIAL_STATE = {
    loading: false,
    usuarios: []
}

export const GET_USUARIOS = 'GET_USUARIOS'

export default (state = INITIAL_STATE, action: IAction) => {
    switch(action.type) {
        case GET_USUARIOS:
            return {
                ...state,               
            }
        default:
            return state
    }
}