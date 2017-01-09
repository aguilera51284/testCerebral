import {set, state} from 'cerebral/operators'
import toggleSelectSettings from './chains/toggleSelectSettings'
export default {
    state:{

    },
    signals: {
        routed: [
            set(state`currentPage`, 'home')
        ],
		toggleSelectSettings
    }
}
