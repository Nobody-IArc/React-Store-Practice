import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import store, { persistor } from './data/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>
)
