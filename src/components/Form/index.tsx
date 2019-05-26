import React from 'react'
import { Formik } from 'formik'

import { Container, SubmitButton, BodyForm, TextInput, SubmitButtonText, TextError } from './styles';
import { ICadastro } from './interfaces/ICadastro';
import { cadastroSchema } from './validate';

export class CustomForm extends React.Component {
    render() {
        return (
            <Container>
                <Formik 
                    initialValues={{ name: "", document: "", type: "deede" }} 
                    onSubmit={(values: ICadastro) => console.log(values)}
                    validationSchema={cadastroSchema}
                >
                    {(props) => (
                        <BodyForm>                            
                            <TextError>{ props.errors.name }</TextError>
                            <TextInput
                                placeholder="Nome e sobrenome"
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                value={props.values.name}
                            />                           

                            <TextError>{ props.errors.document }</TextError>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="CPF / CNPJ"
                                onChangeText={props.handleChange('document')}
                                onBlur={props.handleBlur('document')}
                                value={props.values.document}
                            />
                            <SubmitButton title="ENVIAR" onPress={props.handleSubmit} color="#ff6a00" />
                                
                        </BodyForm>
                    )}
                    
                </Formik>
            </Container>
        )
    }
}