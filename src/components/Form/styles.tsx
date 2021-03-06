import styled from 'styled-components/native'
import { StyleSheet } from 'react-native';

export const Container = styled.View``

export const SubmitButton = styled.Button`    
    color: red;
    font-size: 12;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
`
export const BodyForm = styled.View``

export const TextInput = styled.TextInput`
    margin-bottom: 10px;
    backgroundColor: #FFF;
    padding: 10px
`

export const TextError = styled.Text`
    font-size: 10;
    color: #FE2E2E
`


export const SumitButtonN = styled.TouchableOpacity`
    border-width:${StyleSheet.hairlineWidth}px;
    border-color: #ff6a00;
    backgroundColor: #ff6a00
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`

export const SubmitButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`