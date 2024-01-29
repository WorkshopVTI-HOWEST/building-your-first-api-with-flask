from flask import Flask, jsonify, request
from flask_cors import CORS  # Import the CORS extension
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample initial quotes
quotes = ["Reach for the sun!", "Start where the rest stops!", "Learn, code, repeat."]

@app.route('/')
def hello_world():
    return 'Hello, World!'

### Krijg alle quotes terug.


### Krijg een random quote terug.


### Voeg een nieuwe quote toe.


### Verwijder alle quotes.


### Vraag een specifieke quote op.


### Verwijder een specifieke quote.


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
