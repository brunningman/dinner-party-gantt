from flask import Flask

app = Flask(__name__,
  static_folder = './dist',
  template_folder = './dist')

from app.views.index import index_blueprint

# register blueprints
app.register_blueprint(index_blueprint)