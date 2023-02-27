import './globals.css'
import styles from './page.module.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          {children}
        </main>
      </body>
    </html>
  )
}
