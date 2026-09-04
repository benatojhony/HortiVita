import { spawn } from 'node:child_process';
import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const routes = ['', 'sobre', 'como-funciona', 'modelos', 'projetos', 'recursos', 'contato'];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/HortiVita';
const origin = 'http://127.0.0.1:8787';
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';

const server = spawn(
  pnpm,
  ['exec', 'wrangler', 'dev', '--config', 'dist/server/wrangler.json', '--port', '8787'],
  { stdio: ['ignore', 'pipe', 'pipe'], env: process.env, shell: process.platform === 'win32' },
);

let serverLog = '';
server.stdout.on('data', (chunk) => { serverLog += chunk.toString(); });
server.stderr.on('data', (chunk) => { serverLog += chunk.toString(); });

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`${origin}${basePath}/`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`A prévia não iniciou a tempo.\n${serverLog}`);
}

try {
  await waitForServer();
  for (const route of routes) {
    const url = `${origin}${basePath}/${route ? `${route}/` : ''}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Falha ao gerar ${url}: HTTP ${response.status}`);
    const html = await response.text();
    const directory = route ? path.join('dist', 'client', route) : path.join('dist', 'client');
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html, 'utf8');
  }
  await writeFile(path.join('dist', 'client', '.nojekyll'), '', 'utf8');
  await copyFile(path.join('dist', 'client', 'index.html'), path.join('dist', 'client', '404.html'));
  console.log(`Site estático gerado com ${routes.length} páginas.`);
} finally {
  server.kill('SIGTERM');
}
