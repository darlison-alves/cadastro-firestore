import { object, string, number, Ref } from 'yup'
import { ICadastro } from './interfaces/ICadastro';

export const cadastroSchema = object().shape<ICadastro>({
    name: string().required('Ei faltou seu nome!'),
    type: string().required(),
    document: string().required('Qual o seu documento ?')
})