import logo from './logo.svg';
import ApiData from './components/apiClient';
import './App.css'

function App() {
  
  return (
   <>
    <div>
      <img src='#' id='logo'/>
      <nav>
        <span>HOME</span>
        <span>SOBRE</span>
        <span>CONTATO</span>
      </nav>
    </div>

     <main>
       <ApiData/>
     </main>

     <aside>
       conteudo lateral
     </aside>
   </>
  )
}

export default App;
