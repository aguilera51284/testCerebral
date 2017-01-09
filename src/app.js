/*jscs:enable esnext */
import Inferno from 'inferno'
import {Container} from 'cerebral/inferno'
import {Controller} from 'cerebral'
import Devtools from 'cerebral/devtools'
import {state, set} from 'cerebral/operators'
import Router from 'cerebral-router'
import {redirect} from 'cerebral-router'
import HttpProvider from 'cerebral-provider-http'
import {form} from 'cerebral-forms'
// Modules
import home from './modules/home'
import brand from './modules/brand'
import new_brand from  './modules/brand/NewBrand'
// Components
import App from './components/App'

const controller = Controller({
	// Options
	options: {
		// Use strict rendering
		strictRender: true,
		// Expose props.signals with all signals in components
		signalsProp: false
	},
	// Activate DevTools
	devtools: Devtools({
		// chrome extension if unable to connect
		remoteDebugger: 'localhost:8585',
		// Time travel
		storeMutations: true,
		// Warnings on mutating outside "state" API
		preventExternalMutations: true,
		// Warnings when strict render path usage is wrong
		verifyStrictRender: true,
		// Throw error when overwriting existing input property
		preventInputPropReplacement: false,
		// Shows a warning when you have components with number of state dependencies
		// or signals above the set number
		bigComponentsWarning: {state: 5, signals: 5},
	}),
	// Routers
	router: Router({
		routes: {
			'/': 'home.routed',
			'/brand': {
				'/': 'brand.routed',
				'/new-brand': 'new_brand.routed'
			},
		},
		query: true, // Query support
		onlyHash: true, // Use hash urls
		baseUrl: '/' // Only handle url changes on nested path
	}),
	// States
	state:{
		currentPage:'new_brand',
		isLogin: false,
		tokenJwt:'',
		settings: form({
			/**
			validateOnChange: {
				value: true,
				description: 'Show error messages on change',
				unToggleFieldsWhenChecked: ['app.settings.validateInputOnBlur']
			},
			*/
			disableSubmitWhenFormIsInValid: {
				value: false,
				description: 'Disable submit when form is invalid'
			},
			disableSubmitWhenFormIsSend: {
				value: false,
				description: 'Disable submit when form is send'
			}
			/**,
			validateInputOnBlur: {
				value: false,
				description: 'Show error message on blur',
				unToggleFieldsWhenChecked: ['app.settings.validateOnChange']
			}
			*/
		}),
		// User States
		user:{}
	},
	// Modules
	modules: {
		home,
		brand,
		new_brand
	},
	// Signals
	signals: {
	redirectLogin:[
			({router}) => router.goTo('/login')
		]
	},
	//Providers
	providers: [
		HttpProvider({
			// Prefix all requests with this url
			baseUrl: 'http://127.0.0.1:8080',
			// Any default headers to pass on requests
			headers: {
				'Content-Type': 'application/json',
				'Authorization': String('Bearer '+ localStorage.getItem('appJwt')),
				'Client-Id':'52fda0a34b6961601f8eb4d398757c08a4718f09'
			},
			// When talking to cross origin (cors), pass cookies
			// if set to true
			withCredentials: false
		})
	]
})
// Renderizar
Inferno.render((
	<Container controller={controller}>
		<App />
	</Container>
), document.getElementById('root'))
