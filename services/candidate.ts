import { api } from "./common";

class CandidateService {
  postApplyForm(data: any) {
    return api.post(`${process.env.NEXT_PUBLIC_API_URL}/candidates/apply`, data);
  }
}

export const candidateService = new CandidateService();
