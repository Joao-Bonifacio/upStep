//import logo from './logo.svg';
import ApiData from './components/apiClient';
import './App.css'

function App() {
  document.cookie = 'key=b43e19bcdf3fe7dadaaeb7e6996d430e; expires=Thu, 29 Nov 00:00:00 UTC;'
  return (
   <>
    <div>
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
