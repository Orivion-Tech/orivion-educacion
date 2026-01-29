import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth';

export default async function TenantIndex({
  params
}: {
  params: Promise<{ tenant: string }>;
}) {
  const session = await getSession();
  const role = session?.role ?? 'student';
  const { tenant } = await params;
  redirect(`/${tenant}/${role}/dashboard`);
}
