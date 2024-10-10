import { useState } from 'react'
import './App.css'
import Container from './Components/Container'
import Flex from './Components/Flex'
import Image from './Components/Image'
import Logo from './assets/logo.png'
import Menu from './Components/Menu'
import Button from './Components/Button'
import { FaArrowRight } from "react-icons/fa6";
import banner from './assets/bannerbg.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Heading part start */}
      <div className="bg-teal-400 py-8 items-center">
        <Container>
          <Flex>
            <div className="w-1/5 py-4">
              <Image imgSrc={Logo} imgAlt={'Logo'}/>
            </div>
            <div className="w-3/5 py-4">
              <Flex className={'gap-x-6'}>
                <Menu text={'Home'}/>
                <Menu text={'Product'}/>
                <Menu text={'Pricing'}/>
                <Menu text={'Contact'}/>
              </Flex>
            </div>
            <div className="w-1/5">
              <Flex className={'gap-x-3'}>
                <Button text={'Login'} className={'py-4 px-7'}/>
                <div className="">
                  <Flex className={' hover:bg-btncolor duration-500 items-center rounded-lg px-5'}>
                  <Button text={'Join Us'}  className={'py-4 px-2'}/>
                  <FaArrowRight className={'text-lg text-white '}/>
                  </Flex>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Heading part end */}

      {/* Banner part start */}
      <div className="">
        <Image imgSrc={banner}/>
      </div>
      {/* Banner part end */}
    </>
  )
}

export default App
