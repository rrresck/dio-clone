import { useNavigate, NavLink  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { IFormData } from "./types";


const schema = yup.object({
    email: yup.string().email('E-mail é obrigatório').required('Campo obrigatório.'),
    password: yup.string().min(5, 'No mínimo 5 caracteres').required('Campo obrigatório.'),
  }).required();

const Login = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }
            alert('Usuário ou senha inválido')
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                    <Input name="password" errorMessage={errors?.password?.message} control={control} type="password" placeholder="Senha" leftIcon={<MdLock />} />
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <NavLink to='/signup'>
                        <CriarText>Criar Conta</CriarText>
                    </NavLink>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }