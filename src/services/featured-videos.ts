import { ENVIRONMENT } from '@environment/environment';
import { Product } from '@models/Product';
import axios from './axios';

const endpoint = `${ENVIRONMENT.API_URL}/featured-videos`;

class FeaturedVideoService {
  /**
   * @param page - The page number to retrieve.
   * @param per_page - The number of items to retrieve per page.
   * @returns
   */
  async getFeaturedVideos(page: number, per_page: number): Promise<Product[]> {

    try {
      const response = await axios.get(endpoint, {
        params: { page, per_page, app: 1, new: 1 },
      });
      return response.data.data;
    } catch (error) {
      console.log({ error });
      // todo: do something with request error, e.g log it via loggin service
      throw error;
    }
  }
}

export default new FeaturedVideoService();
