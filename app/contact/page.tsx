'use client'
import React, { useState } from 'react'

export default function ContactPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}