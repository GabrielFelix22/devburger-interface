import Logo from '../../assets/logo-login.svg';
import { CartItems } from '../../components/CartItems';
import { Banner, Container, Content, Title } from './styles';

export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt='logo devburger' />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                {/* <CartResume /> */}
            </Content>
        </Container>
    );
}