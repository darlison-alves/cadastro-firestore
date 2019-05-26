import { connect } from "react-redux";
import { CustomForm } from ".";
import { bindActionCreators, Dispatch } from "redux";

import { cadastrar } from '../../redux/cadastro-action'
import { AppState } from "../../redux";


export interface AppPropsFormAction {
    cadastrar: typeof cadastrar
    loading: Boolean
}

const mapStateToProps = (state: AppState) => (
    {
        loading: state.cadastros.loading
    }
)

const mapDispatchToProps = (dispatch: Dispatch) =>(
    bindActionCreators({cadastrar}, dispatch)
)

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(CustomForm)

export default ConnectedForm