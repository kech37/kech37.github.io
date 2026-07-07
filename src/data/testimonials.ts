export interface Testimonial {
  quote: string;
  name: string;
  linkedinUrl: string;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'He is an absolute asset to any engineering team - not just for his individual output, but because he raises the standard for everyone around him.',
    name: 'João Cunha',
    linkedinUrl: 'https://www.linkedin.com/in/jcunha/',
    relationship: 'Senior Project Manager, managed Carlos directly',
  },
  {
    quote: "His pragmatism, transparency, and adaptability were absolute crucial of the project's success.",
    name: 'João Santos',
    linkedinUrl: 'https://www.linkedin.com/in/joaorafaelsantos/',
    relationship: 'Tech Lead, worked with Carlos on the same team',
  },
  {
    quote: 'That combination of technical curiosity and intellectual humility creates an environment where everyone feels comfortable contributing.',
    name: 'João Nabais',
    linkedinUrl: 'https://www.linkedin.com/in/jpnabais/',
    relationship: 'Software Developer, reported to Carlos directly',
  },
];
