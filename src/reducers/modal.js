import { TOGGLE_MODAL } from '../constants/ActionTypes'

const initialState = {
    open: false,
}

const toggleModal = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODAL:
            return {
                ...state,
                open: !state.open
            }
        default:
            return initialState
    }
}

export default toggleModal