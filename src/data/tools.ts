export interface Tool {
  name: string;        // repo name, rendered as ./name
  tagline: string;     // one line on what it does and why it exists
  repo: string;        // GitHub repo URL
  url?: string;        // live URL, omit while it's still cooking
  status: 'live' | 'wip';
}

// Each tool lives in its own public repo with GitHub Pages enabled.
// Because this site's CNAME is cpinho.com, a repo named <tool> is
// served at https://cpinho.com/<tool>/ automatically, remember to
// set the tool's base path to /<tool>/ so its assets resolve.
// The section hides itself while this array is empty.
export const tools: Tool[] = [
  {
    name: 'edp-dynamic-billing-viewer',
    tagline: 'Drop your EDP XLSX reports, get a full dashboard of consumption, cost, and market-price patterns. All in-browser, nothing uploaded.',
    repo: 'https://github.com/kech37/edp-dynamic-billing-viewer',
    url: 'https://cpinho.com/edp-dynamic-billing-viewer/',
    status: 'live',
  },
  {
    name: 'aguas-coimbra-reports-viewer',
    tagline: 'Drop your Águas de Coimbra hourly CSV exports, get a dashboard of water usage patterns, day profiles, and month comparisons. Nothing leaves your browser.',
    repo: 'https://github.com/kech37/aguas-coimbra-reports-viewer',
    url: 'https://cpinho.com/aguas-coimbra-reports-viewer/',
    status: 'live',
  },
];
