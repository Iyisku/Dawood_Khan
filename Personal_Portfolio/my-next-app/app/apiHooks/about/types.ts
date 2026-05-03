export interface About {
  _id: string;
  introText: string;
  detailedBio: string;
  createdAt: string;
  updatedAt: string;
}

export interface AboutResponse {
  success: boolean;
  data: About;
  message?: string;
}

export interface UpdateAboutRequest {
  introText?: string;
  detailedBio?: string;
}
