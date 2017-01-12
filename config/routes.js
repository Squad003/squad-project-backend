'use strict';

module.exports = require('lib/wiring/routes')

// create routes

// what to run for `GET /`
.root('root#root')

// standards RESTful routes
.resources('examples')

// users of the app have special requirements
.post('/sign-up', 'users#signup')
.post('/sign-in', 'users#signin')
.delete('/sign-out/:id', 'users#signout')
.patch('/change-password/:id', 'users#changepw')
.get('/search-users', 'users#searchUsers')
.resources('users', { only: ['index', 'show'] })

// CRUD routes
.post('/blogposts', 'blogposts#create')
.get('/blogposts', 'blogposts#index')
.get('/blogposts/:id', 'blogposts#show')
.get('/blogposts/me/:user_id', 'blogposts#indexUserBp')
.get('/blogposts/:other_user_id', 'blogposts#indexOthersPosts')
.patch('/blogposts/:id', 'blogposts#update')
.delete('/blogposts/:id', 'blogposts#destroy')
.get('/search-posts', 'blogposts#searchPosts')

.post('/pages', 'pages#create')
.patch('/pages/:id', 'pages#update')
.get('/pages/:id', 'pages#show')
.delete('/pages/:id', 'pages#destroy')
.get('/pages/me/:user_id', 'pages#indexUsersPages')
.get('/pages/:other_user_id', 'pages#indexOthersPages')
;
