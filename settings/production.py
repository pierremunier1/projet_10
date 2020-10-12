from . import *
from sentry_sdk.integrations.django import DjangoIntegration



env = environ.Env()
environ.Env.read_env()

SECRET_KEY = env('SECRET_KEY')

DEBUG = False
ALLOWED_HOSTS = ['46.101.144.128']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DATABASE_NAME'),
        'USER': env('DATABASE_USER'),
        'PASSWORD': env('DATABASE_PASSWORD'),
        'HOST': env('DATABASE_HOST'),

    }

}


sentry_sdk.init(
    dsn="https://0be142136868429ebf5e7a2d64b51734@o459278.ingest.sentry.io/5458159",
    integrations=[DjangoIntegration()],
    traces_sample_rate=1.0,

    # If you wish to associate users to errors (assuming you are using
    # django.contrib.auth) you may enable sending PII data.
    send_default_pii=True
)

