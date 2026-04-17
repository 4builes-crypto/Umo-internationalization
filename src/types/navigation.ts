import type { LucideIcon } from 'lucide-react';

export interface SubCategory {
  id: string;
  label: string;
  path: string;
  isDraft?: boolean;
}

export interface NavCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  subcategories: SubCategory[];
}
