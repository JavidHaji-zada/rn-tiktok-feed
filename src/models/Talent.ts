export interface Tag {
  id: number;
  slug: string;
  name_en: string;
  name_ar: string;
  order: number;
  featured: number;
  deleted_at?: null;
  type?: null;
}

export interface User {
  id: number;
  avatar_url: string;
  intro_video_url: string;
  intro_video_thumbnail_url: string;
}

export enum TalentStatus {
  active,
  inactive,
}

export interface Talent {
  id: number;
  slug: string;
  category_id: number;
  user_id: number;
  name_en: string;
  name_ar: string;
  bio_en: string;
  bio_ar: string;
  featured: number;
  verified: number;
  status: TalentStatus;
  response_time: number;
  cost: string;
  order: number;
  recommended: number;
  cost_ios: string;
  legend: number;
  zoom_link: null;
  cost_business: string;
  cost_business_ios: string;
  cost_business_enabled: 1;
  cost_message: string;
  cost_message_ios: string;
  chat_enabled: number;
  online: number;
  new: number;
  talent_flag_id: number;
  deleted_at: null;
  disable_apple_fees: number;
  followme_commission: number;
  followme_enabled: number;
  farmer_id: null;
  enable_audio: number;
  business_platform: string;
  same_day_video_delivery_enabled: number;
  country_id: number;
  collection_id: number;
  avatar_url: string;
  converted_cost: string;
  converted_cost_ios: string;
  converted_cost_business: string;
  converted_cost_business_ios: string;
  converted_cost_message: string;
  converted_cost_message_ios: string;
  converted_currency: string;
  talent_status_icon: null;
  market: string;
  support_telephone: string;
  price: null;
  user: User;
  tags: Tag[];
}
