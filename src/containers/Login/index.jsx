import Logo from '../../assets/logo-login.svg';
import { Button } from '../../components/Button';
import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title
} from './styles';
export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devburger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>
                <p>
                    Não possui uma conta? <a>Cadastre-se.</a>
                </p>
            </RightContainer>
        </Container>
    );
}