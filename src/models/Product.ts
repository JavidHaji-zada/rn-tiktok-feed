import { Talent } from './Talent';

export enum ProductStatus {
  public,
  private,
}

export interface FeedOccasion {
  id: 4;
  title_en: string;
  title_ar: string;
  image_emojy: string;
  description_en: string;
  description_ar: string;
  type: string;
  order: 2;
  created_at: string;
  updated_at: string;
  image_url: string;
}

export interface Product {
  id: number
  talent_id: number
  customer_id: number
  order_id: number
  from: string;
  to: string;
  status: ProductStatus;
  created_at: string;
  updated_at: string;
  featured: number
  deleted_at: null;
  occasion_id: number
  url: string;
  thumbnail: string;
  is_business: number
  talent: Talent;
  occasion: FeedOccasion;
  duration: number;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
}
