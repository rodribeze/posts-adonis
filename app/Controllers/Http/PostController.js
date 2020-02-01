'use strict'

class PostController {
    
    index({request,response}){
        response.send("a")
    }

}

module.exports = PostController
