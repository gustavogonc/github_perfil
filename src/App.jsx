import { useState } from 'react';

import Perfil from './components/Perfil/Index';
import Formulario from './components/Formulario';
import ReposList from './components/ReposList/Index';


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
       <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 &&(
        <>
          <p>Teste</p>
          <Perfil nomeUsuario ={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}


      {/* {formularioEstaVisivel &&(
            <Formulario/>
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form </button> */}
    </>
  )
}

export default App
