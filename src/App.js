import styled from 'styled-components'
import Main from './components/Main'
import { Route, Routes } from 'react-router'
import Basket from './components/Basket'

function App() {
	return (
		<StyledMain>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/Basket' element={<Basket />} />
			</Routes>
		</StyledMain>
	)
}

export default App

const StyledMain = styled.div`
	width: 1340px;
	background-color: white;
	border-radius: 20px;
	margin: 45px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
