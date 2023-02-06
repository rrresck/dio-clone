import { useNavigate, NavLink  } from "react-router-dom";
import { MdEmail, MdLock, MdAccountCircle, MdPhone } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleSignup, SubtitleSignup, Row, Wrapper } from './styles';
import { IFormSignature } from "./types";

const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório.'),
    email: yup.string().email('E-mail é obrigatório').required('Campo obrigatório.'),
    cellphone: yup.string().required('Campo obrigatório.'),
    password: yup.string().min(5, 'No mínimo 5 caracteres').required('Campo obrigatório.'),
  }).required();

const Signup = () => {
    const navigate = useNavigate()

    const { control, formState: { errors } } = useForm<IFormSignature>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickSignUp = () => {
        navigate('/login')
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
                <TitleSignup>Comece agora grátis</TitleSignup>
                <SubtitleSignup>Crie sua conta e make the change._</SubtitleSignup>
                <form>
                    <Input name="name" errorMessage={errors?.name?.message} control={control} type={"name"} placeholder={"Nome completo"} leftIcon={<MdAccountCircle />}/>
                    <Input name="email" errorMessage={errors?.email?.message} control={control} type={"email"} placeholder={"E-mail"} leftIcon={<MdEmail />} />
                    <Input name="cellphone" errorMessage={errors?.cellphone?.message} control={control} type={"cellphone"} placeholder={"Celular ex: (11) 99999-9999"} leftIcon={<MdPhone/>}/>
                    <Input name="password" errorMessage={errors?.password?.message} control={control} type={"password"} placeholder={"Senha"} leftIcon={<MdLock />} />
                    <Button title="Criar minha conta" variant="secondary" type="submit"onClick={handleClickSignUp} />
                </form>
                <Row>
                    <SubtitleSignup>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleSignup>
                </Row>
                    <NavLink to='/login'>
                        <SubtitleSignup>Já tem uma conta? Faça login.</SubtitleSignup>
                    </NavLink>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Signup };