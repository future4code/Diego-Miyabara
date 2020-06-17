import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeMarcacaoBranco from '../../img/bookmark_border-24px.svg'
import iconeMarcacaoPreto from '../../img/bookmark-24px.svg'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favoritado: false,
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })
    if(this.state.numeroCurtidas) {
      this.state.numeroCurtidas -= 1
    } else {
      this.state.numeroCurtidas += 1 
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickFavorito = () => {
    this.setState({
      favoritado: !this.state.favoritado
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  aoEnviarCurtida = () => {
    this.setState({
      curtido: false,
    })
  }
  
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeFavoritar
    if(this.state.favoritado){
      iconeFavoritar = iconeMarcacaoPreto
    } else {
      iconeFavoritar = iconeMarcacaoBranco
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador 
          icone={iconeFavoritar}
          onClickIcone={this.onClickFavorito}
          valorContador={""}
        />
      </div>
      {componenteComentario}
    </div>
  }
}

export default Post