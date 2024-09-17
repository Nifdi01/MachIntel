CREATE TABLE IF NOT EXISTS "Company" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(25) NOT NULL UNIQUE,
	"email_domain" varchar(15) NOT NULL UNIQUE,
	"description" varchar(150) NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "User" (
	"id" serial NOT NULL UNIQUE,
	"name" varchar(20) NOT NULL,
	"surname" varchar(20) NOT NULL,
	"company" bigint NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"role" bigint NOT NULL DEFAULT '1',
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "role" (
	"id" serial NOT NULL UNIQUE,
	"role" varchar(15) NOT NULL UNIQUE,
	PRIMARY KEY ("id")
);


ALTER TABLE "User" ADD CONSTRAINT "User_fk3" FOREIGN KEY ("company") REFERENCES "Company"("id");

ALTER TABLE "User" ADD CONSTRAINT "User_fk5" FOREIGN KEY ("role") REFERENCES "role"("id");
