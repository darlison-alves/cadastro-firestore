import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { FlatListUsuario } from ".";
import { AppState } from "../../redux";

import { getUsuarios } from "../../redux/cadastro-action";
import { ICadastro } from "../Form/interfaces/ICadastro";



export interface AppPropsCadastroAction {
    getUsuarios: typeof getUsuarios,
    usuarios: Array<ICadastro>,
    loading: Boolean
}


const mapStateToProps = (state: AppState) => {
    return {
        usuarios: state.cadastros.usuarios,
        loading: state.cadastros.loading
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => (
    bindActionCreators({
        getUsuarios
    }, dispatch)
)

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(FlatListUsuario)
export default ConnectedList