export interface NavItem {
  label: string;
  path: string;
}

export interface Course {
  id: string;
  title: string;
  stream: 'Science' | 'Commerce';
  description: string;
  subjects: string[];
  icon: React.ReactNode;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FacultyMember {
  name: string;
  role: string;
  qualification: string;
  image: string;
}