export const ROLES = [
  'system_admin',
  'institution_admin',
  'teacher',
  'student',
  'guardian'
] as const;

export type RoleKey = (typeof ROLES)[number];

export const ROLE_LABELS: Record<RoleKey, string> = {
  system_admin: 'System Admin',
  institution_admin: 'Institution Admin',
  teacher: 'Teacher',
  student: 'Student',
  guardian: 'Guardian'
};

export const ROLE_DESCRIPTIONS: Record<RoleKey, string> = {
  system_admin: 'Global governance and platform security.',
  institution_admin: 'Institution operations and academic oversight.',
  teacher: 'Classroom delivery and student support.',
  student: 'Personalized learning journey.',
  guardian: 'Consent, safety, and family engagement.'
};
