import styled from "styled-components"
import Carousel from "./Carousel";
import { Close, AddShoppingCart } from '@material-ui/icons';


const Container = styled.div`
	height: 90vh;
	display: flex;
	background-color: white;
	border-radius: 26px;
	min-width: 500px;
	flex-direction: column;
`;

const InfoContainer = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const Details = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const DetailsInfo = styled.p`
	margin: 0px 16px;
	font-size: 16px;
	font-weight: 600;
`;

const Title = styled.h1`
	font-weight: 400;
`;

const Circle = styled.div`
	margin: 10px;
	height: 26px;
	width: 26px;
	position: absolute;
	top: 0;
	right: 0;
	z-index: 3;
	background-color: white;
	border-radius: 50%;
	display: flex;
	align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const PriceContainer = styled.div`
	padding: 12px 0px;
	height: 40px;
	width: 100%;
	background-color: black;
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

const Price = styled.p`
	margin-left: 40px;
	font-size: 20px;
	color: white;
	font-weight: 500;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	align-items: center;
	justify-content: center;
	display: flex;
	cursor: pointer;
	margin-right: 50px;
	
	&:hover {
    background-color: whitesmoke;
    transform: scale(1.1);
  }
`;

const FinancingContainer = styled.div`
	display: flex;
	flex: 2;
	height: 60px;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;
`;

const SendMessage = styled.button`
	border-radius: 8px;
	color: blue;
	height: 30;
	padding: 10px;
	background-color: white;
	border: 1px solid blue;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;

const FinancingSimulation = styled.button`
	border-radius: 8px;
	background-color: blue;
	color: white;
	height: 30;
	padding: 10px;
	border: 1px solid blue;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;	

const BuyNow = styled.button`
	border-radius: 8px;
	background-color: white;
	color: black;
	height: 30;
	padding: 10px;
	border: 1px solid black;
	cursor: pointer;
	font-weight: 600;
	box-shadow: 1px 1px black;
`;	

const ProductDetails = ({item, onClose}) => {
	return (
		<Container>
			<Carousel item={item} key={item.id}/>
			<InfoContainer>
				<Title>
					{item.title}
				</Title>
			</InfoContainer>
			<Details>
				<DetailsInfo>Ano: {item.year}</DetailsInfo>
				<DetailsInfo>Km: {item.km}</DetailsInfo>
				<DetailsInfo>Combustível: {item.fuel}</DetailsInfo>
				<DetailsInfo>Cor: {item.color}</DetailsInfo>
			</Details>
			<FinancingContainer>
				<SendMessage>Enviar mensagem</SendMessage>
				<FinancingSimulation>Simular Financiamento</FinancingSimulation>
				<BuyNow>Comprar agora</BuyNow>
			</FinancingContainer>
			<PriceContainer>
				<Price>Preço: {item.price}</Price>
				<Icon>
					<AddShoppingCart style={{color: "black"}}/>
				</Icon>
			</PriceContainer>
			<Circle onClick={onClose}>
				<Close  style={{height: "20px"}}/>
			</Circle>
		</Container>
	)
}

export default ProductDetails