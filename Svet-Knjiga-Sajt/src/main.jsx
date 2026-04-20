import { createRoot } from 'react-dom/client' //To hook react app
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' //Router for multiple pages
import { StrictMode } from 'react' //Deverlopment bug catcher

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>
)