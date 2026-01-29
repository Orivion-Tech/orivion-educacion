import { redirect } from 'next/navigation';

export default async function RoleIndex({
  params
}: {
  params: Promise<{ tenant: string; role: string }>;
}) {
  const { tenant, role } = await params;
  redirect(`/${tenant}/${role}/dashboard`);
}
