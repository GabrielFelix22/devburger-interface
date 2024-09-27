import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import { CardProduct } from '../../components/CardProduct';
import { BackButton } from '../../components/BackButton';
import {
    Container,
    Banner,
    CategoryMenu,
    ProductsContainer,
    CategoryButton,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();

    const { search } = useLocation();

    const queryParms = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParms.get('categoria');

        if (categoryId) {
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data.map((product) => ({
                currencyValue: formatPrice(product.price),
                ...product,
            }));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();

    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory,
            );

            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                {categories.map(category => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: `/cardapio`,
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true, // Para não adicionar a rota anterior na pilha de navegação
                                },
                            );
                            setActiveCategory(category.id);
                        }}

                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
            <BackButton onClick={() => navigate('/')}> &lt; Voltar</BackButton>
        </Container>
    );
}