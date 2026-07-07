export interface CareerEntry {
  hash: string;
  date: string;
  isHead: boolean;
  message: string;
  org: string;
  body: string;
}

export const career: CareerEntry[] = [
  {
    hash: 'f2026a1',
    date: 'Feb 2026',
    isHead: true,
    message: 'feat: join Intermedia Intelligent Communications',
    org: 'Senior Software Engineer · Remote',
    body: 'Working in C# and .NET on a cloud communications platform used by businesses around the world.',
  },
  {
    hash: 'e8a2025',
    date: 'Aug 2025',
    isHead: false,
    message: 'promote: Lead Software Developer',
    org: 'Imaginary Cloud · Coimbra, remote',
    body: 'Ran a client project end to end — turning business requirements into technical plans, keeping the backlog in shape, and steering the team through a few hairy production moments.',
  },
  {
    hash: 'd1c2024',
    date: 'Jan 2024',
    isHead: false,
    message: 'feat: move to product consultancy',
    org: 'Senior Software Developer · Imaginary Cloud',
    body: 'Architecture for new projects and growth-stage products. Built an integration layer that quietly automated workflows across a bunch of internal systems.',
  },
  {
    hash: 'b7e2022',
    date: 'Jan 2022',
    isHead: false,
    message: 'feat: backend microservices for blockchain project',
    org: 'Software Engineer · WIT Software, Coimbra',
    body: 'Node.js microservices at scale, lots of cross-team work, and a first real seat at the table for architecture decisions.',
  },
  {
    hash: 'a3f2019',
    date: 'Aug 2019',
    isHead: false,
    message: 'init: first full-time engineering role',
    org: 'Software Developer · WIT Software',
    body: "Shipped an Apple TV app in React Native and a serverless AWS backend for real-time mobile data — right after an internship building an automated personalized-video pipeline.",
  },
  {
    hash: '0012015',
    date: '2015',
    isHead: false,
    message: 'initial commit',
    org: 'IT Technician · INOPRINT, Coimbra',
    body: "Where it started: assembling printers by day, building the company's website with PHP and jQuery by... also day. Everyone starts somewhere.",
  },
];
