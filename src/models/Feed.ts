import {Talent} from './Talent';

export enum FeedStatus {
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

export interface Video {
  id: 823;
  talent_id: 20;
  customer_id: 41251;
  order_id: 103003;
  from: string;
  to: string;
  status: FeedStatus;
  created_at: string;
  updated_at: string;
  featured: 1;
  deleted_at: null;
  occasion_id: 4;
  url: string;
  thumbnail: string;
  is_business: 0;
  talent: Talent;
  occasiong: FeedOccasion;
}
