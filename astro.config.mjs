import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cpinho.com',
  output: 'static',
  server: {
    // honor the port assigned by tooling (e.g. Claude Code preview autoPort)
    port: process.env.PORT ? Number(process.env.PORT) : 4321,
  },
});
