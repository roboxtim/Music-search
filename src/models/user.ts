export interface IUserResponse {
  user: User
}

export interface User {
  _type: string
  about_me: AboutMe
  about_me_summary: string
  annotations_count: number
  api_path: string
  avatar: Avatar
  channel_iqs: any[] // eslint-disable-line
  custom_header_image_url: string
  followed_users_count: number
  followers_count: number
  header_image_url: string
  human_readable_role_for_display: string
  id: number
  iq: number
  iq_for_display: string
  is_meme_verified: boolean
  is_verified: boolean
  login: string
  name: string
  photo_url: string
  pusher_channel: string
  role_for_display: string
  roles_for_display: string[]
  tracking_paths: TrackingPaths
  url: string
  current_user_metadata: CurrentUserMetadata
  artist: Artist
  stats: Stats
}

export interface AboutMe {
  html: string
}

export interface Avatar {
  tiny: Tiny
  thumb: Thumb
  small: Small
  medium: Medium
}

export interface Tiny {
  url: string
  bounding_box: BoundingBox
}

export interface BoundingBox {
  width: number
  height: number
}

export interface Thumb {
  url: string
  bounding_box: BoundingBox2
}

export interface BoundingBox2 {
  width: number
  height: number
}

export interface Small {
  url: string
  bounding_box: BoundingBox3
}

export interface BoundingBox3 {
  width: number
  height: number
}

export interface Medium {
  url: string
  bounding_box: BoundingBox4
}

export interface BoundingBox4 {
  width: number
  height: number
}

export interface TrackingPaths {
  aggregate: string
}

export interface CurrentUserMetadata {
  permissions: any[]// eslint-disable-line
  excluded_permissions: string[]
  interactions: Interactions
  features: any[]// eslint-disable-line
}

export interface Interactions {
  following: boolean
}

export interface Artist {
  _type: string
  api_path: string
  header_image_url: string
  id: number
  image_url: string
  index_character: string
  is_meme_verified: boolean
  is_verified: boolean
  name: string
  slug: string
  url: string
  iq: number
}

export interface Stats {
  annotations_count: number
  answers_count: number
  comments_count: number
  forum_posts_count: number
  pyongs_count: number
  questions_count: number
  transcriptions_count: number
}
