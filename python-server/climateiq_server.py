from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

CLIMATEIQ_API_KEY = os.getenv('CLIMATEIQ_API_KEY')

@app.route('/climateiq/city/<city_name>', methods=['GET'])
def get_carbon_footprint(city_name):
    encoded_city_name = requests.utils.quote(city_name)
    headers = {
        'Authorization': f'Bearer {CLIMATEIQ_API_KEY}'
    }
    try:
        response = requests.get(f'https://api.climateiq.com/v1/cities/{encoded_city_name}', headers=headers)
        response.raise_for_status()
        data = response.json()
        return jsonify(data), 200
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5002)
