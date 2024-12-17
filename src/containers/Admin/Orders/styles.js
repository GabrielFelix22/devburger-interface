import Select from 'react-select';
import styled from "styled-components";

export const ProductImage = styled.img `
    height: 80px;
    border-radius: 5px;
    padding: 12px;
    object-fit: cover;
`;

export const SelectStatus = styled(Select) `
    width: 240px;
`;