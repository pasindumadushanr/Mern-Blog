
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx'
import { store, persistor} from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/ThemeProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        
       <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
