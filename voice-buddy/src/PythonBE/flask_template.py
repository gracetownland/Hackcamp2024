from flask import Flask, render_template, request, redirect, url_for,jsonify
from flask_cors import CORS
import program
import json

app = Flask(__name__)
CORS(app)

""" @app.route('/process')
def process():
    # The URL to access this function must be something like this:
    # http://localhost:3000/process?yt_url=https://www.youtube.com/watch?v=r8OipmKFDeM
    yt_url = ''
    if "yt_url" in request.args:
        yt_url = request.args['yt_url']

    # from this yt_url download a mp3 file
    return program.run_program(yt_url) """

@app.route('/getJSON', methods=['GET'])
def return_json():
    with open("result.json", "r") as f:
        data = json.load(f)

    return jsonify(data)

if __name__ == '__main__':
    #app.run()
    with open("result.json", "r") as f:
        data = json.load(f)
        print(jsonify(data))
    