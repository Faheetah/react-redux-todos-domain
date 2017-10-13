const error = store => next => action => {
    try {
        return next(action)
    } catch (error) {
        store.dispatch({type: 'ERROR', error: 'Something bad happened'})
        return error
    }
}

export default error
