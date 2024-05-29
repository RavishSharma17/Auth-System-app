### OAuth:
* Set up OAuth in your Gmail account and update values of GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in config/keys.js for running and testing the Application.

### To run google login+register
use: http://localhost:3000/auth/google in the browser
Then use the given token in all subsequent requests


## Curl requests

### Update user by id
curl --request PUT \
  --url http://localhost:3000/users/665665033264490d321b367d \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTY2NTAzMzI2NDQ5MGQzMjFiMzY3ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2OTM3OTg3LCJleHAiOjE3MTY5NDE1ODd9.tbSXa2na4QZwR5aLOxhy_x6NaIzj23BfUQdQ7Iv1kic' \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"isPublic": false
}'

### Update profile

curl --request PUT \
  --url http://localhost:3000/profiles \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTY2MjU0MzI2NDQ5MGQzMjFiMzY2ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2OTM3Mzc1LCJleHAiOjE3MTY5NDA5NzV9.MWB0WjwovX9313rCqVDx2KNxxUyT0-PWPbam5zpQpoM' \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"role": "admin"
}'

### List profiles
curl --request GET \
  --url http://localhost:3000/profiles \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTY2NTAzMzI2NDQ5MGQzMjFiMzY3ZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE2OTM3OTg3LCJleHAiOjE3MTY5NDE1ODd9.tbSXa2na4QZwR5aLOxhy_x6NaIzj23BfUQdQ7Iv1kic' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ

### login (Local)
curl --request POST \
  --url http://localhost:3000/auth/login \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
	"email": "ramasharma@gmail.com",
	"password": "abcd1234"
}'

### register (Local)

curl --request POST \
  --url http://localhost:3000/auth/register \
  --header 'Content-Type: application/json' \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ \
  --data '{
  "name": "Rambha Sharma",
  "email": "ramasharma@gmail.com",
  "password": "abcd1234"
}'

### logout
curl --request GET \
  --url http://localhost:3000/auth/logout \
  --cookie connect.sid=s%253AGzVCKDcVtovnwKUpISsXSsLJtg2KnLDc.MGRcudfpUriDVna3c8HLHZmts5ZGrG91inzhhNjXdoQ


### Sample mongo db data
```
[{
  "_id": {
    "$oid": "66565afbd672f36472f0d56c"
  },
  "name": "John Doe",
  "email": "john@example.com",
  "password": "$2a$10$pY8M9mYljME.kTyqRFxZfOdMFBKzpPYU/DkWjkGzeHvRZtDWD8R2G",
  "isPublic": true,
  "role": "user",
  "provider": "local",
  "__v": 0
},
{
  "_id": {
    "$oid": "665662543264490d321b366d"
  },
  "name": "Rambha Sharma",
  "email": "ramasharma@gmail.com",
  "password": "$2a$10$fdlB1etkZe910P50MuAoZOkpOXICDtmM8Bpzv00pfC.LmcaTL3FsK",
  "isPublic": true,
  "role": "user",
  "provider": "local",
  "__v": 0
},
{
  "_id": {
    "$oid": "665665033264490d321b367d"
  },
  "name": "Sonu Sharma",
  "email": "riteetude@gmail.com",
  "photo": "https://lh3.googleusercontent.com/a/ACg8ocIctTOOEOof6Siq_Thhne7uKbaRfkbbwfsj5j_iQGgKAdvmtw=s96-c",
  "isPublic": false,
  "role": "user",
  "provider": "google",
  "providerId": "105149739097136692824",
  "__v": 0
}]
```

### Admin user
Currently to make a normal user -> admin, we'd have to manually update in db. It is out of scope to add a new API for promoting a user to admin role.

### tokens
In either case (local login/ google login) we generate a bearer token, which must be used with all user related operations else, we will get an unauthorized request.

### Notes
* secrets/mongo keys are in config/keys.js
* To run app simply type $ npm run start (make sure mongo is running on mongodb://localhost:27017/auth_system where auth_system is the database name). The collection name will be 'users'
 