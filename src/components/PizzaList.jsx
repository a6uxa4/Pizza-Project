import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Data } from '../Data/index'
import PizzaItem from './PizzaItem'

function PizzaList() {
	const Sortirovannye = useSelector((state) => state.SortSlice.sort)

	const condition = () => {
		if (Sortirovannye === 'Все') {
			return Data
		}
		return Data.filter((curData) => {
			return curData.typeOf === Sortirovannye
		})
	}

	return (
		<StyledPizzaList>
			<StyledText>{Sortirovannye} пиццы</StyledText>
			<StyledContainerList>
				{condition().map((item) => {
					return <PizzaItem key={item.id} item={item} />
				})}
			</StyledContainerList>
		</StyledPizzaList>
	)
}
const StyledPizzaList = styled.div`
	width: 1230px;
	margin-top: 30px;
	margin-bottom: 100px;
`
const StyledText = styled.h1`
	font-weight: bold;
	font-size: 32px;
`
const StyledContainerList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 33px;
`
export default PizzaList
