import gql from "graphql-tag";

import { client } from "../../service";
import { ACTIONS } from "../../ActionType";

export const updateDataSuccess = (data) => ({
    type: ACTIONS.EDIT_DATA_SUCCESS,
    data
});

export const updateDataFailure = () => ({
    type: ACTIONS.EDIT_DATA_FAILURE,
});

export const deleteDataSuccess = (data) => ({
    type: ACTIONS.DELETE_DATA_SUCCESS,
    data
});

export const deleteDataFailure = () => ({
    type: ACTIONS.DELETE_DATA_FAILURE,
});

export const updateData = (id, description) => {
    const mutation = gql`
 mutation (
  $id: ID!,
  $input: UpdatePostInput!
) {
  updatePost(id: $id, input: $input) {
    id
    body
  }
}
  `;
    const variables = {
        id: id,
        input: { body: description },
    };
    return (dispatch) => {
        return client
            .mutate({ mutation, variables })
            .then((response) => {
                dispatch(updateDataSuccess(response.data.updatePost));
                alert("Data Berhasil dikirim")
            })
            .catch((err) => {
                dispatch(updateDataFailure(err));
                alert("Gagal Mengirim")
            })
    };
};

export const deleteData = (id) => {
    alert("apakah anda yakin ?")
    const mutation = gql`
mutation (
  $id: ID!
) {
  deletePost(id: $id)
}
  `;
    const variables = {
        id: id,
    };
    return (dispatch) => {
        return client
            .mutate({ mutation, variables })
            .then((response) => {
                dispatch(deleteDataSuccess(response.data.deletePost));
                alert("Data Berhasil Dihapus")
            })
            .catch((err) => {
                dispatch(deleteDataFailure(err));
                alert("Data Gagal Dihapus")
            })
    };
};