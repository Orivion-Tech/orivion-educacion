import type { RoleKey } from './roles';

export type IconKey =
  | 'LayoutDashboard'
  | 'Users'
  | 'School'
  | 'ShieldCheck'
  | 'LineChart'
  | 'BookOpen'
  | 'BrainCircuit'
  | 'FileBarChart2'
  | 'UserCircle'
  | 'HeartHandshake'
  | 'MonitorCheck';

export type NavItem = {
  label: string;
  href: string;
  icon: IconKey;
  description?: string;
};

export const NAV_ITEMS: Record<RoleKey, NavItem[]> = {
  system_admin: [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'LayoutDashboard',
      description: 'Global KPIs and security posture'
    },
    {
      label: 'Institutions',
      href: '/institutions',
      icon: 'School'
    },
    {
      label: 'Users',
      href: '/users',
      icon: 'Users'
    },
    {
      label: 'Reports',
      href: '/reports',
      icon: 'FileBarChart2'
    },
    {
      label: 'AI Control',
      href: '/ai',
      icon: 'BrainCircuit'
    },
    {
      label: 'Security',
      href: '/settings/security',
      icon: 'ShieldCheck'
    }
  ],
  institution_admin: [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      label: 'Users',
      href: '/users',
      icon: 'Users'
    },
    {
      label: 'Academics',
      href: '/academics',
      icon: 'BookOpen'
    },
    {
      label: 'Reports',
      href: '/reports',
      icon: 'FileBarChart2'
    },
    {
      label: 'AI Insights',
      href: '/ai',
      icon: 'BrainCircuit'
    },
    {
      label: 'Profiles',
      href: '/profiles',
      icon: 'UserCircle'
    }
  ],
  teacher: [
    {
      label: 'Dashboard',
      href: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      label: 'Classes',
      href: '/academics',
      icon: 'BookOpen'
    },
    {
      label: 'Student Progress',
      href: '/progress',
      icon: 'LineChart'
    },
    {
      label: 'Reports',
      href: '/reports',
      icon: 'FileBarChart2'
    },
    {
      label: 'AI Coach',
      href: '/ai',
      icon: 'BrainCircuit'
    }
  ],
  student: [
    {
      label: 'My Dashboard',
      href: '/dashboard',
      icon: 'LayoutDashboard'
    },
    {
      label: 'Learning Path',
      href: '/academics',
      icon: 'BookOpen'
    },
    {
      label: 'My Progress',
      href: '/progress',
      icon: 'LineChart'
    },
    {
      label: 'AI Tutor',
      href: '/ai',
      icon: 'BrainCircuit'
    }
  ],
  guardian: [
    {
      label: 'Overview',
      href: '/dashboard',
      icon: 'MonitorCheck'
    },
    {
      label: 'Consent',
      href: '/consent',
      icon: 'HeartHandshake'
    },
    {
      label: 'Student Progress',
      href: '/progress',
      icon: 'LineChart'
    },
    {
      label: 'Reports',
      href: '/reports',
      icon: 'FileBarChart2'
    }
  ]
};
