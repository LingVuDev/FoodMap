# Food Map

An app that registers restaurants in a database, takes reviews and has some basic routings. 

## Description

A simple fullstack PERN stack application to demonstrate CRUD operations.

Concepts:
* Creating, deleting, editing database entries on a postgres
* Routing
* Frontend components using bootstrap
* Backend with Express

## Getting Started

* Start FE
```
cd ./foodmap-client
npm install
npm start
```

* Restore db
```
psql foodmap < ./foodmap.sql
```

* Start BE
```
cd ./foodmap-be
# Adjust .env file
yarn install
yarn start
```