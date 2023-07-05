import axios from "axios";
import formatDate from "../utils/formatDate";
const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';
const apiKey = 'Bblzh6HoiIJJSbtMVAOsZgI39pPeeCxz8UzNBhwj'
const today = new Date();

const getDataMars = async ({rover,page = 1,date = today,sol=1000}) => {
    const params = {
        api_key : apiKey,
        page,
        earth_date: formatDate(date),
        sol
    }
    try {
        const result = await axios.get(`${baseUrl}${rover}/photos`,{params});
        console.log('getDataMars', result);
        return {data: result.data, page:result.config.params.page};
    }
    catch(error){
        console.log('Error', error);
    }
}

export default getDataMars; 