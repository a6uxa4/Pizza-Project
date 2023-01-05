import { configureStore } from '@reduxjs/toolkit'
import SortSlice from '../slice/sortSlice'

const store = configureStore({
	reducer: {
		SortSlice: SortSlice,
	},
})

export default store
