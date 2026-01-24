export interface Session {
  userId: string;
  role: 'student' | 'parent' | 'teacher' | 'admin' | 'platform';
  permissions: string[];
  institutionId: string;
  isPlatformAdmin: boolean;
}
