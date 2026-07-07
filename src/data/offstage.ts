export interface OffstageFact {
  key: string;
  value: string;
  href?: string;
}

export const facts: OffstageFact[] = [
  { key: 'base',       value: 'Coimbra, Portugal' },
  { key: 'degree',     value: 'Informatics Eng., ISEC' },
  { key: 'languages',  value: 'Portuguese · English' },
  { key: 'instrument', value: 'Classical guitar · voice' },
  { key: 'mode',       value: 'Remote-friendly' },
];
