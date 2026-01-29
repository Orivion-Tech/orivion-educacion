Cleanup plan for `frontend` folder

What this will remove (if present):
- Top-level duplicates: `package.json`, `Dockerfile`, `server.ts`, `tailwind.config.js`
- Top-level `src/` (duplicate small app)
- Build artifacts and heavy folders inside `frontend/app`: `.angular/`, `dist/`, `node_modules/`
- Nested git folder `frontend/app/.git` (remove nested repo to avoid conflicts)

How to run:

PowerShell (from `frontend` directory):

```powershell
.\clean-frontend.ps1
```

Notes:
- The script is idempotent and will skip missing items.
- Files are removed permanently; review the list before running.
- After cleanup, keep `frontend/app/` as the canonical Angular project.
