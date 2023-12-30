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

@app.route('/quotes', methods=['GET'])
def get_quotes():
    return jsonify({'quotes': quotes})

@app.route('/quote', methods=['GET'])
def get_random_quote():
    random_quote = random.choice(quotes)
    return jsonify({'quote': random_quote})

@app.route('/quotes', methods=['POST'])
def add_quote():
    data = request.get_json()

    if 'quote' in data:
        new_quote = data['quote']
        quotes.append(new_quote)
        return jsonify({'message': 'Quote added successfully'})
    else:
        return jsonify({'error': 'Invalid request'}), 400

if __name__ == '__main__':
    app.run(debug=True)
