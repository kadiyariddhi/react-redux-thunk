import { USER_LIST_SUCCESS, USER_LIST_FAILED } from './type';
import axiosInstance from "../../Lib/axios";

// Get all Account
export const getUserList = (params) => {
    return (dispatch) => {
        return axiosInstance
            .get(`/users`, { params })
            .then((response) => {
                dispatch({
                    type: USER_LIST_SUCCESS,
                    data: response.data,
                });
            })
            .catch((error) => {
                if (error && error.response) {
                    if (error.response.status === 401 || error.response.status === 403) {
                        window.location.assign("/");
                    }
                    if (error.response) {
                        dispatch({
                            type: USER_LIST_FAILED,
                            data: error.response.data,
                        });
                    }
                }
            });
    };
};
