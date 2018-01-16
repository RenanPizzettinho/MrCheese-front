const util = {};

const formatarData = (data) => {

    let dt = new Date(data);

    return `${dt.getDay()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;

}


util.formatarData = formatarData;

export default util;
