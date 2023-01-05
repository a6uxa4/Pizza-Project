import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addSort } from '../slice/sortSlice'

function Sorting() {
	const dispath = useDispatch()

	const Sortirovannye = useSelector((state) => state.SortSlice.sort)

	return (
		<StyledSorting>
			<StyledButton
				style={{
					background: Sortirovannye === 'Все' && 'black',
					color: Sortirovannye === 'Все' && 'white',
				}}
				onClick={() => dispath(addSort('Все'))}>
				Все
			</StyledButton>
			<StyledButton
				style={{
					background: Sortirovannye === 'Мясные' && 'black',
					color: Sortirovannye === 'Мясные' && 'white',
				}}
				onClick={() => dispath(addSort('Мясные'))}>
				Мясные
			</StyledButton>
			<StyledButton
				style={{
					background: Sortirovannye === 'Вегетарианская' && 'black',
					color: Sortirovannye === 'Вегетарианская' && 'white',
				}}
				onClick={() => dispath(addSort('Вегетарианская'))}>
				Вегетарианская
			</StyledButton>
			<StyledButton
				style={{
					background: Sortirovannye === 'Гриль' && 'black',
					color: Sortirovannye === 'Гриль' && 'white',
				}}
				onClick={() => dispath(addSort('Гриль'))}>
				Гриль
			</StyledButton>
			<StyledButton
				style={{
					background: Sortirovannye === 'Острые' && 'black',
					color: Sortirovannye === 'Острые' && 'white',
				}}
				onClick={() => dispath(addSort('Острые'))}>
				Острые
			</StyledButton>
		</StyledSorting>
	)
}

const StyledSorting = styled.div`
	width: 1230px;
	margin-top: 80px;
	display: flex;
	gap: 60px;
`
const StyledButton = styled.button`
	padding: 15px;
	border-radius: 30px;
	background-color: rgba(243, 243, 243, 1);
	color: black;
	font-size: 16px;
	font-weight: bold;
	border: none;
	cursor: pointer;
	:hover {
		background-color: black;
		color: white;
	}
`
export default Sorting
