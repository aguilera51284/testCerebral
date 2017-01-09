import Inferno from 'inferno'
import {connect} from 'cerebral/inferno'
import Component from 'inferno-component'
// Connect to Cerebral
export default connect({
	// States
	formBrand:'new_brand.formBrand.**'
},{
	// Signals
	fieldChanged: 'new_brand.fieldChanged',
	postAction : 'new_brand.postAction'
},
// Class Header
class NewBrand extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
	}
	render({formBrand, fieldChanged, postAction}) {
		var LabelClass = "m-textfield__label";
		return (
			<div className="">
				<h1>Home</h1>
			</div>
		)
	}
})
