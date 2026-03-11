export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  playstoreLink?: string;
  appstoreLink?: string;
  liveUrl?: string;
  featured?: boolean;
  contributions?: string[];
  screenshots?: string[]     // URLs of images/screenshots
}