# Chapter 1: Introduction

## 1.1 Project Overview

The Ordina Weather App is a dynamic and modern web application that showcases the developer's skills and abilities. The project has limited features, but its main objective is to retrieve weather data from the open weather map API.

The frontend of the project is built using Nextjs and TypeScript technologies, and is completely styled using Tailwind. The project also makes use of a separate backend, which provides the necessary data to be displayed in the frontend.

## 1.2 Folder Structure

The folder structure of the project is organized in a way that makes it easy to navigate and understand the different components of the application. The following is a list of the main folders and subfolders in the project:

```bash
|-- components
|-- lib
| |-- context
| |-- hooks
| |-- models
| |-- services
| |-- util
|-- pages
| |-- api
| |-- _app
| |-- _document
| |-- index
|-- public
|-- styles
```

The components folder contains all the components used in the application. The lib folder contains all the functions and utilities used in the application. The pages folder contains the main pages of the application and the routing is defined by this folder. The public folder contains static files that are publicly accessible, and the styles folder contains all the styling for the application.

# Chapter 2: Getting Started

## 2.1 Prerequisites

Before you start using the Ordina Weather App, you need to have the following software installed on your computer:

- Node.js (version 10 or later)
- NPM (version 6 or later)
- Git

## 2.2 Installation

To install the Ordina Weather App Frontend, you need to follow these steps:

- Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Tobiasltd/ordina-weather-app.git
```

- Change into the project directory by running the following command:

```bash
cd frontend
```

- Install the required dependencies using the following command:

```bash
npm install
```

## 2.3 Starting the Application

To start the application, use the following commands:

```bash
npm run build
npm run start
```

The application should now be running on port 3000 and can be accessed by going to http://localhost:3000.

# Chapter 3: Technical Architecture and Design Pattern

## 3.1 Frontend Architecture

The frontend of the Ordina Weather App is built using Nextjs, a popular React-based framework. The framework offers server-side rendering and optimized performance, making it a great choice for this project.

## 3.2 Design Pattern

The code implements a functional and maintainable architecture using the context design pattern and hooks. It combines functional components and hooks to make it easier to manage the state of the weather data and provide a centralized location for managing the data. The use of the `Axios` library, the `react-query` library, the `useContext` and `useState` hooks, makes it a well-structured and efficient solution for fetching, caching and accessing weather data throughout an application.
