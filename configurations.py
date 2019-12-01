class BaseConfig(object):
  # Base config  class
  DEBUG = True
  TESTING = False

class ProductionConfig(BaseConfig):
  # Production config
  DEBUG = False

class DevelopmentConfig(BaseConfig):
  # Dev config
  DEBUG = True
  TESTING = True