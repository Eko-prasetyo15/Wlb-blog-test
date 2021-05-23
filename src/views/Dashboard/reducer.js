import { ACTIONS } from "../../ActionType";

const initialState = {
    datas: [],
    isDelete: false
};

export default function reducer(state = initialState, action) {
    const { EDIT_DATA_SUCCESS, EDIT_DATA_FAILURE , DELETE_DATA_SUCCESS, DELETE_DATA_FAILURE} = ACTIONS;
    switch (action.type) {
        case EDIT_DATA_SUCCESS:
            return {
                ...state,
                datas: action.data
                // totalData: action.data.meta.totalCount,
            };
        case DELETE_DATA_SUCCESS:
            return { ...state, isDeleted: action.data };
        case EDIT_DATA_FAILURE:
        case DELETE_DATA_FAILURE:

        default:
            return state;
    }
}