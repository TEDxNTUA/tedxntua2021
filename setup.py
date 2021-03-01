'''
Setup script

Usage: pip install .

For development purposes, run: pip install -e .[dev]
'''
from setuptools import setup, find_packages
from _version import __version__

setup(
    name='tedxntua2021',
    version=__version__,
    packages=find_packages(),
    scripts=['manage.py'],
    url='https://github.com/TEDxNTUA/tedxntua2021',
    author='TEDxNTUA IT Team 2021',
    author_email='webmaster@tedxntua.com',
    install_requires=[
        'dj-database-url',
        'Django',
        'mysqlclient',
        'django-versatileimagefield',
        'django-webpack-loader',
        'django-parler',
        'django-extensions',
        'django-active-link',
        # 'django-newsletter'
    ],
    extras_require={
        'dev': [
            'fabric',
            'colorama',
            'decorator',
        ],
    },
    entry_points={
        'console_scripts': [
            'fub = fub.main:program.run',
        ],
    },
)
