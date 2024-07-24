# [Movie Review 2.0](https://sasuke-uchiha12.github.io/Movie-Review---Sentiment-Analysis/)

Welcome to the Movie Review 2.0 project! This project is a web application for reviewing movies, featuring sentiment analysis on user comments and reviews.

**[View the live project here!](https://sasuke-uchiha12.github.io/Movie-Review---Sentiment-Analysis/)**

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Sentiment Analysis](#sentiment-analysis)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

Movie Review 2.0 is a web application where users can read and write reviews for movies. The application includes sentiment analysis that sorts reviews from good to bad based on user comments. 

## Features

- Review and comment on movies
- Sentiment analysis on reviews and comments
- Responsive design for mobile and desktop
- Dynamic routing and 404 error handling

## Sentiment Analysis
The sentiment analysis feature in this project processes user comments and reviews to determine their sentiment, sorting reviews from good to bad. This is achieved using the TextBlob library in Python. The backend Flask server handles the sentiment analysis and returns the sentiment score to the frontend, which then dynamically sorts the reviews.

## Technologies Used
- React, React Router, Sass
- Python, Flask
- MongoBD
- GitHub Pages
- TextBlob for sentiment analysis
