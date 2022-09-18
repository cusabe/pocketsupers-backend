# pocketsupers-backend
Node.js backend API to save data for pocketsupers-frontend

Data documents based on https://superheroapi.com/ and includes subset of fields:
id
name
image.url
powerstats.*

Data is stored in JSON like form in MongoDB on AWS Sydney

Router entry points:
POST   /api/post          attach superhero object as req.body
GET    /api/getAll
GET    /api/getOne/:id
PATCH  /api/update/:id    attach updated superhero object as req.body
DELETE /api/delete/:id

Assumption:
- okay to numbers as strings to be consistent with original API data
- chose to store only subset of fields used in exercise
- not worth setting up a separate powerstats object since data is essentially flat

Issues:
 - one collection for all users of this API, no 
 - no user authentication, could be vulnerable to attack
 - MongoDB holdings only respond to requests from selected IPs (mine and AWS)