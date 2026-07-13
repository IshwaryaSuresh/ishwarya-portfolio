import Hero from '../components/Hero'
import Projects from '../components/Projects'
import NumbersAbout from '../components/NumbersAbout'
import Story from '../components/Story'
import HowIHelp from '../components/HowIHelp'
import HowIWork from '../components/HowIWork'
import Essentials from '../components/Essentials'
import Journal from '../components/Journal'
import Brief from '../components/Brief'

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <NumbersAbout />
      <Story />
      <HowIHelp />
      <HowIWork />
      <Essentials />
      <Journal />
      <Brief />
    </>
  )
}
