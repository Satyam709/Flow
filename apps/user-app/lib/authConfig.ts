import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";

// Type `authOptions` as `AuthOptions`
const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number",
          type: "text",
          placeholder: "1231231231",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        // console.log(credentials);

        if (!credentials) return null;

        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone,
          },
        });

        if (existingUser) {
          const passwordValidation = await bcrypt.compare(
            credentials.password,
            existingUser.password
          );

          if (passwordValidation) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }

          if (existingUser.password == credentials.password) {
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              email: existingUser.number,
            };
          }

          return null; // Invalid password
        }

        try {
          const hashedPass = await bcrypt.hash(credentials?.password, 10);
          //console.log(hashedPass);

          const newUser = await db.user.create({
            data: {
              password: hashedPass,
              number: credentials?.phone,
            },
          });
          return newUser;
        } catch (error) {
          console.log(error);
        }

        return null; // User not found
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // console.log("session in auth", session.user, "\ntoken in auth", token);
      
      if (token?.id) {
        session.user.id = token.id;
      }

      // console.log("Session after callback", session);

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user id in token
      }
      return token;
    },
  },
  secret: "secretop",
};

export default authOptions;
