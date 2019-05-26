import React from 'react'
import { Provider } from 'react-redux';

import { Main } from './components/Main';
import store from './redux/store';
import { StatusBar } from 'react-native';

export default class Index extends React.Component {
    render() {
        return(
            <Provider store={store} >
                <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
                <Main />
            </Provider>
        )
    }
}