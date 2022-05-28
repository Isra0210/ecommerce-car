import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
	height: 100px;
	background-color: white;
`
const Wrapper = styled.div `
	padding: 30px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	justify-content: center;
`

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`

const Center = styled.div`
	flex: 1;
	text-align: center;
`

const Logo = styled.h1`
	font-weight: 400;
`

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	
	&:hover{
    color: #54626F;
		font-weight: bold;
		transform: scale(1.1);
  }
`

const Navbar = () => {
    return ( 
			<Container>
        <Wrapper>
					<Left>
						<MenuItem>HOME</MenuItem>
						<MenuItem>ESTOQUE</MenuItem>
						<MenuItem>CONTATO</MenuItem>
					</Left>
					<Center><Logo>Israel's Store</Logo> </Center>
					<Right>
						{/* TODO change this register to login screen */}
						<MenuItem>CADASTRAR</MenuItem>
						<MenuItem>LOGIN</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color="primary">
								<ShoppingCartOutlined/>
							</Badge>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
    )
}

export default Navbar