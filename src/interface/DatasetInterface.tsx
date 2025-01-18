export interface FileInfo {
  size: string;
  records: number;
  lastUpdate: string;
  format: string;
}

export interface Provider {
  name: string;
  contact: string;
  logo?: string;
}

export interface Preview {
  id: number;
  [key: string]: any;
}

export interface Dataset {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  downloads: number;
  views: number;
  price: number;
  category: string;
  descriptionMD: string;
  fileInfo: FileInfo;
  provider: Provider;
  relatedApi: string;
  preview: Preview[];
}
