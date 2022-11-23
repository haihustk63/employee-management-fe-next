import { api } from "./common";

class PositionService {
  async getAllPositions() {
    return await api.get(`${process.env.NEXT_PUBLIC_API_URL}/positions`);
  }
}

export const positionService = new PositionService();
