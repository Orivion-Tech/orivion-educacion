export interface Tenant {
  id: string;
  name: string;
  theme: {
    primary: string;
    logo: string;
  };
  featureFlags: string[];
  enabledModules: string[];
}
