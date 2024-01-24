from flask import Flask, jsonify, request
from flask_cors import CORS 
import random

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


### Jullie code hieronder ###


### Jullie code hierboven ###

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
