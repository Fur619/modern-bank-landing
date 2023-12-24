import { Billing, Business, CardDeal, Navbar } from "./components"
import CTA from "./components/CTA"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import styles from "./styles"

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}
export default App