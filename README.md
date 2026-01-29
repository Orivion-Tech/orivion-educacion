# How to Run the Database

This project includes a Docker Compose configuration to easily spin up a PostgreSQL database seeded with the Education System schema.

## Prerequisites

-   [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running.

## Starting the Database

Run the following command in your terminal:

```bash
docker-compose up -d
```

## What happens?

1.  Downloads the `postgres:15-alpine` image.
2.  Starts a container named `education_core_db`.
3.  **Automatically executes** `database/01_init.sql` to create all tables (only on the first run).
4.  Exposes port `5432`.

## Connection Details

-   **Host**: `localhost`
-   **Port**: `5432`
-   **User**: `admin`
-   **Password**: `securepassword123`
-   **Database**: `education_system`

## Stopping

```bash
docker-compose down
```
