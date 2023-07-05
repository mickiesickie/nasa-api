import axios from "axios";

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = 'Bblzh6HoiIJJSbtMVAOsZgI39pPeeCxz8UzNBhwj'

const getManifest = async (rover) => {
    try{
        const result = await axios.get(`${baseUrl}/${rover.toLowerCase()}`,{params:{ api_key : apiKey}})
        return result.data;
    }
    catch(error){
        console.log('error', error);
    }
}
export default getManifest;