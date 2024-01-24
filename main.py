from flask import Flask, jsonify, request
from flask_cors import CORS 
import random

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


### Jullie code hieronder ###


quotes = ["Reach for the sun!", "Start where the rest stops!", "Learn, code, repeat."]

@app.route('/quotes', methods=['GET'])
def get_quotes():
    return jsonify({'quotes': quotes})

@app.route('/quotes', methods=['POST'])
def add_quote():
    data = request.get_json()
    quotes.append(data['quote'])
    return jsonify({'quotes': quotes})

@app.route('/quote', methods=['GET'])
def get_quote():
    randomQuote = random.choice(quotes)
    return jsonify({'quote': randomQuote})

### Jullie code hierboven ###

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
