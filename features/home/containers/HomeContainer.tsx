import { HomePage } from '../pages/HomePage'
import styles from './styles.module.css'

 export const HomeContainer = () => {
  return (
    <section className={ styles['home-container']}>
      <HomePage />
    </section>
  )
}