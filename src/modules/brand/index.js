import {set, state} from 'cerebral/operators'
import {form,changeField,validateField} from 'cerebral-forms'
export default {
    state:{
    	Brands:{},
    },
    signals: {
        routed: [
            set(state`currentPage`, 'brand')
        ]
    }
}
