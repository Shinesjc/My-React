import axios from 'axios';
import * as constants from './actionTypes';

const changeDetails = (title,content) => ({
    type: constants.CHANGE_DETAILS,
    title,
    content
});

export const getDetails = (id) => {
    return (dispatch) => {
        axios.get('./api/detail.json?id='+ id).then((res) => {
            const result = res.data.data;
            dispatch(changeDetails(result.title, result.content))
        }).catch(() => {
            
        })
    }
}