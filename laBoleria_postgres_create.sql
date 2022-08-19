CREATE TABLE "public.orders" (
	"id" serial NOT NULL,
	"clientId" integer NOT NULL,
	"cakeId" integer NOT NULL,
	"quantity" integer NOT NULL,
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'LOCALTIMESTAMP(0)',
	"totalPrice" numeric NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.clients" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"address" TEXT NOT NULL,
	"phone" TEXT NOT NULL,
	CONSTRAINT "clients_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.cakes" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL,
	"price" numeric NOT NULL,
	"image" TEXT NOT NULL,
	"description" TEXT NOT NULL DEFAULT '""',
	CONSTRAINT "cakes_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("clientId") REFERENCES "clients"("id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("cakeId") REFERENCES "cakes"("id");






