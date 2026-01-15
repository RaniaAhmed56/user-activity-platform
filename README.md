User Activity Platform – Event-Driven Microservices

Backend system implementing an event-driven microservices architecture using Node.js, Apache Kafka, and MongoDB.
User activities (LOGIN, LOGOUT, SEARCH, etc.) are processed asynchronously via Kafka instead of being written directly to the database.

🚀 Deployed on AWS

Features

Event-driven architecture with Apache Kafka

Microservices (API Service + Worker Service)

Clean architecture (DDD-inspired)

REST API with pagination & filtering

MongoDB for persistence

Docker & Docker Compose

Production-style, scalable design

Architecture Flow

Client
→ API Service
→ Kafka (user-activities topic)
→ Worker Service
→ MongoDB

Benefits

Fast API responses

Loose coupling between services

Independent service scaling

Project Structure
src/
├── domain/          // Entities & business logic
├── application/     // Use cases
├── infrastructure/  // Kafka, MongoDB, config
└── interfaces/      // Controllers & routes

Running the Project
Prerequisites

Docker & Docker Compose

Node.js 18+ (for local development)

Docker Compose
cd infra
docker compose up --build

Notes

Kafka decouples API and persistence layers

Events are processed asynchronously

MongoDB indexes improve query performance

License

MIT
