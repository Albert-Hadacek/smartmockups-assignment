import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import store from './redux/store'
import './styles/styles.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
