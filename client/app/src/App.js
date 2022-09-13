import React from 'react'
import Footer from './components/Footer'
import ApiData from './components/apiClient'
import './App.css'

function App() {
  //document.cookie = 'key=04ff27090f4978d7f32636422abfb4e9; expires=Thu, 29 Nov 00:00:00 UTC;'
  return (
    <>
      <main>
        <ApiData/>
      </main>
        <Footer/>
    </>
    )
}

export default App;
