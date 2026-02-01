export interface Job {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  details?: string;
  year?: string;
}

export interface Skill {
  name: string;
  category: 'Technical' | 'Core' | 'Certification';
  level: number; // 0-100 for chart
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
