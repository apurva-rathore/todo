import httpClient from "../http-common";

const getAll=()=>{
    return httpClient.get('');
};

const create=(data)=>{
    return httpClient.post('',data);
};

const getById=(id)=>{
    return httpClient.get(`${id}`);
};

const update= (id,data)=>{
    return httpClient.put(`${id}`,data);
};

const remove = (id) =>{
    return httpClient.delete(`/${id}`);
};
export default{getAll,create,getById,update,remove};