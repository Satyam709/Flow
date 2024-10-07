import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import db from "@repo/db/client";


export const authOptions = {
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
      async authorize(credentials):Promise<any> {
        console.log(credentials);

        if (!credentials)return null;
        
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
        
            const hasedPass =await bcrypt.hash(credentials?.password,10);
            console.log(hasedPass);
            
           const newUser =  await db.user.create(
            {
                data:{
                    password:hasedPass,
                    number:credentials?.phone
                }
            }
           );
           return newUser;
        } catch (error) {
            console.log(error);
        }
        
        return null; // User not found
      },
    }),
  ],
  callbacks: {
    // async redirect({ url, baseUrl }:{url:NextURL,baseUrl:NextURL}) {
      
    //   // Redirect to localhost:3000 after sign-in
    //   return base; // or return 'http://localhost:3000' to hardcode the URL

    // },
    async session({ session, token }) {
      console.log("session in auth"+session.user+"\ntoken in auth"+token);
      session.user.id = token.id;
      
      
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Store user id in token
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET || "secret",
};

export default NextAuth(authOptions);
