'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', ({response}) => {
  response.send(`Hello World. My first App Adonis JS <br><a href="/posts">Listar posts</a>`)
})

Route.get("posts","PostController.index")
Route.put("posts/:id","PostController.update")
Route.post("posts/:id","PostController.create")
Route.delete("posts/:id","PostController.delete")