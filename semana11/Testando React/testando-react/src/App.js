import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    if(inputValue !== ""){
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
    };

    const newPostsList = [newPost, ...postsList];

    setPostsList(newPostsList);
    setInputValue("")
    } else {
      setErrorMessage("O campo não pode estar em branco!")
      setTimeout(() => setErrorMessage(""), 3000)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {errorMessage === "" ? <div></div> : errorMessage}
      {postsList.length === 0 
      ? <div>Não existem posts!</div> 
      : <div>
        <h3>Quantidade de Posts: {postsList.length}</h3> 
        {postsList.map(post => {
          return (
              <Post
                key={post.id}
                post={post}
                toggleLike={toggleLike}
                deletePost={deletePost}
              />
          );
        })}
        </div>
      }
    </div>
  );
};

export default App;
