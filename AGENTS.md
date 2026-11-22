# AGENTS.md

This repository is a test fixture of KAEIDOS's bench (the frontend's ADR-FE-0021). A scripted
agent changes it, never a person's agent; it holds no real data.

- `src/app.js` answers `/` and `/health`. The footer line is what the scripted agent edits.
- `server.js` starts the app on port 3000.
- `test/` holds the tests, run with Node's own test runner.

## Rules

1. Node 24 and its standard library only. Add no dependency.
2. Run `npm test` and `npm run lint` before you finish: both must pass.
3. The page's text is in French. Code and comments are in English.
4. Never change `.github/workflows/` or `.kaeidos/`: a person reviews those.
5. `main` starts each bench run at the commit the bench expects: change it only with the bench.
