frontend repo:

    https://github.com/IstominaAlena/rss-feed-frontend

Setup backend project:

1. In the directory of your choice with your preferred terminal, clone the app's starter repository:
   git clone https://github.com/IstominaAlena/rss-feed-backend

2. In a terminal window, navigate to the rss-feed-backend repo's directory and run the following to install dependencies and run the app:

   npm install && npm run dev
   or
   yarn && yarn dev

If all goes well, you'll see your installation complete and a message that you have succesful database connection.

API's documentation:

Development server: http://localhost:4000

1. Users:

POST: /api/auth/signup - to register user

Request Body (required):
{
"name": "string",
"email": "string",
"password": "string"
}

Response: "string"

POST: /api/auth/signin - to login user

Request Body (required):
{
"email": "string",
"password": "string"
}

Response: {
"token": "string",
"user": {
"name": "string",
"email": "string"
}
}

GET: /api/auth/current - to get current logged user for refresh app

Parameters:
token (required) - "string"

Response: {
"user": {
"name": "string",
"email": "string"
}
}

GET: /api/auth/logout - to disconnect current usser from database editing

Parameters:
token (required) - "string"

Response: status 204

2. Posts:

GET /api/posts/ - get all posts from database

Parameters:
limit - Maximum number of results possible
page - Skip a specific number of entries (especially useful for pagination)
title - Sort according to a specific title

Response:
{
"\_id": "string",
"isoDate": "string",
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}

GET /api/posts/{id} - get the specific post accordingly it's id

Request Body (required):
{"id": "string"}

Response:
{
"\_id": "string",
"isoDate": "string",
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}

POST /api/posts/ - add new post to database

Parameters:
token (required) - "string"

Request Body (required):
{
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}

Response:
{
"\_id": "string",
"isoDate": "string",
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}

DELETE /api/posts/{id} - delete post from database accordingly it's id

Parameters:
token (required) - "string"

Request Body (required):
{"id": "string"}

Response: {
"message": "string"
}

PUT /api/posts/{id} - update post in database accordingly it's id

Parameters:
token (required) - "string"

Request Body (required):
{
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}

Response:
{
"\_id": "string",
"isoDate": "string",
"creator": "string",
"title": "string",
"link": "string",
"content": "string",
"categories": ["string"],
"contentSnippet": "string",
}
