import { api } from "./common";

class JobService {
  async getAllJobs(params?: any) {
    return await api.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs`, params);
  }

  async getJobById(jobId: string) {
    return await api.get(`${process.env.NEXT_PUBLIC_API_URL}/jobs/${jobId}`);
  }
}

export const jobService = new JobService();
