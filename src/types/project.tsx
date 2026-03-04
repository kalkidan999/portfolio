export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  contributions?: string[];
}