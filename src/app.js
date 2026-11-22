/**
 * The fixture's HTTP routes, with no dependency but Node itself:
 * - `GET /` shows the workshop's page;
 * - `GET /health` answers `ok`, so that a preview knows the app is up.
 * Any other path answers 404.
 *
 * The bench's scripted agent edits the footer line below: keep it exactly as it is.
 */

const PAGE = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Atelier du banc</title>
  </head>
  <body>
    <main>
      <h1>Atelier du banc</h1>
      <p>Réparations de vélos, du mardi au samedi.</p>
    </main>
    <footer></footer>
  </body>
</html>
`;

/** Answers one request: the page, the health probe, or 404. */
export function handle(request, response) {
  const { pathname } = new URL(request.url, 'http://localhost');
  if (request.method === 'GET' && pathname === '/') {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    response.end(PAGE);
    return;
  }
  if (request.method === 'GET' && pathname === '/health') {
    response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('ok');
    return;
  }
  response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
  response.end('Not found');
}
