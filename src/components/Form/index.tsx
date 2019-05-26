import React from 'react'
import { Formik } from 'formik'
import { Button } from 'react-native-elements'
import { Container, SubmitButton, BodyForm, TextInput, SumitButtonN, TextError, SubmitButtonText } from './styles';
import { ICadastro } from './interfaces/ICadastro';
import { cadastroSchema } from './validate';
import { AppPropsFormAction } from './connectedForm';
import { ActivityIndicator } from 'react-native';

export class CustomForm extends React.Component<AppPropsFormAction> {
    state ={
        loading: false
    }
    render() {
        const { cadastrar, loading } = this.props       
        return (
            <Container>
                <Formik 
                    initialValues={{ name: "", document: "" }}
                    onSubmit={(values: ICadastro, { resetForm }) =>{                       
                        this.setState({loading: true})
                        cadastrar(values)
                        resetForm()
                        this.setState({loading: false})                        
                    }}
                    
                    validationSchema={cadastroSchema}
                >
                    {(props) => (
                        <BodyForm>                            
                            <TextError>{ props.errors.name }</TextError>
                            <TextInput
                                placeholder="Nome e sobrenome"
                                onChangeText={props.handleChange('name')}                                
                                value={props.values.name}
                            />                           

                            <TextError>{ props.errors.document }</TextError>
                            <TextInput
                                keyboardType="numeric"
                                placeholder="CPF / CNPJ"
                                onChangeText={props.handleChange('document')}
                                value={props.values.document}
                            />
                           {
                                props.isSubmitting ? <Button title="ENVIAR" loading /> : <Button title="ENVIAR" onPress={(values) => {
                                    props.handleSubmit(values)
                                 } } />
                           }
                        </BodyForm>
                    )}
                    
                </Formik>
            </Container>
        )
    }
}

//<SumitButtonN title={`ENVIAR`} disabled={loading.valueOf()} onPress={props.handleSubmit} color="#ff6a00" />                            