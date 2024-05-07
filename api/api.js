import http from './http'

let resquest = "/seeyon"

export default {



GetTheEssay(){
    return http.get(`/essay`) 
},

}
