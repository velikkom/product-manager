import NextAuth from "next-auth";

export const config = {
  providers: [],
  callbacks: {},
};

export const { handlers, signOut, signIn, auth } = NextAuth(config);
