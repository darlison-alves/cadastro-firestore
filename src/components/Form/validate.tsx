import { object, string, number, Ref } from 'yup'
import { ICadastro } from './interfaces/ICadastro';

export const cadastroSchema = object().shape<ICadastro>({
    name: string().required('Nome não pode ser vazio!'),
    document: string().required('Documento não pode ser vazio!')
})