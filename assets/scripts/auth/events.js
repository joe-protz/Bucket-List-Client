const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // on successful sign up, use the data to then sign in
  api.signUp(data)
    .then(() => {
      api.signIn(data)
        .then(ui.signInSuccessful)
    })
    .catch(ui.signUpFailed)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccessful)
    .catch(ui.signInFailed)
}

const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccessful)
    .catch(ui.signOutFailed)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccessful)
    .catch(ui.changePasswordFailed)
}

const addEventHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-pw').on('submit', onChangePassword)
}

module.exports = {
  addEventHandlers
}
