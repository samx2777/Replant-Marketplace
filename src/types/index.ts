export interface NFT {
  id: string;
  botanicalName: string;
  commonName: string;
  carbonBiomass: number;
  carbonValue: number;
  uid: string;
  price: number;
  image: string;
  iucnStatus?: string;
  native?: boolean;
  country?: string;
  location?: string;
  captureDate?: string;
  sponsoredBy?: string;
  nftCollection?: string;
  plantingOrganisation?: string;
  plantingCost?: number;
  todaysValue?: number;
}

export interface Sponsor {
  id: string;
  name: string;
  type: 'Company' | 'Individual';
  sponsorLevel: string;
  location: string;
  joinedDate: string;
  sponsoredTreeValue: number;
  nftOwned: number;
  carbonValue: number;
  nftSold: number;
  avatar?: string;
}

export interface Planter {
  id: string;
  name: string;
  type: 'Community/Organisation';
  verified: boolean;
  location: string;
  joinedDate: string;
  treesPlanted: number;
  nftSold: number;
  planters: number;
  nftForSale: number;
  avatar?: string;
}

export interface TopPlanter {
  id: string;
  name: string;
  type: 'Company' | 'Community/Organisation';
  treesPlanted: number;
  percentage: number;
  rank: number;
  avatar?: string;
}
