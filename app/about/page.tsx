import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </>
  )
}
