export interface Project {
  _id?: string;
  id?: string | number;
  title: string;
  description: string;
  image?: string;
  link: string;
  status?: 'Active' | 'Completed' | 'In Progress' | 'Archived';
}

export interface ProjectsResponse {
  data: Project[];
  message?: string;
}

export interface CreateProjectRequest extends Omit<Project, 'id'> {}

export interface UpdateProjectRequest extends Partial<Project> {}
