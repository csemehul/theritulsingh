# app.py
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    # Handle form data here
    return f'Thank you, {name}!'

if __name__ == '__main__':
    app.run(debug=True)
