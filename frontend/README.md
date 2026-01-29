Frontend scaffold (Angular Universal + Tailwind)

Notes:
- This folder contains a minimal placeholder for Angular Universal.
- Use `ng new` with `--universal` to scaffold the full app, then copy the `server.ts`, `tailwind.config.js`, and adjust scripts.

Suggested commands to create full app:

```bash
npx @angular/cli new educacion-frontend --routing --style=scss
cd educacion-frontend
ng add @nguniversal/express-engine
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
