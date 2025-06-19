import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ContextWrap from './context/wallet/ContextWrap.tsx'
import './index.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ContextWrap >
			<App />
		</ContextWrap >
	</StrictMode>,
)
