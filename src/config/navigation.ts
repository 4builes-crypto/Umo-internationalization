import { Building2, BookMarked, TrendingUp, Users, Scale, Globe, Ship, Landmark } from 'lucide-react';
import type { NavCategory } from '../types/navigation';

export const NAVIGATION_DATA: NavCategory[] = [
  {
    id: 'fase1',
    label: 'Mapeo Inicial De La Empresa',
    icon: Building2,
    subcategories: [
      { id: 'identity', label: 'Identidad Corporativa y Descripción Del Producto', path: '/' },
      { id: 'bmc', label: 'Business Model Canvas', path: '/bmc' },
      { id: 'potencial', label: 'Diagnóstico De Potencialidades', path: '/potential' },
      { id: 'dofa', label: 'Análisis DOFA', path: '/dofa' },
      { id: 'sostenibilidad', label: 'Dimensiones De Sostenibilidad', path: '/sustainability' },
      { id: 'viabilidad', label: 'Análisis De Viabilidad', path: '/viability' },
      { id: 'smart', label: 'Objetivo SMART', path: '/smart-objective' },
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
    id: 'social_cultural',
    label: 'Social - Cultural',
    icon: Users,
    subcategories: [
      { id: 'social_cultural_sub', label: 'Análisis Social y Cultural', path: '/social-cultural' },
    ]
  },
  {
    id: 'political_legal',
    label: 'Político - Legal',
    icon: Scale,
    subcategories: [
      { id: 'political_legal_sub', label: 'Análisis Político y Legal', path: '/political-legal' },
    ]
  },
  {
    id: 'tech_environmental',
    label: 'Tecnológico - Geoambiental',
    icon: Globe,
    subcategories: [
      { id: 'tech_environmental_sub', label: 'Análisis Tecnológico y Geoambiental', path: '/tech-environmental' },
    ]
  },
  {
    id: 'international_trade',
    label: 'Comercio Internacional',
    icon: Ship,
    subcategories: [
      { id: 'international_trade_sub', label: 'Acuerdos y Comercio', path: '/international-trade' },
    ]
  },
  {
    id: 'foreign_investment',
    label: 'Inversión Extranjera',
    icon: Landmark,
    subcategories: [
      { id: 'foreign_investment_sub', label: 'Análisis de Inversión', path: '/foreign-investment' },
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
