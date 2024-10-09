"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function IsAuthenticated() {
  const router = useRouter();
  const session = useSession();
    if (session.status != 'authenticated') {
        router.push("/")
    }
    return (
    <></>
  )
}

export default IsAuthenticated