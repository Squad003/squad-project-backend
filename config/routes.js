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
.resources('users', { only: ['index', 'show'] })

.post('/blogposts', 'blogposts#create')
.get('/blogposts', 'blogposts#index')
.get('/blogposts/:id', 'blogposts#show')
.patch('/blogposts/:id', 'blogposts#update')
.delete('/blogposts/:id', 'blogposts#destroy')
;
