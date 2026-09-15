// Cap thread/worker pools BEFORE anything (next, sharp/libvips, libuv) is loaded.
// On shared cPanel/CloudLinux hosts these default to the machine's core count
// (often 32-64), so one request can spawn dozens of threads and blow past the
// nproc limit. Keep them small — this is what stops processes jumping to 40+.
process.env.UV_THREADPOOL_SIZE = process.env.UV_THREADPOOL_SIZE || '2';
process.env.VIPS_CONCURRENCY = process.env.VIPS_CONCURRENCY || '1';
process.env.SHARP_CONCURRENCY = process.env.SHARP_CONCURRENCY || '1';

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Default to production. Only run the heavy dev server when explicitly asked,
// so an unset NODE_ENV on the host does not accidentally start dev mode.
const dev = process.env.NODE_ENV === 'development';
const hostname = 'localhost';
// cPanel/Passenger passes the port via process.env.PORT
const port = process.env.PORT || 3000;

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
