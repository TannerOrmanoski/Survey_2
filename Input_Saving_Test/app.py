import json

from urllib import response

from flask import request

from flask import Flask, render_template, jsonify

import pandas as pd

app = Flask(__name__,
            static_folder='static',
            template_folder='templates')


@app.route('/')
def index():
    return render_template('index.html')

@app.route("/test", methods=["POST"])
def test():
    output = request.get_json()
    print(f'output: {output}, output type: {type(output)}') # This is the output that was stored in the JSON within the browser
    response = app.response_class(
        response=json.dumps(output),
        status=200,
        mimetype='application/json'
    )
    df = pd.DataFrame(output)
    print(df)    

    return response 
     

    # print(type(output))
    # result = json.load(output) # This converts the json output to a python dictionary
    # print(result) # Printing the new dictionary
    # print(type(result)) # This shows the json converted as a pyhthon dictionary
    # return result

if __name__ == "__main__":
    app.run(debug=True)