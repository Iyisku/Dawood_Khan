export interface Experience {
  role: string;
  company: string;
  icon: React.ReactNode;
  description: string;
  date: string;
  Techused: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}