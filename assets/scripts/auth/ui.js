const store = require('./../store')

const signInSuccessful = function (response) {
  store.user = response.user
  console.log('Successfully signed in')
}

const signInFailed = function () {
  console.log('Failed to sign in')
}

const signUpSuccessful = function () {
  console.log('Sign up successful')
}

const signUpFailed = function () {
  console.log('Failed to sign up')
}

const signOutSuccessful = function () {
  console.log('Sign out successful')
}

const signOutFailed = function () {
  console.log('Failed to sign out')
}
const changePasswordFailed = function () {
  console.log('failed to change pw')
}
const changePasswordSuccessful = function () {
  console.log('successfully changed pw')
}
module.exports = {
  signInSuccessful,
  signInFailed,
  signUpSuccessful,
  signUpFailed,
  signOutFailed,
  signOutSuccessful,
  changePasswordSuccessful,
  changePasswordFailed
}