# auth-json-patch
Authetication and JSON patch

Installation process:
1. install Imagemagick
 - apt-get install imagemagick (Debin/Ubuntu)

2. npm install

Run the application:
 - npm start

Usage:
Public endpoint
1. Authentication/Login
  Endpoint: /users/authenticate
  Payload: {
        "username": "user6",
        "password": "pass123"
    }
  Response: {
        "success": true,
        "message": "Login success",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwN2MxYTljOTk3NjJhZGZmMGRjNDMyYyIsImlhdCI6MTYxODc0NjAxMywiZXhwIjoxNjE4NzQ5NjEzfQ.DuPEGeiJApRgw7N6Uo0FvkKqw4m5yOo5IO6tBrbnj1A"
    }

Protected endpoint
1. Update address
  Endpoint: /update/address
  Headers: Authorization: <token>
  Payload: {
        "address": "Bangalore, Koramangala"
    }
  Response: {
        "success": true,
        "data": {
            "_id": "607c1a9c99762adff0dc432c",
            "username": "user6",
            "password": "pass123",
            "__v": 0,
            "address": "Bangalore, Kpramangala"
        }
    }
2. Generate thumbnail of image
  Endpoint: /thumbnail/generate
  Headers: Authorization: <token>
  Payload: {
        "url": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg"
    }
  Response: Image

3. JSON patch
  Endpoint: /patch
  Headers: Authorization: <token>
  Payload: {
        "document": {"firstName": "Albert", "contactDetails": {"phoneNumbers": []}},
        "patch": [
            {"op": "replace", "path": "/firstName", "value": "Joachim"},
            {"op": "add", "path": "/lastName", "value": "Wester"},
            {"op": "add", "path": "/contactDetails/phoneNumbers/0", "value": {"number": "9874563210"}}
        ]
    }
  Response: {
        "success": true,
        "document": {
            "firstName": "Joachim",
            "contactDetails": {
                "phoneNumbers": [
                    {
                        "number": "9874563210"
                    }
                ]
            },
            "lastName": "Wester"
        }
    }

