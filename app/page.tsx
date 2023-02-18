import Link from 'next/link'
import styles from '../styles/home.module.css'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Hi, my name is Paul Tobin</h1>
        <div><Link href="/blog">Checkout my Blog</Link></div>
        <div><Link href="/contact">Contact Me</Link></div>
      </div>
    </div>
  )
}