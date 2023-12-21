# Flask Quote API

![Python](https://img.shields.io/badge/python-%233776AB.svg?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)

This simple Flask application provides a basic API for managing a collection of quotes. It allows users to retrieve all quotes, get a random quote, and add new quotes to the collection.

## Getting Started

### Prerequisites

Python 3.x
Flask (install using `pip install Flask`)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mattjemattias/flask.git
    ```

2. Navigate to the project directory:

    ```bash
    cd flask
    ```

3. Run the application:

    ```bash
    python main.py
    ```

The Flask development server should now be running, and you can access the API at [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

## API Endpoints

### 1. Hello World

```text
    Endpoint: /
    Method: GET
    Description: Returns a simple "Hello, World!" message.
```

### 2. Get All Quotes

```text
    Endpoint: /quotes
    Method: GET
    Description: Returns a JSON object containing a list of all available quotes.
```

### 3. Get Random Quote

```text
    Endpoint: /quote
    Method: GET
    Description: Returns a JSON object containing a randomly selected quote from the collection.
```

### 4. Add New Quote

```text
    Endpoint: /quotes
    Method: POST
    Description: Adds a new quote to the collection.

    Request Body:
    {
        "quote": "Your new quote here"
    }

    Success Response:
    {
        "message": "Quote added successfully"
    }
    
    Error Response:
    {
        "error": "Invalid request"
    }

```

## Contributors

Sibren Eeckhout & Lukas Olivier
