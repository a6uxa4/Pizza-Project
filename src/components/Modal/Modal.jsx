import './Modal.css'

function Modal({ actve, setActve }) {
	return (
		<div
			className={actve ? 'modal active' : 'modal'}
			onClick={() => setActve(false)}>
			<div
				className={actve ? 'modal__content active' : 'modal__content'}
				onClick={(e) => e.stopPropagation()}>
				<h1>Курьер уже пути</h1>
				<h1>🚚</h1>
				<button
					onClick={() => setActve(false)}
					style={{
						width: '150px',
						height: '50px',
						borderRadius: '20px',
						background: 'black',
						color: 'white',
					}}>
					Закрыть
				</button>
			</div>
		</div>
	)
}
export default Modal
