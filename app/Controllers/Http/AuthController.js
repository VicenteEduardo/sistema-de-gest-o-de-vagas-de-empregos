'use strict'
const { validate } = use('Validator')
const Database = use('Database')
const Mail = use('Mail')
const User = use('App/Models/User')
class AuthController {

  async singup ({ request, session, response }) {


    const rules = {
      username: 'required|string',
      email: 'required|email|unique:users,email',
      password: 'required'
    }

    const validation = await validate(request.all(), rules)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        .flashExcept(['password'])

      return response.redirect('back')
    }
    else{
      const data = request.only(['email', 'username', 'password'])
      const user = await User.create(data)

      return 'Registered successfully'
    }




  }

  async login ({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return response.redirect('/profile')
  }

  async logout(auth, request){
    try {
      return await auth.getUser()
    } catch (error) {
      response.send('Credentials missing')
    }
    return response.redirect('/login')
  }
}

module.exports = AuthController
