'use client';

import { type User } from '~/server/auth';
import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextType {
  user: User | null;
}

const useSessionState = (user: User | null) => useState<ContextType>({ user });

const UserContext = createContext<ReturnType<typeof useSessionState> | null>(
  null,
);

export const useSession = () => {
  const session = useContext(UserContext);
  if (!session) {
    throw new Error('Make sure that user session is under UserProvider');
  }
  return session;
};

export const UserProvider = ({
  children,
  userSession,
}: {
  children: ReactNode;
  userSession: User | null;
}) => {
  const [session, setSession] = useSessionState(userSession);
  return (
    <UserContext.Provider value={[session, setSession]}>
      {children}
    </UserContext.Provider>
  );
};
