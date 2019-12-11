from flask import render_template, Blueprint, url_for

index_blueprint = Blueprint('index', __name__)

@index_blueprint.route('/')
@index_blueprint.route('/index')
def index():
  url = url_for('static', filename = 'bundle.js')
  return render_template('index.html', bundle = url)