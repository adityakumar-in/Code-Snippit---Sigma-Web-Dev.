"use client"
// npm i next-auth

import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session)

  // If signined display signout button else display signin button
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    Not signed in <br/>
    <button onClick={() => signIn("github")}>Sign in using Github</button>
    <button onClick={() => signIn("google")}>Sign in using Google</button> 
  </>
}