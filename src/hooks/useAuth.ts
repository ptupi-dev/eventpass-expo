import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { decode, sign } from 'react-native-pure-jwt';

import users from '../mocks/users.json';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/userStore';
import { AuthToken, AuthUser, LoginCredentials, User } from '@/types/auth';
import { wait } from '@/utils/functions';

const mockJwtSecret = 'eventpass-mock-secret';
const mockJwtExpirationInMs = 1000 * 60 * 60;

interface DecodedAuthPayload {
  id?: unknown;
  exp?: unknown;
}

function getExpirationInMs(expiration: unknown) {
  const numericExpiration =
    typeof expiration === 'number'
      ? expiration
      : typeof expiration === 'string'
        ? Number(expiration)
        : NaN;
  if (!Number.isFinite(numericExpiration)) {
    throw new Error('Invalid session expiration.');
  }
  return numericExpiration < 10000000000 ? numericExpiration * 1000 : numericExpiration;
}

function mapUserToSessionUser(user: User): AuthUser {
  return {
    'user-id': user['user-id'],
    name: user.name,
    email: user.email,
  };
}

async function createMockJwtToken(user: User) {
  return sign(
    {
      id: user['user-id'],
      exp: Date.now() + mockJwtExpirationInMs,
    },
    mockJwtSecret,
    {
      alg: 'HS256',
    },
  );
}

export async function login({ email, password }: LoginCredentials): Promise<AuthToken> {
  await wait(1000);
  const user = (users as User[]).find(
    (currentUser) => currentUser.email === email && currentUser.password === password,
  );
  if (!user) {
    throw new Error('Invalid email or password.');
  }
  const token = await createMockJwtToken(user);
  return {
    token,
    user,
  };
}

export async function verifySession(token: string | null): Promise<AuthUser | null> {
  if (!token) {
    return null;
  }
  const decodedToken = await decode(token, mockJwtSecret);
  const payload = decodedToken.payload as DecodedAuthPayload;
  const expirationInMs = getExpirationInMs(payload.exp);
  if (Date.now() >= expirationInMs) {
    throw new Error('Session expired.');
  }
  if (typeof payload.id !== 'string') {
    throw new Error('Invalid session token.');
  }
  const user = (users as User[]).find((currentUser) => currentUser['user-id'] === payload.id);
  if (!user) {
    throw new Error('Session user not found.');
  }
  return mapUserToSessionUser(user);
}

export function useAuth() {
  const { token, setToken } = useAuthStore((state) => state);
  const { setUser, clearUser } = useUserStore((state) => state);

  const loginMutation = useMutation({
    mutationKey: ['auth'],
    mutationFn: login,
    onSuccess: async ({ token, user }) => {
      setToken(token);
      setUser(user);
    },
  });

  const verifySessionQuery = useQuery({
    queryKey: ['auth-session', token],
    queryFn: () => verifySession(token),
    enabled: Boolean(token),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  useEffect(() => {
    if (!token || verifySessionQuery.isError) {
      clearUser();
      return;
    }
    if (verifySessionQuery.data) {
      setUser(verifySessionQuery.data);
    }
  }, [clearUser, setUser, token, verifySessionQuery.data, verifySessionQuery.isError]);

  return {
    login: loginMutation,
    verifySession: verifySessionQuery,
  };
}
