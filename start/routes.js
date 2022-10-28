'use strict'



/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/singup').render('auth/singup')


//profile
Route.on('/profile').render('profile')
//Route.get('/profile','ProfileController.index').middleware('guest')

//admin




Route.get('/admin/painel','DashboardController.index').as('home.admin')

//star users
Route.get('users/list', 'UserController.index').as('users.index')
Route.post('users', 'UserController.store').as('users.store')
Route.get('users/create', 'UserController.create').as('users.create')
Route.get('users/:id', 'UserController.show').as('users.show')
Route.put('users/:id', 'UserController.update').as('users.update')
Route.patch('users/:id', 'UserController.update')
Route.get('users/:id/edit', 'UserController.edit').as('users.edit')
Route.delete('users/:id', 'UserController.destroy').as('users.destroy')
//and users

//auth
Route.on('/forgot-password').render('/auth/login')
Route.on('/login').render('/auth/login')
Route.post('/register','AuthController.singup')
Route.post('login', 'AuthController.login').middleware('guest')
Route.get('/logout', 'AuthController.logout').middleware('guest')