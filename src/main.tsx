import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18next from './i18n.ts'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { AnalyticsProvider } from './app/shared/context/analytics';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<AnalyticsProvider>
				<App />
			</AnalyticsProvider>
		</I18nextProvider>
		<Analytics />
		<SpeedInsights />
	</React.StrictMode>,
)
