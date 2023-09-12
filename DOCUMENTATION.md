# API Documentation

This documentation provides details on the API's endpoints, request and response formats, and instructions for using Postman as a testing source.

## Endpoints

### Create a Person

- **Endpoint**: `POST /api`
- **Request Format**: JSON
  - **Request Body**:
    ```json
    {
      "name": "John Doe"
    }
    ```
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "John Doe",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Fetch a Person

- **Endpoint**: `GET /api/:id`
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "John Doe",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Update a Person

- **Endpoint**: `PUT /api/:id`
- **Request Format**: JSON
  - **Request Body**:
    ```json
    {
      "name": "Updated Name"
    }
    ```
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "Updated Name",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Delete a Person

- **Endpoint**: `DELETE /api/:id`
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "message": "Person deleted successfully"
    }
    ```

## Sample Usage with Postman

Here are sample requests and expected responses using Postman for each endpoint:

### Creating a Person

1. Open Postman.
2. Set the HTTP method to `POST`.
3. Enter the request URL: `http://localhost:3000/api`.
4. Set the request body to JSON format:
   ```json
   {
     "name": "John Doe"
   }

5. Click the "Send" button.
Expected response:
```json
{
  "person": {
    "id": 1,
    "name": "John Doe",
    "createdAt": "2023-09-12T00:00:00.000Z",
    "updatedAt": "2023-09-12T00:00:00.000Z"
  }
}
```

### Fetching a Person

1. Open Postman.
2. Set the HTTP method to GET.
3. Enter the request URL, e.g., http://localhost:3000/api/1 (replace 1 with the desired person's ID).
4. Click the "Send" button.
Expected response:
```json
{
  "person": {
    "id": 1,
    "name": "John Doe",
    "createdAt": "2023-09-12T00:00:00.000Z",
    "updatedAt": "2023-09-12T00:00:00.000Z"
  }
}
```

### Updating a Person
1. Open Postman.
2. Set the HTTP method to PUT.
3. Enter the request URL, e.g., http://localhost:3000/api/1 (replace 1 with the desired person's ID).
4. Set the request body to JSON format:
```json
{
  "name": "Updated Name"
}
```
5. Click the "Send" button.
Expected response:
```json
{
  "person": {
    "id": 1,
    "name": "Updated Name",
    "createdAt": "2023-09-12T00:00:00.000Z",
    "updatedAt": "2023-09-12T00:00:00.000Z"
  }
}
```

### Deleting a Person
1. Open Postman.
2. Set the HTTP method to DELETE.
3. Enter the request URL, e.g., http://localhost:3000/api/1 (replace 1 with the desired person's ID).
4. Click the "Send" button.
5. Expected response:
```json
{
  "message": "Person deleted successfully"
}
```

## Known Limitations and Assumptions

**This API assumes the use of PostgreSQL as the database.**
**Authentication and authorization mechanisms are not implemented in this example.**

## Setting Up and Deploying the API

### Locally

To deploy the API locally for development and testing, follow these steps:

1. **Clone the Repository**: If you haven't already, clone the Git repository to your local machine:

   ```bash
   git clone https://github.com/AjKenz/Backend-HNG_stage_2.git
   cd <repository_directory>
    ```
Install Dependencies: Ensure that you have Node.js and npm installed. Then, install the required project dependencies:

```bash
npm install
```
**Configuration**: Create a .env file in the project's root directory to configure your database connection and any other environment-specific settings. Add the following variables:

```bash
DATABASE_URL=your_database_url_here
DIALECT=postgres
HOST=your_database_host
PORT=your_database_port
USER=your_database_user
PASSWORD=your_database_password
DB=your_database_name
```
- Running the API: Start the API locally by running:

```bash
npm start
```
The API will be accessible at http://localhost:3000 by default.

Testing with Postman: You can use Postman to test the API locally as described in the Sample Usage with Postman section.