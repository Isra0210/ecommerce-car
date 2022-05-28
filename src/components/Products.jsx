import styled from "styled-components"
import { products } from "../data";
import Product from "./Product";

const Container = styled.div`
	padding: 0px 20px;
	padding-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20vh;
`;
const Title = styled.h1`
	font-weight: 400;
	font-size: 40px;
`;

const Products = () => {
	return (
			<div>
				<TitleContainer>
					<Title>Estoque</Title>
				</TitleContainer>
				<Container>
					{
						products.map(
							(item) => (
								<Product item={item} key={item.id}/>
							)
						)
					}
				</Container>
			</div>
	)
}

export default Products