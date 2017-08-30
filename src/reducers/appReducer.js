export default (state = {value:0}, action) => {
    switch (action.type) {
        case 'INCREMENT_VALUE':
            console.log('action', action);
            return {value: ++action.value}; 
        default:
            return state;
    }
};
