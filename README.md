
# User Activity Platform – Event-Driven Microservices

This project is a backend system built to practice **event-driven microservices architecture** using **Node.js, Apache Kafka, and MongoDB**.

The main idea is to handle user activities (such as LOGIN, LOGOUT, SEARCH) asynchronously using Kafka instead of saving data directly to the database.


##  Features

* Event-driven architecture using Apache Kafka
* Microservices setup (API Service + Worker Service)
* Clean architecture with simple DDD principles
* REST API with pagination and filtering
* MongoDB for persistent storage
* Docker & Docker Compose for easy setup
* Scalable and production-style design



## Project Concept

1. Client sends a request to the API
2. API Service validates the request
3. API Service publishes an event to Kafka
4. Worker Service consumes the event
5. Worker Service stores the data in MongoDB

The API responds immediately, while data processing happens asynchronously.



##  Architecture Flow


Client
  ↓
API Service
  ↓
Kafka (user-activities topic)
  ↓
Worker Service
  ↓
MongoDB


This design allows:

* Fast API responses
* Loose coupling between services
* Independent scaling of services



##  Project Structure (DDD Style)


src/
├── domain/          // Entities and business logic
├── application/     // Use cases
├── infrastructure/  // Kafka, MongoDB, config
└── interfaces/      // Controllers and routes



##  Running the Project

### Prerequisites

* Docker
* Docker Compose
* Node.js 18+ (for local development)

### Run with Docker Compose


cd infra
docker-compose up --build





##  Implementation Notes

* Kafka is used to decouple the API layer from data persistence
* MongoDB indexes are created for better filtering performance
* Pagination is implemented to handle large datasets
* Events are processed asynchronously for better scalability


##  Project Summary

This project demonstrates:

* Real-time event processing with Kafka
* Microservices communication
* Clean backend architecture
* Scalable and maintainable design
* Practical Docker usage

It is not just a simple CRUD API, but a real event-driven backend system.


##  License

MIT

