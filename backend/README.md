# Backend - Inventory Management System

This is the Node.js/Express backend for the Inventory Management System (FIFO) project.

## Features
- REST API for inventory and sales
- Kafka integration for real-time event ingestion
- FIFO costing logic for sales
- JWT authentication for protected endpoints

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the backend server:
   ```sh
   npm run dev
   ```
3. Start the Kafka consumer (in a separate terminal):
   ```sh
   node kafka/consumer.js
   ```

## Notes
- Requires PostgreSQL and Kafka services to be running (see docker-compose.yml).
- Uses JWT authentication (see `/api/login`). 