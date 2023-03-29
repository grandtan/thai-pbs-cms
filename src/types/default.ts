export interface SearchByNameRespone {
  clip_id: number;
}

export interface MetadataAssetsRespone {
  asset: Asset;
  capture: Capture;
  clip_id: number;
  display_aspect_ratio: string;
  display_filesize: string;
  display_filetype: string;
  display_frame_rate: string;
  display_name: string;
  display_standard: string;
  display_video_codec: string;
  display_video_size: string;
  has_audio: boolean;
  has_data: boolean;
  has_index_file: boolean;
  has_video: boolean;
  is_recording: boolean;
  metadata: Metadata;
  proxy_filename: string;
  proxy_has_index_file: boolean;
  proxy_id: number;
  proxy_path: string;
  status_flags: string[];
  status_text: string;
  video: Video[];
}

export interface Asset {
  asset_id: number;
  asset_type: number;
  asset_type_id: number;
  asset_type_text: string;
  asset_version: number;
  comment: string;
  custom: Custom;
  customtypes: Customtypes;
  last_modified: string;
  nle_id: string;
  origin_site: OriginSite;
  revision: number;
  thumbnail: string;
  thumbnail_path: string;
  uuid: string;
}

export interface Custom {
  field_1: string;
  field_10: string;
  field_11: string;
  field_12: string;
  field_13: boolean;
  field_14: string;
  field_15: string;
  field_16: boolean;
  field_17: boolean;
  field_18: boolean;
  field_19: string;
  field_2: string;
  field_20: boolean;
  field_22: string;
  field_23: string;
  field_24: boolean;
  field_26: string;
  field_27: boolean;
  field_3: string;
  field_33: string;
  field_4: string;
  field_41: boolean;
  field_45: boolean;
  field_5: string;
  field_50: boolean;
  field_7: boolean;
  field_8: string;
  field_9: string;
}

export interface Customtypes {
  field_1: string;
  field_10: string;
  field_11: string;
  field_12: string;
  field_13: string;
  field_14: string;
  field_15: string;
  field_16: string;
  field_17: string;
  field_18: string;
  field_19: string;
  field_2: string;
  field_20: string;
  field_22: string;
  field_23: string;
  field_24: string;
  field_26: string;
  field_27: string;
  field_3: string;
  field_33: string;
  field_4: string;
  field_41: string;
  field_45: string;
  field_5: string;
  field_50: string;
  field_7: string;
  field_8: string;
  field_9: string;
}

export interface OriginSite {
  hostname: string;
  is_local: boolean;
  label: string;
  name: string;
  site_id: number;
  uuid: string;
}

export interface Capture {
  capture_id: number;
  chunk_group_id: number;
  chunk_group_index: number;
  chunk_group_uuid: string;
  project: string;
  recording_id: string;
  source: string;
  tape: string;
}

export interface Metadata {
  captured: string;
  clip_name: string;
  clip_name_with_extension: string;
  metadata_id: number;
  metadata_uuid: string;
  modified: string;
  scene: string;
  take: string;
  timecode_end: string;
  timecode_in: any;
  timecode_out: any;
  timecode_start: string;
}

export interface Video {
  aspect_ratio: string;
  channel: number;
  clip_id: number;
  data_rate: number;
  dominance: string;
  encoding_id: number;
  essence_id: number;
  file: File;
  file_id: number;
  fourcc: string;
  frame_rate: string;
  gop_length: number;
  height: number;
  is_image_sequence: boolean;
  timecode_duration: string;
  timecode_end: string;
  timecode_start: string;
  track: number;
  video_codec: string;
  width: number;
}

export interface File {
  display_filesize: string;
  display_filetype: string;
  display_name: string;
  file: File2;
  locations: Location[];
  status_flags: string[];
  status_text: string;
}

export interface File2 {
  created: string;
  file_id: number;
  filesize: number;
  hash: string;
  is_placeholder: boolean;
  modified: string;
  type: string;
}

export interface Location {
  archive: boolean;
  file_id: number;
  media_space_location_id: number;
  media_space_name: string;
  media_space_uuid: string;
  userpath: string;
}

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
