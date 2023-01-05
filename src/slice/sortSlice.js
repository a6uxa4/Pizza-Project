import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	sort: 'Все',
	order: [],
}

const SortSlice = createSlice({
	name: 'Sort',
	initialState,
	reducers: {
		addSort(state, action) {
			state.sort = action.payload
		},
		addFinal(state, action) {
			state.order.push(action.payload)
		},
		addDelete(state, action) {
			state.order = state.order.filter(
				(element) => element.id !== action.payload,
			)
		},
		addFinalDelete(state, action) {
			state.order = action.payload
		},
	},
})

export const { addSort, addFinal, addDelete, addFinalDelete } =
	SortSlice.actions

export default SortSlice.reducer
