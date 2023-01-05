import React from 'react'
import PizzaIcon from '../assets/Icon/pizzsIcon.svg'
import styled from 'styled-components'

function Header({ children }) {
	return (
		<StyledHeader>
			<StyledHeaderContainer>
				<StyledContainerIcon src={PizzaIcon} />
				<StyledContainerText>
					<span>REACT PIZZA</span>
					<span>самая вкусная пицца во вселенной</span>
				</StyledContainerText>
			</StyledHeaderContainer>
			{children}
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	width: 1230px;
	height: 50px;
	margin-top: 50px;
	display: flex;
	justify-content: space-between;
`
const StyledHeaderContainer = styled.div`
	width: 300px;
	display: flex;
`
const StyledContainerIcon = styled.img`
	width: 38px;
	height: 38px;
`
const StyledContainerText = styled.div`
	width: 261px;
	height: 48px;
	margin-left: 17px;
	display: flex;
	flex-direction: column;
	span {
		:nth-child(1) {
			width: 154px;
			height: 29px;
			font-size: 22px;
			font-weight: bold;
			color: black;
		}
		:nth-child(2) {
			width: 261px;
			height: 19px;
			font-size: 16px;
			color: rgba(123, 123, 123, 1);
		}
	}
`

export default Header
