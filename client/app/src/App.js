import React from 'react'
import { Button } from 'reactstrap'
import ApiData from './components/apiClient'
import './App.css'

function App() {
  //document.cookie = 'key=04ff27090f4978d7f32636422abfb4e9; expires=Thu, 29 Nov 00:00:00 UTC;'
  return (
    <>
      <main>
        <ApiData/>
        <Button color="danger">Danger!</Button>
      </main>
    </>
    )
}

export default App;
