import styled from "styled-components"
import { Send } from "@material-ui/icons";

const Container = styled.div`
	height: 60vh;
	background-color: #e2e2e2;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Title = styled.h1`
	font-weight: 400;
	font-size: 70px;
	margin-bottom: 20px;
`;

const Description = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: white;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	border-radius: 50px;
	box-shadow: 1px 1px  #808080;
`;

const Input = styled.input`
	border: none;
	flex: 8;
	padding-left: 20px;
	border-radius: 50px;
	:focus{
		border: none;
		outline: none;
	}
`;

const Button = styled.button`
	flex: 1;
	border: none;
	background-color: white;
	color: teal;
	border-top-right-radius: 100px;
	border-end-end-radius: 100px;
	margin-left: 30px;
	cursor: pointer;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Inscreva-se</Title>
			<Description>Para novidades, promoções e muito mais!</Description>
			<InputContainer>
				<Input placeholder="Seu melhor email"/>
				<Button>
					<Send/>
				</Button>
			</InputContainer>
		</Container>
	)
}

export default Newsletter