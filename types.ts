
export interface ServiceTier {
  name: string;
  price: number;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  tiers: [ServiceTier, ServiceTier, ServiceTier]; // Basic, Enhanced, Maximum
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  selectionMode?: 'single' | 'multi';
  items: ServiceItem[];
}

// Map Category ID -> Item ID -> Selected Tier Index (0, 1, or 2)
export type EstimateSelection = Record<string, Record<string, number>>;

export interface InvoiceDetails {
  clientName: string;
  clientEmail: string;
  projectNotes: string;
  date: string;
  invoiceId: string;
}
