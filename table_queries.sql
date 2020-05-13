-- CREATE DATABASE CALLED pet_hotel and run the following queries

CREATE TABLE "pets" (
	"id" serial PRIMARY KEY,
	"name" VARCHAR(280) NOT NULL,
	"breed" VARCHAR(280) NOT NULL,
	"color" VARCHAR(280) NOT NULL,
	"checked_in" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "owners" (
    "id" serial PRIMARY KEY,
    "name" VARCHAR(280),
	"pet_id" INTEGER REFERENCES "pets"
);