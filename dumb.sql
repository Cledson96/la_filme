CREATE TABLE "platform" (
"id" SERIAL PRIMARY KEY,
"name" TEXT NOT NULL
);

CREATE TABLE "genre" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(255) NOT NULL
);

CREATE TABLE "films" (
"id" SERIAL PRIMARY KEY,
"name" TEXT NOT NULL,
"genre_id" INTEGER NOT NULL REFERENCES "genre"("id"),
"platform_id" INTEGER NOT NULL REFERENCES "platform"("id"),
"note" TEXT,
"status" TEXT NOT NULL
);
