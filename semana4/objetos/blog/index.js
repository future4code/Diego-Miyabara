function postar() {
    
    const tituloUser = document.getElementById("titulo-post")
    const autorUser = document.getElementById("autor-post")
    const conteudoUser = document.getElementById("conteudo-post")
    const postTitulo = document.getElementById("recebe-titulo")
    const postAutor = document.getElementById("recebe-autor")
    const postConteudo = document.getElementById("recebe-conteudo")
    const recebePost = document.getElementById("recebe-post")

    const postUser = {
    Título: tituloUser.value,
    Autor: autorUser.value,
    Conteúdo: conteudoUser.value
    }

    const arrayPosts = []
        
    if ((tituloUser.value !== "") && (autorUser.value !== "") && (conteudoUser.value !== "")){
        arrayPosts.push(postUser)
        recebePost.innerHTML += 
        `<div class="espacamento-posts">
            <h3 class="espacamento-titulos">Título: ${postUser.Título}</h3> 
            <li class="espacamento-titulos">Autor: ${postUser.Autor}</li> 
            <p class="espacamento-titulos">Conteúdo: ${postUser.Conteúdo}</p>
        </div>`
    } else {
        alert("Todos os campos são necessários")
    }

    tituloUser.value = ""
    autorUser.value = ""
    conteudoUser.value = ""

}