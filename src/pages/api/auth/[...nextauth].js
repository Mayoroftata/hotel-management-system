import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      // Send user data to your backend for saving
      try {
        const response = await axios.post("http://localhost:5000/api/registerGoogle", {
          name: profile.name,
          email: profile.email,
          picture: profile.picture,
        });

        if (!response.data.success) {
          throw new Error("Failed to save user data in the backend");
        }
      } catch (error) {
        console.error(error);
        return false; // Deny sign-in if backend save fails
      }

      return true; // Allow sign-in
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the token
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Add user ID to the session
      session.user.email = token.email;
      session.user.name = token.name;
      session.user.picture = token.picture;
      return session;
    },
  },
});