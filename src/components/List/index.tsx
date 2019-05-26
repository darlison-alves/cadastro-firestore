import React from 'react'
import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';

import {Container, ContainerItem, ContainerItemText, TextItemPrincipal, TextItemSecondario, Header} from './styles'
import { ICadastro } from '../Form/interfaces/ICadastro';

export class FlatListUsuario extends React.Component {
    state ={
        data: [
            { name: 'mariana couto', document: '18707293070', type: 'individual' },
            { name: 'mikael pascal ', document: '59544126000170', type: 'business' },
            { name: 'darlison alves ', document: '59544136000170', type: 'business' },
            { name: 'mikael pascal ', document: '59544000170', type: 'business' },
            { name: 'mariana couto', document: '187072993070', type: 'individual' },
            { name: 'mikael pascal ', document: '5954412360070170', type: 'business' },
            { name: 'darlison alves ', document: '5954413600170', type: 'business' },
            { name: 'mikael pascal ', document: '5954412422000170', type: 'business' },
            { name: 'mariana couto', document: '187072930740', type: 'individual' },
            { name: 'mikael pascal ', document: '595441260040170', type: 'business' },
            { name: 'darlison alves ', document: '595441360050170', type: 'business' },
            { name: 'mikael pascal ', document: '595441240001570', type: 'business' }
        ]
    }

    _keyExtractor = (item: ICadastro) => item.document

    render() {

        if(!this.state.data.length) return null;

        return (
            <Container>
                <Header><Text>USUÁRIOS</Text></Header>
                <FlatList                    
                    keyExtractor={this._keyExtractor}
                    data={this.state.data}
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
            <ContainerItemText {...props} backcolor={props.item.document.length > 11 ? '#ff6a00': '#00b2ff'} >
                <TextItemPrincipal>{props.item.name}</TextItemPrincipal>
                <TextItemSecondario >{props.item.document}</TextItemSecondario>
                <TextItemSecondario >{props.item.type}</TextItemSecondario>
            </ContainerItemText>
        </ContainerItem>
    )
}