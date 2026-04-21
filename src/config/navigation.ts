import { Building2, BookMarked, TrendingUp } from 'lucide-react';
import type { NavCategory } from '../types/navigation';

export const NAVIGATION_DATA: NavCategory[] = [
  {
    id: 'fase1',
    label: 'Mapeo Inicial De La Empresa',
    icon: Building2,
    subcategories: [
      { id: 'empresa', label: '1. Resumen De La Empresa (UMO)', path: '/' },
      { id: 'bmc', label: '2. Descripción Del Bien Y Business Model Canvas', path: '/bmc' },
      { id: 'potencial', label: '3. Diagnóstico De Potencialidades', path: '/potential' },
      { id: 'dofa', label: '4. Análisis DOFA', path: '/dofa' },
      { id: 'sostenibilidad', label: '5. Dimensiones De Sostenibilidad', path: '/sustainability' },
      { id: 'viabilidad', label: '6. Análisis De Viabilidad', path: '/viability' },
      { id: 'smart', label: '7. Objetivo SMART', path: '/smart-objective' },
    ]
  },
  {
    id: 'panorama',
    label: 'Panorama Económico',
    icon: TrendingUp,
    subcategories: [
      { id: 'economics', label: 'Análisis Macroeconómico', path: '/economics' },
    ]
  },
  {
    id: 'referencias',
    label: 'Referencias Y Fuentes',
    icon: BookMarked,
    subcategories: [
      { id: 'bibliography', label: 'Bibliografías', path: '/bibliography' },
    ]
  }
];
