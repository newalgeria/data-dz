import { Provider } from "./DatasetInterface";

export interface ApiData {
  title: string;
  slug: string;
  baseUrl: string;
  description: string;
  availability: number;
  requiresCredits: boolean;
  documentation: string;
  version: string;
  descriptionMD: string;
  documentationMD: string;
  provider: Provider;
}
