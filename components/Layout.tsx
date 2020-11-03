import { FunctionComponent } from 'react'
import styles from './layout.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Layout
