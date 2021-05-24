import gql from "graphql-tag";

import { client } from "../../service";
import { ACTIONS } from "../../ActionType";

export const PostDataSuccess = (data) => ({
    type: ACTIONS.POST_DATA_SUCCESS,
    data
});

const PostDataFailure = (err) => ({
    type: ACTIONS.POST_DATA_FAILURE,
});
export const postData = (title, description) => {
    const mutation = gql`
    mutation (
  $input: CreatePostInput!
) {
  createPost(input: $input) {
    id
    title
    body
  }
}
  `;
    const variables = {
        input: { title, body: description },
    };
    return (dispatch) => {
        return client
            .mutate({ mutation, variables })
            .then((response) => {
                dispatch(PostDataSuccess(response.data.createPost));
                alert("Data Berhasil Dikirim")
                window.location = "/";
            })
            .catch((err) => {
                dispatch(PostDataFailure(err));
                alert("Gagal Mengirim")
            })
    };
};