import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: 0
})

export const postRequest = (url, params) => { 
    return service({
        method: 'post',
        url: '/api' + `${url}`,
        data: params
    });
}

export const getRequest = (url, params) => { 
    return service({
        method: 'get',
        url: '/api' + `${url}`,
        data: params
    });
}