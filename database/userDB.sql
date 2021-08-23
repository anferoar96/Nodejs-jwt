CREATE SCHEMA auth;
GRANT USAGE ON SCHEMA auth TO adminuser;

ALTER DEFAULT PRIVILEGES IN SCHEMA auth GRANT SELECT,INSERT ON  TABLES TO adminuser;

CREATE TABLE auth.users (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	username varchar NOT NULL,
	"password" varchar NOT NULL,
	"createdAt" timestamp NOT NULL,
	"updatedAt" timestamp NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

