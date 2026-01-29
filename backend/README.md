Backend scaffold (NestJS + Prisma)

Quick start (local):

1. Copy `.env.example` to `.env` and adjust `DATABASE_URL`.
2. npm install
3. npx prisma generate
4. npx prisma migrate dev --name init
5. npm run start:dev

Swagger UI: http://localhost:3000/api/docs

Run tests (placeholder):

```bash
npm install
npm run test
```
