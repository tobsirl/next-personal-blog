import styles from '../styles/home.module.css'

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h1>Hi, my name is Paul Tobin</h1>
        <div>blog</div>
        <div>contact us</div>
      </div>
    </div>
  )
}