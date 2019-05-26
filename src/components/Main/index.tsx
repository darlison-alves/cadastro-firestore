import React from 'react'
import { Container, Content, ContentList } from "./styles";
import Header from '../Header';
import { CustomForm } from '../Form';
import { FlatListUsuario } from '../List';

export class Main extends React.Component {
    render(){
        return (
            <>
                <Container>
                    <Header />
                    <Content>
                        <CustomForm />                               
                    </Content>                    
                </Container>
                <ContentList>
                    <FlatListUsuario />
                </ContentList>
            </>
        )
    }
}

