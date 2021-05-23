import { ACTIONS } from "../../ActionType";

const initialState = {
    datas:[],
    totalData: 0,
};

export default function reducer(state = initialState, action) {
    const { LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } = ACTIONS;

    switch (action.type) {
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                datas: action.data.data,
                totalData: action.data.meta.totalCount,
            };
        case LOAD_DATA_FAILURE:
        default:
            return state;
    }
}