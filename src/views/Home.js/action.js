import gql from "graphql-tag";

import { ACTIONS } from "../../ActionType";
import { client } from "../../service";

const loadDataSuccess = (data) =>({
    type: ACTIONS.LOAD_DATA_SUCCESS,
    data,
});

const loadDataFailure = () => ({
    type: ACTIONS.LOAD_DATA_FAILURE,
});

export const loadData = (page, limit) => {
    console.log("masuk actions")
    const query = gql`
    query($options: PageQueryOptions) {
      posts(options: $options) {
        data {
          id
          title
          body
        }
        meta {
          totalCount
        }
      }
    }
  `;
    const variables = {
        options: {
            paginate: {
                page : page,
                limit: limit,
            },
        },
    };
    return (dispatch) => {
        return client
            .query({ query, variables })
            .then(({ data }) => {
                dispatch(loadDataSuccess(data.posts));
            })
            .catch(() => {
                dispatch(loadDataFailure());
            })
    };
};