Services
API Service

Local: http://localhost:3000

Public: http://13.60.197.141:3000

MongoDB

Local: localhost:27017

Kafka

Local: localhost:9092

API Testing (Postman)

Health Check

Local

GET http://localhost:3000/api/health


Public

GET http://13.60.197.141:3000/api/health

Create Activity (LOGIN)

Local

POST http://localhost:3000/api/activities


Public

POST http://13.60.197.141:3000/api/activities


Request body:

{
  "userId": "user_login1",
  "actionType": "LOGIN",
  "metadata": {
    "browser": "Chrome",
    "device": "Desktop",
    "ipAddress": "192.168.1.100"
  }
}

Get All Activities

Local

GET http://localhost:3000/api/activities


Public

GET http://13.60.197.141:3000/api/activities

Get Activities by User

Local

GET http://localhost:3000/api/activities?userId=user_login1


Public

GET http://13.60.197.141:3000/api/activities?userId=user_login1

Get Activities with Pagination

Local

GET http://localhost:3000/api/activities?userId=user_final_test&page=1&limit=5


Public

GET http://13.60.197.141:3000/api/activities?userId=user_final_test&page=1&limit=5

Get Activities by Action Type

Local

GET http://localhost:3000/api/activities?actionType=LOGIN


Public

GET http://13.60.197.141:3000/api/activities?actionType=LOGIN

Environment Variables
API Service
PORT=3000
KAFKA_BROKERS=kafka:9092
MONGO_URI=mongodb://mongo:27017/activitydb

Worker Service
KAFKA_BROKER=kafka:9092
KAFKA_TOPIC=user-activities
MONGO_URI=mongodb://mongo:27017/activitydb
