export interface Landing {
  _id: string;
  name: string;
  rolePart1: string;
  rolePart2: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface LandingResponse {
  success: boolean;
  data: Landing;
  message?: string;
}

export interface UpdateLandingRequest {
  name?: string;
  rolePart1?: string;
  rolePart2?: string;
  description?: string;
}
