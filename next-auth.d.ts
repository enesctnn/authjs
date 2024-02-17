import { UserRole } from '@prisma/client';
import 'next-auth/jwt';

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    role: UserRole;
  }
}

declare module 'next-auth' {
  interface User {
    role: UserRole;
  }
}
