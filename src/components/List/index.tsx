import React from 'react'
import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';

import {Container, ContainerItem, ContainerItemText, TextItemPrincipal, TextItemSecondario, Header} from './styles'
import { ICadastro } from '../Form/interfaces/ICadastro';
import { AppPropsCadastroAction } from './connectedList';

export class FlatListUsuario extends React.Component<AppPropsCadastroAction> {
    componentDidMount(){
        this.props.getUsuarios()
    }

    _keyExtractor = (item: ICadastro) => item.document

    render() {

        const { usuarios, loading } = this.props

        if(!usuarios.length) return null;

        if(loading) return <ActivityIndicator size="large" />

        return (
            <Container>
                <Header><Text>USUÁRIOS</Text></Header>
                <FlatList                    
                    keyExtractor={this._keyExtractor}
                    data={usuarios}
                    renderItem={({item}) => <RenderItem item={item} />}
                    onEndReached={() => this.setState({ loading: true })}
                    ListFooterComponent={<ActivityIndicator size="large" />}
                />
            </Container>
        )
    }
}

function RenderItem (props: { item: ICadastro }) {
    return (
        <ContainerItem>            
            <ContainerItemText {...{...props, backcolor: props.item.document.length > 11 ? '#ff6a00': '#00b2ff' }  } >
                <TextItemPrincipal>{props.item.name}</TextItemPrincipal>
                <TextItemSecondario >{props.item.document}</TextItemSecondario>
                <TextItemSecondario >{props.item.type}</TextItemSecondario>
            </ContainerItemText>
        </ContainerItem>
    )
}