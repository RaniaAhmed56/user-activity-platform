Services:

* API Service: [http://localhost:3000]
* MongoDB: localhost:27017
* Kafka: localhost:9092



## API Testing (Postman)

### Health Check


GET http://localhost:3000/api/health




### Create Activity (LOGIN)


POST http://localhost:3000/api/activities


Request body:

json
{
  "userId": "user_login1",
  "actionType": "LOGIN",
  "metadata": {
    "browser": "Chrome",
    "device": "Desktop",
    "ipAddress": "192.168.1.100"
  }
}


### Get All Activities

GET http://localhost:3000/api/activities


### Get Activities by User


GET http://localhost:3000/api/activities?userId=user_login1


### Get Activities with Pagination


GET http://localhost:3000/api/activities?userId=user_final_test&page=1&limit=5




### Get Activities by Action Type


GET http://localhost:3000/api/activities?actionType=LOGIN


##  Environment Variables

**API Service**


PORT=3000
KAFKA_BROKERS=kafka:9092
MONGO_URI=mongodb://mongo:27017/activitydb


**Worker Service**


KAFKA_BROKER=kafka:9092
KAFKA_TOPIC=user-activities
MONGO_URI=mongodb://mongo:27017/activitydb
