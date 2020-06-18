import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		valorTexto: ""
	}

	onChangeComentario = (event) => {
		this.setState({valorTexto: event.target.value})
	}

	render() {
		console.log(this.state.valorTexto)
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.valorTexto}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}

}

