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
  response.send(`<html>
    <head>
      <title>Adonis example</title>
    </head>
    <body>
    Hello World. My first App Adonis JS <br><a href="/posts">Listar posts</a>
    </body>
  </html>`)
})

Route.get("posts","PostController.index")
Route.post("posts","PostController.create")
Route.put("posts/:id","PostController.update")
Route.delete("posts/:id","PostController.delete")