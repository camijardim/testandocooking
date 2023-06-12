import API from './webapi.services';
import {BASE_URL} from './urls';

export const getProdutos = async (categ) => {
  try{    
    return await API.get(`${BASE_URL}/produto/GetAllCateg/${categ}`)
    .then(response => {
        return response.data;
      },
      error =>{        
        return  null;
      }
    );
  }catch(error){    
    return null;
  }
}