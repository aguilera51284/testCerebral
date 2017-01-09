import {set, state, string, input} from 'cerebral/operators'
import {form,changeField,validateField} from 'cerebral-forms'
import CapiFactory from '../../factories/CapiFactory'
import PostBrandAction from './actions/PostBrandAction'
export default {
	state:{
		formBrand:form({
			name: {
				value: '',
				validationMessages: ['El campo email es invalido.'],
				isRequired: true,
				validationRules:['isValue'],
				 isTouched: false
			},
			shortName:{
				value:'',
				isRequired:true,
				validationMessages:['El campo password es necesario.']
			},
			description:{
				value:'',
				isRequired:true,
				validationMessages:['El campo password es necesario.']
			},
			url:{
				value:'',
				isRequired:true,
				validationMessages:['El campo url es necesario.']
			}
		}),
		postBrand:{}
	},
	signals: {
		routed: [
			set(state`currentPage`, 'new_brand')
		],
		fieldChanged: changeField,
		postAction: [
			...CapiFactory('POST','/api/v1/brand',{
				success:[],
				error:[]
			})
		]
	}
}
