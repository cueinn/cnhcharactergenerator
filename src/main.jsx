import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Character } from './components/Character'
import { Header } from './components/Header'

ReactDOM.createRoot(document.getElementById('root')).render(

    <div>
        <Header />
        <Character />
    </div>

)
