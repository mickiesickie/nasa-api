import {format} from 'date-fns';
const formatDate = (date) => {
    const formatedDate = format(date,"yyyy-MM-dd");
    return formatedDate; 
}

export default formatDate;