export interface StackCell {
  label: string;
  prose: string;
}

export const stack: StackCell[] = [
  {
    label: 'core',
    prose: 'C# · .NET — the current daily drivers. TypeScript · Node.js before that, since 2019.',
  },
  {
    label: 'data',
    prose: 'PostgreSQL · Redis · MySQL. Schema design to query tuning.',
  },
  {
    label: 'infra',
    prose: 'AWS · serverless · Docker · microservices. Systems that stay up.',
  },
  {
    label: 'practice',
    prose: 'Solution architecture · code review · mentoring · leading teams through ambiguity.',
  },
];
