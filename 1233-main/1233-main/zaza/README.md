Local dev: static site + json-server

From PowerShell in the `My_first_website` folder run either option A or B:

Option A — single-command (requires Node.js installed):

```powershell
npm run dev
```

Option B — run servers in two shells (no installs required beyond Node):

Shell 1 (static):

```powershell
npx http-server -c-1 . -p 8080
```

Shell 2 (API):

```powershell
npx json-server --watch db.json --port 3000
```

Open http://localhost:8080 to view the site and http://localhost:3000/products for the API.
