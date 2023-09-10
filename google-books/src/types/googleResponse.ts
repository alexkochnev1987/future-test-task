export interface VolumeInfo {
  imageLinks: { thumbnail: string; smallThumbnail: string };
  allowAnonLogging: boolean;
  authors: string[];
  categories: string[];
  description: string;
  canonicalVolumeLink: string;
  contentVersion: string;
  industryIdentifiers: { identifier: string; type: string }[];
  infoLink: string;
  language: string;
  maturityRating: string;
  panelizationSummary: { containsEpubBubbles: boolean; containsImageBubbles: boolean };
  previewLink: string;
  publishedDate: string;
  readingModes: { text: boolean; image: boolean };
  subtitle: string;
  title: string;
}

export interface ResponseItem {
  accessInfo: Record<string, unknown>;
  etag: string;
  id: string;
  kind: string;
  saleInfo: { country: string; saleability: string; isEbook: boolean };
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface GoogleResponse {
  kind: string;
  totalItems: number;
  items: ResponseItem[];
}
