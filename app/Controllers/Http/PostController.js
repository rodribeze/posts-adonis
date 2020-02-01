'use strict'

const { validate } = use('Validator')
const Post = use('App/Models/Post')

class PostController {
    
    async index({request,response}){
        return await Post.all();
    }

    async create({request,response}){

        let valid = await validate(request.post(), {
            'titulo': 'required',
            'descricao': 'required'
        })

        if(valid.fails()) return response
            .status(400)
            .send(valid.messages())
        
        const body = request.post()

        const post = new Post;
        post.titulo = body.titulo;
        post.descricao = body.descricao;
        
        await post.save()

        return response.status(201).send(post);

    }

    async update({request,response,params}){

        let valid = await validate(request.post(), {
            'titulo': 'required',
            'descricao': 'required'
        })

        if(valid.fails()) return response
            .status(400)
            .send(valid.messages())
        
        const body = request.post()

        const post = await Post
        .query()
        .where('id',params.id)
        .first();

        if(!post) return response.status(400).send("Post não encontrado");

        post.titulo = body.titulo;
        post.descricao = body.descricao;

        post.save()
        
        return response.status(200).send(post);

    }

    async delete({params}){
        
        const post = await Post
        .query()
        .where('id',params.id)
        .delete();

        return "Deletado com sucesso"

    }

}

module.exports = PostController
