const defaultState = {
    users: {
        data: [],
        page: 0,
        count: 0,
        totalPages: 0,
        isLoadMoreAvailable: false,
    },
};

export default (state = defaultState, action) => {
    switch(action.type){
        case 'SAVE_USERS':
            return {...action.payload};
        default:
            return state;
    }
}