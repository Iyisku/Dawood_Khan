export interface Experience {
  _id?: string;
  id?: string | number;
  role: string;
  company: string;
  description: string;
  date: string;
  techUsed: string;
}

export interface ExperienceResponse {
  data: Experience[];
  message?: string;
}

export interface CreateExperienceRequest extends Omit<Experience, 'id'> {}

export interface UpdateExperienceRequest extends Partial<Experience> {}
