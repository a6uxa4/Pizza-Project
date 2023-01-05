import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Header from './Header'
import BasketText from '../assets/image/Baskettext.svg'
import BasketDelete from '../assets/image/BasketDelete.svg'
import BasketNotFound from '../assets/image/BaskerNotFound.svg'
import { useNavigate } from 'react-router'
import { addDelete, addFinal, addFinalDelete } from '../slice/sortSlice'
import Modal from './Modal/Modal'

function Basket() {
	const FinalOrder = useSelector((state) => state.SortSlice.order)

	const [actve, setActve] = useState(false)

	const arr = FinalOrder.map((item) => item.PizzaPrice)
	const sum = arr.flat(Infinity).reduce((acc, val) => acc + val, 0)

	const dispath = useDispatch()

	const navigate = useNavigate()

	function handleClickFinal() {
		setActve(true)
		dispath(addFinalDelete([]))
	}

	function click() {
		dispath(addFinalDelete([]))
	}

	function goToHome() {
		navigate('/')
	}
	return (
		<>
			<Header />
			<StyledContainerBasket>
				{FinalOrder.length === 0 ? (
					<StyledNotFoundConainer>
						<h1>Корзина пустая</h1>
						<span>
							Вероятней всего, вы не заказывали ещё пиццу.
							<br /> Для того, чтобы заказать пиццу, перейди на
							главную страницу.
						</span>
						<img src={BasketNotFound} />
						<button onClick={() => goToHome()}>
							Вернуться назад
						</button>
					</StyledNotFoundConainer>
				) : (
					<>
						<StyledContainerBasketHeader>
							<StyledImageHeader src={BasketText} />
							<StyledImageHeader
								src={BasketDelete}
								onClick={() => click()}
							/>
						</StyledContainerBasketHeader>
						{FinalOrder === 0
							? console.log('abu')
							: FinalOrder.map((item, index) => {
									return (
										<StyledCard key={index}>
											<StyledImageCard
												src={item.PizzaImage}
											/>
											<StyledCardContainer>
												<h2>{item.PizzaName}</h2>
												<span>
													{item.PizzaType} тесто,
													{item.PizzaSize} cm.
												</span>
											</StyledCardContainer>
											<StyledDelete
												onClick={() =>
													dispath(addDelete(item.id))
												}>
												✖
											</StyledDelete>
										</StyledCard>
									)
							  })}
						<StyledFooter>
							<div>
								<span>
									Всего пицц: <span>{FinalOrder.length}</span>
								</span>
								<button onClick={() => goToHome()}>
									{'<'} Вернуться назад
								</button>
							</div>
							<div>
								<span>
									Сумма заказа: <span>{sum}</span>
								</span>
								<button onClick={() => handleClickFinal()}>
									Оплатить сейчас
								</button>
							</div>
						</StyledFooter>
					</>
				)}
			</StyledContainerBasket>
			<Modal actve={actve} setActve={setActve} />
		</>
	)
}
const StyledFooter = styled.div`
	width: 820px;
	height: 122px;
	margin-top: 40px;
	display: flex;
	justify-content: space-between;
	div {
		:nth-child(1) {
			width: 211px;
			height: 122px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			span {
				font-weight: 400;
				font-size: 22px;
				span {
					font-weight: 400;
					font-size: 22px;
					font-weight: bold;
				}
			}
			button {
				width: 211px;
				height: 55px;
				background: #ffffff;
				border: 1px solid #d3d3d3;
				border-radius: 30px;
				color: #d3d3d3;
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				:hover {
					background-color: black;
					transition: 1s;
					color: white;
				}
			}
		}
		:nth-child(2) {
			width: 251px;
			height: 122px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			span {
				font-weight: 400;
				font-size: 22px;
				span {
					font-weight: 400;
					font-size: 22px;
					font-weight: bold;
				}
			}
			button {
				width: 211px;
				height: 55px;
				border: none;
				font-style: normal;
				font-weight: 700;
				font-size: 16px;
				color: white;
				background: #fe5f1e;
				border-radius: 30px;
			}
		}
	}
`
const StyledNotFoundConainer = styled.div`
	width: 547px;
	height: 523px;
	margin: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	h1 {
		width: 250px;
		height: 39px;
		font-family: 'Proxima Nova';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 39px;
		letter-spacing: 0.01em;
		color: #000000;
	}
	span {
		width: 547px;
		font-family: 'Proxima Nova';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 145.4%;
		text-align: center;
		letter-spacing: 0.01em;
		color: #777777;
	}
	button {
		width: 210px;
		height: 46px;
		border-radius: 30px;
		background-color: #282828;
		color: white;
		font-size: 16px;
		cursor: pointer;
	}
`
const StyledContainerBasket = styled.div`
	width: 821px;
	margin-top: 135px;
	margin-bottom: 135px;
`
const StyledContainerBasketHeader = styled.div`
	width: 821px;
	height: 39px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`
const StyledImageHeader = styled.img`
	width: 176px;
	height: 39px;
	cursor: pointer;
`
const StyledCard = styled.div`
	width: 821px;
	height: 111px;
	border-top: 1px solid rgba(243, 243, 243, 1);
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const StyledImageCard = styled.img`
	width: 80px;
	height: 80px;
`
const StyledCardContainer = styled.div`
	width: 280px;
	padding-right: 200px;
`
const StyledDelete = styled.div`
	width: 32px;
	height: 32px;
	border: 2px solid #d7d7d7;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	cursor: pointer;
`
export default Basket
