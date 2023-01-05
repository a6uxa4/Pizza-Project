import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addFinal } from '../slice/sortSlice'
export default function PizzaItem({ item }) {
	const [pizzaChoiceType, setPizzaChoiceType] = useState(
		item.choiceFood.nameOne,
	)
	const [pizzaChoiceSize, setPizzaChoiceSize] = useState(
		item.choiceSize.sizeThree,
	)
	const [pizzaPrice, setPizzaPrice] = useState(item.amountPizza26size)
	const [pizzaAmount, setPizzaAmount] = useState(1)

	const dispath = useDispatch()

	useEffect(() => {
		if (pizzaChoiceSize === 26) {
			setPizzaPrice(item.amountPizza26size)
		} else {
			setPizzaPrice(item.amountPizza30size)
		}
		if (pizzaChoiceSize === 40) {
			setPizzaPrice(item.amountPizza40size)
		}
	}, [pizzaChoiceSize])

	function handleClick(name, image) {
		if (pizzaAmount <= 10) {
			setPizzaAmount((prev) => prev + 1)
		} else {
			return
		}
		dispath(
			addFinal({
				id: Math.random().toString(),
				PizzaName: name,
				PizzaImage: image,
				PizzaType: pizzaChoiceType,
				PizzaSize: pizzaChoiceSize,
				PizzaPrice: pizzaPrice,
				PizzaAmount: pizzaAmount,
			}),
		)
	}

	return (
		<>
			<StyledCardList>
				<img src={item.image} />
				<h2>{item.namePizza}</h2>
				<StyledChoice>
					<div>
						<button
							style={{
								background:
									pizzaChoiceType === 'тонкое' && 'white',
							}}
							onClick={(e) =>
								setPizzaChoiceType(e.target.textContent)
							}>
							{item.choiceFood.nameOne}
						</button>
						<button
							style={{
								background:
									pizzaChoiceType === 'традиционное' &&
									'white',
							}}
							onClick={(e) =>
								setPizzaChoiceType(e.target.textContent)
							}>
							{item.choiceFood.nameTwo}
						</button>
					</div>
					<div>
						<button
							style={{
								background: pizzaChoiceSize === 26 && 'white',
							}}
							onClick={() => setPizzaChoiceSize(26)}>
							{item.choiceSize.sizeOne} cm.
						</button>
						<button
							style={{
								background: pizzaChoiceSize === 30 && 'white',
							}}
							onClick={() => setPizzaChoiceSize(30)}>
							{item.choiceSize.sizeTwo} cm.
						</button>
						<button
							style={{
								background: pizzaChoiceSize === 40 && 'white',
							}}
							onClick={() => setPizzaChoiceSize(40)}>
							{item.choiceSize.sizeThree} cm.
						</button>
					</div>
				</StyledChoice>
				<StyledCardAmount>
					<span>oт {pizzaPrice} cом</span>
					<button
						onClick={() => handleClick(item.namePizza, item.image)}>
						+ Добавить
					</button>
				</StyledCardAmount>
			</StyledCardList>
		</>
	)
}

const StyledCardList = styled.div`
	width: 280px;
	height: 459px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	img {
		width: 260px;
		height: 260px;
	}
	h2 {
		font-weight: bold;
	}
`
const StyledChoice = styled.div`
	width: 280px;
	height: 85px;
	background: rgba(243, 243, 243, 1);
	border-radius: 10px;
	div {
		:nth-child(1) {
			width: 280px;
			margin: 3px;
			button {
				:nth-child(1) {
					width: 49%;
					height: 38px;
					border: none;
					border-radius: 5px;
					padding: 10px;
					cursor: pointer;
					:hover {
						background-color: white;
					}
				}
				:nth-child(2) {
					width: 49%;
					height: 38px;
					border: none;
					border-radius: 5px;
					padding: 10px;
					cursor: pointer;
					:hover {
						background-color: white;
					}
				}
			}
		}
		:nth-child(2) {
			width: 280px;
			margin-top: 7px;
			margin-left: 5px;
			button {
				:nth-child(1) {
					width: 32%;
					height: 32px;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					:hover {
						background-color: white;
					}
				}
				:nth-child(2) {
					width: 32%;
					height: 32px;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					:hover {
						background-color: white;
					}
				}
				:nth-child(3) {
					width: 32%;
					height: 32px;
					border: none;
					border-radius: 5px;
					cursor: pointer;
					:hover {
						background-color: white;
					}
				}
			}
		}
	}
`
const StyledCardAmount = styled.div`
	width: 280px;
	margin-top: 17px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	span {
		font-size: 22px;
		font-weight: bold;
	}
	button {
		width: 155px;
		height: 40px;
		border: 1px solid #eb5a1e;
		color: #eb5a1e;
		font-size: 16px;
		font-weight: bold;
		border-radius: 30px;
		padding: 0px;
		cursor: pointer;
		:hover {
			background-color: #eb5a1e;
			color: white;
		}
	}
`
