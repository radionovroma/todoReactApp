import ReactDOM from 'react-dom/client';
import { App } from './components/App';

document.body.style.margin = '0';
document.body.style.paddingTop = '20px';

ReactDOM
    .createRoot(document.getElementById('root') as HTMLElement)
    .render(<App />);
