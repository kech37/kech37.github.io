export interface Tool {
  name: string;        // repo name — rendered as ./name
  tagline: string;     // one line on what it does and why it exists
  repo: string;        // GitHub repo URL
  url?: string;        // live URL — omit while it's still cooking
  status: 'live' | 'wip';
}

// Each tool lives in its own public repo with GitHub Pages enabled.
// Because this site's CNAME is cpinho.com, a repo named <tool> is
// served at https://cpinho.com/<tool>/ automatically — remember to
// set the tool's base path to /<tool>/ so its assets resolve.
// The section hides itself while this array is empty.
export const tools: Tool[] = [
  // {
  //   name: 'example-tool',
  //   tagline: 'One line about what it does and why it exists.',
  //   repo: 'https://github.com/kech37/example-tool',
  //   url: 'https://cpinho.com/example-tool/',
  //   status: 'live',
  // },
];
