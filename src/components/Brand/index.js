import Inferno from 'inferno'
import {connect} from 'cerebral/inferno'
import Component from 'inferno-component'
// Connect to Cerebral
export default connect({
	// States
},{
	// Signals
},
// Class Header
class Brand extends Component {
	constructor(props) {
		super(props);
	}
	render({formBrand, fieldChanged}) {
		return (
			<div className="">
				<h4>Lista de Unidades</h4>
			</div>
		)
	}
})
