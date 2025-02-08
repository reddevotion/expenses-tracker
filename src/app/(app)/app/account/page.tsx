import { checkAuthentication } from '@/lib/check-auth';
import React from 'react'

async function Account() {
  const user = await checkAuthentication();
  console.log(user)
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-white">Account</h1>

      <p className="text-white mt-2">
        Logged in with email: <span className="font-bold">{user.email}</span>
      </p>
    </div>
  )
}

export default Account