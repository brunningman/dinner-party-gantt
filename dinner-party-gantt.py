from app import app

app.config.from_object('configurations.DevelopmentConfig')

if(__name__) == '__main__':
  app.run()