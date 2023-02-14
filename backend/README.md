# Chapter 1: Introduction

## 1.1 Project Overview

The Ordina Weather App is a project created as part of the interview process to showcase the developer's skills. The project has limited features and its main objective is to retrieve data from the open weather map API.

The project is built using Nestjs and TypeScript technologies. The project also makes use of one external API, which is the openweathermap API.

## 1.2 Folder Structure

The folder structure of the project is organized in a way that follows the Model-Controller-Service (MCS) design pattern.

The src folder is nested in the backend folder and contains the following files and subfolders:

```
src
|-- app.controller.ts
|-- app.module.ts
|-- app.service.ts
|-- app.controller.spec.ts
|-- main.ts
|-- weather
| |-- weather.controller.ts
| |-- weather.controller.spec.ts
| |-- weather.module.ts
| |-- weather.service.ts
| |-- weather.service.spec.ts
|-- models
| |-- weather-data.ts
|-- util
| |-- error-handlers
| | |-- error-handler.ts
| | |-- error-handler.spec.ts
| |-- cors
| | |-- enable-cors-whitelist.spec.ts
| | |-- enable-cors-whitelist.ts
|-- http
| |-- openweathermap.service.spec.ts
| |-- openweathermap.service.ts
```

This project follows the Model-Controller-Service (MCS) design pattern. In the MCS pattern, the models represent the data structures, the controllers handle user requests and the services handle the business logic.

# Chapter 2: Getting Started

## 2.1 Prerequisites

Before you start using the Ordina Weather App, you need to have the following software installed on your computer:

- Node.js (version 10 or later)
- NPM (version 6 or later)
- Git

## 2.2 Installation

To install the Ordina Weather App Backend, you need to follow these steps:

- Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Tobiasltd/ordina-weather-app.git
```

- Change into the project directory by running the following command:

```bash
cd backend
```

- Install the required dependencies using the following command:

```bash
npm install
```

Set up environment variables for your API key and port.

```
OPEN_WEATHER_MAP_BASE_URL = https://api.openweathermap.org/data/2.5/
WEATHER_APP_URL = http://localhost:3000
BACKEND_PORT = 5555

// Secrets: Ask Tobias
OPEN_WEATHER_MAP_API_KEY =

```

## 2.3 Starting the Application

To start the application, use the following commands:

```bash
npm run build
npm run start
```

The application should now be running on the port specified in the environment variables.

# Chapter 3: API Documentation

The Ordina Weather App provides a RESTful API for retrieving data from the open weather map API. The API is built using the Nest.js framework and makes use of the TypeScript language.

## 3.1 Swagger Documentation

Swagger documentation for the API has been setup and is accessible by visiting https://localhost:5555/api. The Swagger documentation provides a detailed view of the available endpoints, the request and response parameters, and the expected HTTP status codes. It also provides a convenient way to test the API endpoints directly from the documentation.

# Chapter 4: Technical Architecture and Design Pattern

## 4.1 Technical Architecture

The Ordina Weather App backend is built using the Nestjs and TypeScript technologies. Nestjs is a progressive Node.js framework for building efficient, scalable, and modular server-side applications. Nestjs leverages the power of TypeScript to provide type-safe and scalable code.

## 4.2 Design Pattern

The project follows the Model-Controller-Service (MCS) design pattern. In the MCS pattern, the models represent the data structures, the controllers handle user requests and the services handle the business logic.

The folder structure of the project is organized in a way that supports this design pattern, with each component of the MCS pattern located in their respective module folder.

# Chapter 5: Testing and Quality Assurance

## 5.1 Introduction

Quality assurance is a critical aspect of software development and the Ordina Weather App project is no exception. The goal of quality assurance is to ensure that the code is free of bugs and runs as expected, which provides a stable and reliable solution to the end user.

## 5.2 Test Coverage

The project has a comprehensive test suite that covers all the main functionality of the app, including the controllers and services.

- TO DO: E2E Tests
- Automate tests with prehook

## 5.3 Tools and Frameworks

The following tools and frameworks are used for testing and quality assurance in the Ordina Weather App project:

- Jest: A popular JavaScript testing framework that is easy to use and provides a comprehensive feature set for automated testing.
- Supertest: A library for testing HTTP servers in Node.js that makes it easy to write tests for the app's API.
- Nestjs Testing Module: A testing module for Nestjs applications that provides the necessary tools and functionality to write automated tests.

## 5.4 Code Quality and Linting

The project follows a set of coding standards and best practices to ensure that the code is maintainable and easy to read. The code is linted using the popular ESLint library to ensure that it conforms to the project's coding standards.

TODO:

- Automate linting with prehook
