from flask import Flask
from app.middleware import PrefixMiddleware

# Creates the application object as a Flask instance.
application = Flask(__name__)

# set voc=False if you run on local computer
application.wsgi_app = PrefixMiddleware(application.wsgi_app, voc=False)

# Import routes.py file which defines the URL routing.
from app import routes