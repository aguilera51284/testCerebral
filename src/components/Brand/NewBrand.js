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
				<h4>Nueva Unidad</h4>
				<div className="m-textfield  -floating-label -width-full --js-textfield">
					{/* Input:Name */}
					<input className="m-textfield__input"
						value={formBrand.name.value}
						onInput={(e) => fieldChanged({
							field: 'new_brand.formBrand.name',
							value: e.target.value
						})}/>
					<label className={formBrand.name.isValid ? LabelClass : LabelClass+ " is_invalid"}for="name">Name</label>
					<span class="m-field__error" >El campo es invalido.</span>
				</div>
				<div className="m-textfield  -floating-label -width-full --js-textfield">
					{/* Input:Short Name */}
					<input className="m-textfield__input"
						value={formBrand.shortName.value}
						onInput={(e) => fieldChanged({
							field: 'new_brand.formBrand.shortName',
							value: e.target.value
						})}/>
					<label className="m-textfield__label" for="short_name">Nombre Corto</label>
					<span class="m-field__error" >El campo es invalido.</span>
				</div>
				<div className="m-textfield  -floating-label -width-full --js-textfield">
					{/* Input:Description */}
					<input className="m-textfield__input"
						value={formBrand.description.value}
						onInput={(e) => fieldChanged({
							field: 'new_brand.formBrand.description',
							value: e.target.value
						})}/>
					<label className="m-textfield__label" for="description">Descripción</label>
					<span class="m-field__error" >El campo es invalido.</span>
				</div>
				<div className="m-textfield  -floating-label -width-full --js-textfield">
					{/* Input:Url */}
					<input className="m-textfield__input"
						value={formBrand.url.value}
						onInput={(e) => fieldChanged({
							field: 'new_brand.formBrand.url',
							value: e.target.value
						})}/>
					<label className="m-textfield__label" for="url">Url</label>
					<span class="m-field__error" >El campo es invalido.</span>
				</div>
				<a  onClick={(e) => postAction()} className="pure-button pure-button-primary">Registrar</a>
				<a  className="pure-button pure-button-primary">Registrar y Continuar</a>
			</div>
		)
	}
})
