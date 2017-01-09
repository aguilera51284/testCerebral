import Inferno from 'inferno'
import {connect} from 'cerebral/inferno'
import {state, set} from 'cerebral/operators'
import Component from 'inferno-component'
// Compoments
import Home from '../Home'
import Brand from '../Brand'
import NewBrand from '../Brand/NewBrand'
// Pages
const pages = {
	home: Home,
	brand: Brand,
	new_brand: NewBrand
}

// Connect To cerebral
export default connect({
	currentPage: 'currentPage',
	user: 'user'
},{
},
// Class App
class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const Page = pages[this.props.currentPage]
		return (
			<div className="l-dashboard">
				{/* Contenido Childs */}
				<section className="l-dashboard__content">
					{/* Component */}
					<Page />
				</section>
			</div>
		)
	}
})
