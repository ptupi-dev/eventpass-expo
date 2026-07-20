import { Redirect } from 'expo-router';

import { useAuth } from '@/hooks/useAuth';
import { AuthUser } from '@/types/auth';

export default function IndexScreen() {
  const { verifySession } = useAuth();
  const { data: user = {} as AuthUser } = verifySession;

  return <Redirect href={user?.['user-id'] ? '/home' : '/login'} />;
}
