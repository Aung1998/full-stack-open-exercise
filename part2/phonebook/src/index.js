import ReactDOM from 'react-dom'
import App from './App'

const phoneBook = [
  { 
    name: 'Arto Hellas',
    phone: '040-12345678',
    id: 1
 }
]

ReactDOM.render(
  <App phoneBook={phoneBook} />, 
  document.getElementById('root')
)