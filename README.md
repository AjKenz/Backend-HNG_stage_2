# Backend-HNG_stage_2

This is the README file for your Express Node.js API. It provides information on how to set up, run, and use the API.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the API](#running-the-api)
- [Usage](#usage)
- [Known Limitations and Assumptions](#known-limitations-and-assumptions)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- PostgreSQL database (or a compatible database) available.


## Installation

To install the required dependencies, run the following command:

```bash
npm install
```

## Configuration

For configuring your database connection, you can use environment variables. Create a .env file in the root directory of your project and add the following variables:

```bash
DATABASE_URL=your_database_url_here
DIALECT=postgres
HOST=your_database_host
PORT=your_database_port
USER=your_database_user
PASSWORD=your_database_password
DB=your_database_name
```

## Running the API

To run the API locally, execute the following command:

```bash
npm start
```

By default, the API will run on port 3000. You can change the port by modifying the .env file or using the PORT environment variable.

## Usage
Creating a Person
To create a new person, send a POST request to /api with a JSON body like this:

```json
{
  "name": "John Doe"
}
```

**Fetching a Person**
To fetch a person by ID, send a GET request to /api/:id.

**Updating a Person**
To update a person's name by ID, send a PUT request to /api/:id with a JSON body like this:

```json
{
  "name": "Updated Name"
}
```

**Deleting a Person**
To delete a person by ID, send a DELETE request to /api/:id.

## Known Limitations and Assumptions

This API assumes the use of PostgreSQL as the database.
Authentication and authorization mechanisms are not implemented in this example.

## Deployment
To deploy this API, follow the deployment guidelines in the documentation.