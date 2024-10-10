import axios from "axios";
var serverURL = "http://localhost:5000";
const postData = async (url, body) => {
  try {
    var response = await axios.post(`${serverURL}/${url}`, body);
    var result = response.data;
    return result;
  } catch (e) {
    return null;
  }
};

const getData = async (url) => {
  try {
    var response = await axios.get(`${serverURL}/${url}`, {headers:{'Authorization':localStorage.getItem('TOKEN')}});
    if(response.status==200){
    var result = response.data;
    return result }

  } catch (e) {
    if(e.response.status==401){
        return e.response.data
    }
    else{
    return {status:false, message:'Seviur'}
    }
  }
};
export { serverURL, postData, getData };
