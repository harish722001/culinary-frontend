'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const SignInButton = () => {
    const router = useRouter()
    return (
        <button onClick={() => router.push('/restaurant/feed')} type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
    );
}

export default SignInButton