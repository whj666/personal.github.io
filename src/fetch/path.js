let host = document.location.host;
let pathName = document.location.pathname;   
let index = pathName.substr(1).indexOf("/");   
let protocol = location.protocol;
let path = protocol+"//"+host;
export default path;