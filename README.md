# Chundlr Back End

A content managment system that enables users, upon signing up and in, to
see their dashboard where they can see, add, edit, and delete blog posts
and pages. For those who aren't users of the application or aren't signed
in, they can see all users blog posts and pages. This API allows for backend
creation of blogposts and pages. Pages are like "links" that enable the
creator of the pages to make a rudimentary website while it lets the viewer
of the page to be able to see content that the creator puts into the page.


## API

Use this as the basis for your own API documentation.

Scripts are included in  the scripts folder to test built-in actions. Add your
own scripts to test your custom API.

Run the following command upon using this application in order to create a
secret key.
```sh
echo SECRET_KEY=$(/usr/local/opt/openssl/bin/openssl rand -base64 66 | tr -d '\n') >>.env
```

### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |



### Users

| Verb | URI Pattern | Controller#Action |
|------|-------------|-------------------|
| GET  | `/users`    | `users#index`     |
| GET  | `/users/1`  | `users#show`      |

### Blogposts

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/blogposts`               | `blogposts#create`          |
| GET    | `/blogposts`               | `blogposts#index`           |
| GET    | `/blogposts/:id`           | `blogposts#show`            |
| GET    | `/blogposts/me/:user_id`   | `blogposts#indexUserBp`     |
| GET    | `/blogposts/:other_user_id`| `blogposts#indexOthersPosts`|
| PATCH  | `/blogposts/:id`           | `blogposts#update`          |
| DELETE | `/blogposts/:id`           | `blogposts#destroy`         |

### Pages

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/pages`               | `pages#create`          |
| GET    | `/pages/:id`           | `pages#show`            |
| GET    | `/pages/me/:user_id`   | `pages#indexUsersPages` |
| GET    | `/pages/:other_user_id`| `pages#indexOthersPages`|
| PATCH  | `/pages/:id`           | `pages#update`          |
| DELETE | `/pages/:id`           | `pages#destroy`         |

## Links
* [Front End Application](https://squad003.github.io/front-end/)
* [Front End Repo](https://github.com/Squad003/front-end)
* [Back Repository](https://github.com/Squad003/squad-project-backend)
* [Back End Application](https://agile-forest-14016.herokuapp.com)

## [License](https://opensource.org/licenses/MIT)

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
