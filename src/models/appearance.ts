export interface IGetAppearanceResponse {
  meta: Meta
  response: Response
}

export interface Meta {
  status: number
}

export interface Response {
  album_appearances: AlbumAppearance[]
  next_page: any //eslint-disable-line
}

export interface AlbumAppearance {
  _type: string
  id: number
  track_number: number
  song: Song
}

export interface Song {
  _type: string
  annotation_count: number
  api_path: string
  artist_names: string
  description_preview: string
  full_title: string
  has_verified_artists: boolean
  header_image_thumbnail_url: string
  header_image_url: string
  id: number
  instrumental: boolean
  lyrics_owner_id: number
  lyrics_state: string
  lyrics_updated_at: number
  path: string
  pyongs_count?: number
  release_date_components: ReleaseDateComponents
  song_art_image_thumbnail_url: string
  song_art_image_url: string
  stats: Stats
  title: string
  title_with_featured: string
  updated_by_human_at: number
  url: string
  current_user_metadata: CurrentUserMetadata
  featured_artists: FeaturedArtist[]
  primary_artist: PrimaryArtist
  producer_artists: ProducerArtist[]
  writer_artists: WriterArtist[]
}

export interface ReleaseDateComponents {
  year: number
  month: number
  day: number
}

export interface Stats {
  unreviewed_annotations: number
  hot: boolean
  pageviews?: number
}

export interface CurrentUserMetadata {
  permissions: string[]
  excluded_permissions: string[]
  iq_by_action: IqByAction
}

export interface IqByAction {}

export interface FeaturedArtist {
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
  iq?: number
}

export interface PrimaryArtist {
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
  iq?: number
}

export interface ProducerArtist {
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
  iq?: number
}

export interface WriterArtist {
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
  iq?: number
}
