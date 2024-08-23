CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL,
	"title" varchar(255) NOT NULL,
	"created_on" timestamp DEFAULT now(),
	"updated_on" timestamp NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(55) NOT NULL,
	"email" varchar(255) NOT NULL,
	"registered_on" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
