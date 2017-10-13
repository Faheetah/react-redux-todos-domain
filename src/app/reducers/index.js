const initialState = {
    error: false,
    loading: false,
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'ERROR':
            return Object.assign({}, state, { error: action.error })
        case 'LOADING':
            return Object.assign({}, state, { loading: action.loading })
        default:
            return state
    }
}
