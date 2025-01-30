export interface MetaDataItem {
  title: string;
  tabtitle: string;
  description: string;
  lastUpdated: string;
  topic: string;
  keywords: string[];
}

export interface MetadataCollection {
  [key: string]: MetaDataItem;
}
