'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/singup').render('auth/singup')
Route.on('/login').render('/auth/login')
Route.post('/register','AuthController.singup')
Route.post('login', 'AuthController.login').middleware('guest')
Route.get('/logout', 'AuthController.logout').middleware('guest')

//profile
Route.on('/profile').render('profile')
//Route.get('/profile','ProfileController.index').middleware('guest')

