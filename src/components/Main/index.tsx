import React from 'react'
import { Container, Content, ContentList } from "./styles";
import Header from '../Header';
import ConnectedList from '../List/connectedList';
import ConnectedForm from '../Form/connectedForm';

export class Main extends React.Component {
    render(){
        return (
            <>
                <Container>
                    <Header />
                    <Content>
                        <ConnectedForm />                               
                    </Content>                    
                </Container>
                <ContentList>
                    <ConnectedList />
                </ContentList>
            </>
        )
    }
}

