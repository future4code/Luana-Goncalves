import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state={
    post: [
      {
      nomeUsuario= 'paulinha',
      fotoUsuario= {usuario1},
      fotoPost= {foto1} 
      },
      {
        nomeUsuario='caio',
        fotoUsuario= {usuario2},
        fotoPost= {foto2}
        },
        {
          nomeUsuario='severo',
          fotoUsuario= {usuario3},
          fotoPost= {foto3}
          }
    ]
  }
};

  render() {
    const listaPost = this.state.post.map((post)=>
    {
    return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
    
    )
  }
})

export default App;
