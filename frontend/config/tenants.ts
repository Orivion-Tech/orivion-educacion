export type TenantConfig = {
  id: string;
  slug: string;
  name: string;
  logo: string;
  modules: string[];
  theme: {
    brand: Record<string, string>;
    surface?: Record<string, string>;
    text?: Record<string, string>;
  };
};

export const TENANTS: TenantConfig[] = [
  {
    id: 'demo-aurora',
    slug: 'aurora',
    name: 'Instituto Aurora',
    logo: '/brand/aurora.svg',
    modules: ['academics', 'ai', 'reports', 'consent'],
    theme: {
      brand: {
        '50': '196 100% 96%',
        '100': '196 100% 90%',
        '200': '196 90% 80%',
        '300': '196 85% 70%',
        '400': '196 80% 60%',
        '500': '196 75% 48%',
        '600': '196 80% 42%',
        '700': '196 85% 36%',
        '800': '196 80% 28%',
        '900': '196 75% 20%'
      }
    }
  },
  {
    id: 'demo-origen',
    slug: 'origen',
    name: 'Colegio Origen',
    logo: '/brand/origen.svg',
    modules: ['academics', 'ai', 'reports', 'guardians'],
    theme: {
      brand: {
        '50': '25 100% 96%',
        '100': '25 95% 90%',
        '200': '25 90% 82%',
        '300': '25 85% 72%',
        '400': '25 80% 60%',
        '500': '25 85% 52%',
        '600': '25 85% 45%',
        '700': '25 85% 38%',
        '800': '25 80% 30%',
        '900': '25 75% 22%'
      }
    }
  }
];

export const DEFAULT_TENANT = TENANTS[0];
