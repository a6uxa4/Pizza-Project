import React from 'react'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import Header from './Header'
import PizzaList from './PizzaList'
import Sorting from './Sorting'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useSelector } from 'react-redux'

function Main() {
	const navigate = useNavigate()

	const FinalOrder = useSelector((state) => state.SortSlice.order)

	const arr = FinalOrder.map((item) => item.PizzaPrice)
	const sum = arr.flat(Infinity).reduce((acc, val) => acc + val, 0)

	function goToBasket() {
		navigate('/basket')
	}
	return (
		<>
			<Header>
				<StyledContainerButton onClick={() => goToBasket()}>
					<span>{sum ? sum + 'com' : 'Обшая цумма'}</span> |
					<span>
						<HiOutlineShoppingCart /> {FinalOrder.length}
					</span>
				</StyledContainerButton>
			</Header>
			<Sorting />
			<PizzaList />
		</>
	)
}
const StyledContainerButton = styled.button`
	display: flex;
	height: 50px;
	padding: 10px;
	border-radius: 30px;
	border: none;
	background-color: rgba(254, 95, 30, 1);
	color: white;
	font-weight: bold;
	font-size: 16px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	span {
		:nth-child(1) {
			font-size: 13px;
			margin: 10px;
		}
		:nth-child(2) {
			margin: 10px;
		}
	}
`

export default Main
