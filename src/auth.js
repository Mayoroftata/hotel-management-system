import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GoogleProvider, Facebook],
})

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     providers: [Facebook],
// })