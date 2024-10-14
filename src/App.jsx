import { useState } from "react";
import "./App.css";
import Container from "./Components/Container";
import Flex from "./Components/Flex";
import Image from "./Components/Image";
import Text from "./Components/Text";
import Logo from "./assets/logo.png";
import Menu from "./Components/Menu";
import Button from "./Components/Button";
import { FaArrowRight } from "react-icons/fa6";
import bannerimg from "./assets/bannerbg.png";
import House from "./assets/house.png";
import Brain from "./assets/brain.png";
import Health from "./assets/health.png";
import Girl from "./assets/girl.png";
import Video from "./assets/video.png";
import Cardimg1 from './assets/cardimg1.png'
import Cardimg2 from './assets/cardimg2.png'
import Cardimg3 from './assets/cardimg3.png'
import Circle1 from './assets/circle1.png'
import Circle2 from './assets/circle2.png'
import Circle3 from './assets/circle3.png'
import { FaChevronRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import Badge from "./Components/Badge";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Heading part start */}
      <div className="bg-bgcolor py-8 items-center">
        <Container>
          <Flex>
            <div className="w-1/5 py-4">
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </div>
            <div className="w-3/5 py-4">
              <Flex className={"gap-x-6"}>
                <Menu text={"Home"} />
                <Menu text={"Product"} />
                <Menu text={"Pricing"} />
                <Menu text={"Contact"} />
              </Flex>
            </div>
            <div className="w-1/5">
              <Flex className={"gap-x-3"}>
                <Button
                  text={"Login"}
                  className={"py-4 px-7 hover:uppercase text-white"}
                />
                <div className="">
                  <Flex
                    className={
                      " hover:bg-btncolor duration-500 items-center rounded-lg px-5"
                    }
                  >
                    <Button
                      text={"Join Us"}
                      className={"py-4 px-2 hover:uppercase  text-white"}
                    />
                    <FaArrowRight className={"text-lg text-white "} />
                  </Flex>
                </div>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Heading part end */}

      {/* Banner part start */}
      <div className="py-24 bg-bgcolor">
        {/* <Image imgSrc={bannerimg} className={'bg-no-repeat bg-cover bg-center w-full'}/> */}
        <Container>
          <div className="w-1/2">
            <Text
              text={"Online training"}
              className={"text-base font-bold font-moon text-white mb-10"}
            />
            <Text
              text={"25K+ STUDENTS TRUST US"}
              className={"text-[58px] font-bold font-moon text-white mb-10"}
            />
            <Text
              text={"Our goal is to make online education work for everyone"}
              className={"text-xl font-moon text-white mb-10 pr-48 leading-8"}
            />
            <Flex className={"gap-x-4"}>
              <Button
                text={"Get Quote Now"}
                className={
                  "text-sm font-bold font-moon py-4 px-10 border-2 text-white border-white hover:border-none"
                }
              />
              <Button
                text={"Learn More"}
                className={
                  "text-sm font-bold font-moon py-4 px-10 border-2 text-white border-white hover:border-none"
                }
              />
            </Flex>
          </div>
        </Container>
      </div>
      {/* Banner part end */}

      {/* Card Part Start */}
      <div className=" bg-bgcolor">
        <Container>
          <Flex className={"justify-between pb-28 "}>
            <div className="w-[32%] p-10 bg-white">
              <Image imgSrc={House} className={"mb-6"} />
              <Text
                text={"2,769 online courses	"}
                className={"text-cardcolor text-base font-bold font-moon mb-6"}
              />
              <div className="w-14 h-1 bg-bar mb-6"></div>
              <Text
                text={
                  "The gradual accumulation of information about atomic and small-scale behaviour..."
                }
                className={"text-cardtxt  text-base font-moon pr-10"}
              />
            </div>
            <div className="w-[32%] p-10 bg-white">
              <Image imgSrc={Brain} className={"mb-6"} />
              <Text
                text={"Expert instruction	"}
                className={"text-cardcolor text-base font-bold font-moon mb-6"}
              />
              <div className="w-14 h-1 bg-bar mb-6"></div>
              <Text
                text={
                  "The gradual accumulation of information about atomic and small-scale behaviour..."
                }
                className={"text-cardtxt  text-base font-moon pr-10"}
              />
            </div>
            <div className="w-[32%] p-10 bg-white">
              <Image imgSrc={Health} className={"mb-6"} />
              <Text
                text={"training Courses"}
                className={"text-cardcolor text-base font-bold font-moon mb-6"}
              />
              <div className="w-14 h-1 bg-bar mb-6"></div>
              <Text
                text={
                  "The gradual accumulation of information about atomic and small-scale behaviour..."
                }
                className={"text-cardtxt  text-base font-moon pr-10"}
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Card Part End */}

      {/* Expert Part Start */}
      <div className="py-40 bg-bgcolor">
        <Container>
          <Flex>
            <div className="w-3/5">
              <Image imgSrc={Girl} />
            </div>
            <div className="w-2/5 py-16">
              <div className="h-2 w-24 bg-bar mb-10"></div>
              <Text
                text={"Our Experts Teacher"}
                className={
                  "text-[40px] text-white pr-20 font-bold font-moon mb-10"
                }
              />
              <Text
                text={
                  "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics "
                }
                className={"text-sm text-white pr-36 font-moon mb-6"}
              />
              <Flex className={"items-center"}>
                <Text
                  text={"Learn More"}
                  className={"text-btncolor text-sm font-moon font-bold"}
                />
                <FaChevronRight className={"text-2xl text-btncolor"} />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Expert Part End */}

      {/* Package Part Start */}
      <div className="bg-bgcolor py-40">
        <Container>
          <Flex>
            <div className="w-1/2 py-16">
            <div className="h-2 w-24 bg-bar mb-10"></div>
              <Text
                text={"Approdable Packages"}
                className={
                  "text-[40px] text-white pr-20 font-bold font-moon mb-10"
                }
              />
              <Text
                text={
                  "Problems trying to resolve the conflict between the two major realms of Classical physics:  Newtonian mechanics  "
                }
                className={"text-sm text-white pr-64 font-moon mb-10"}
              />
              <Flex className={"items-center"}>
                <Text
                  text={"Learn More"}
                  className={"text-btncolor text-sm font-moon font-bold"}
                />
                <FaChevronRight className={"text-2xl text-btncolor"} />
              </Flex>
            </div>
            <div className="w-1/2">
              <Image imgSrc={Video}/>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Package Part End */}

      {/* Courses Part Start */}
      <div className="bg-bgcolor py-40">
        <Container>
          <Text text={'Practice Advice'} className={'text-sm font-bold font-moon text-btncolor mb-4'}/>
          <Text text={'Our Popular Courses'} className={'text-[40px] font-bold font-moon text-white mb-4'}/>
          <Text text={'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '} className={'mb-16 text-sm font-moon text-white'}/>
          <Flex className={'justify-between'}>
            <div className="w-[32.5%] relative">
              <Badge text={'Sale'} className={'absolute top-5 left-3'}/> 
              <Flex className={'gap-x-3 absolute top-64 left-28'}>
                <div className="rounded-full bg-white text-center p-3">
                <FaRegHeart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <BsCart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <MdRemoveRedEye className="text-2xl"/>
                </div>
              </Flex>
              <Image imgSrc={Cardimg1} imgAlt={'cardimg1'} className={'w-full '}/>
              <div className=" bg-white px-5 py-7">
                <Flex className={'justify-between mb-2'}>
                  <Text text={'For Better Future'} className={'text-btncolor text-sm font-bold font-moon'}/>
                  <div className="bg-bgcolor  py-2 px-2 rounded-3xl">
                    <Flex className={'gap-x-1 items-center'}>
                    <IoStarSharp className='text-star'/>
                    <Text text={'4.9'} className={'text-xs font-moon text-white'}/>
                    </Flex>
                  </div>
                </Flex>
                <Text text={'2,769 online courses'} className={'text-cardcolor text-base font-bold font-moon mb-2'}/>
                <Text text={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."} className={'text-cardtxt text-base pr-12 font-moon mb-2'}/>
                <Flex className={'items-center gap-x-2 mb-3'}>
                <BsDownload className="text-cardtxt"/>
                <Text text={'15 Sales'} className={'text-cardtxt text-sm font-moon font-bold'}/>
                </Flex>
                <Flex className={'gap-x-2 mb-3'}>
                  <Text text={'$16.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                  <Text text={'$6.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                </Flex>
                <Flex className={"items-center rounded-3xl border-2 border-btncolor py-3 text-center w-40 px-6 mb-2"}>
                <Button text={'Learn More'} className={"text-btncolor hover:bg-white text-sm font-moon font-bold"}/>
                <FaChevronRight className={"text-2xl text-btncolor"} />
              </Flex>
              </div>
            </div>
            <div className="w-[32.5%] relative">
              <Badge text={'Sale'} className={'absolute top-5 left-3'}/> 
              <Flex className={'gap-x-3 absolute top-64 left-28'}>
                <div className="rounded-full bg-white text-center p-3">
                <FaRegHeart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <BsCart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <MdRemoveRedEye className="text-2xl"/>
                </div>
              </Flex>
              <Image imgSrc={Cardimg2} imgAlt={'cardimg2'} className={'w-full '}/>
              <div className=" bg-white px-5 py-7">
                <Flex className={'justify-between mb-4'}>
                  <Text text={'For Better Future'} className={'text-btncolor text-sm font-bold font-moon'}/>
                  <div className="bg-bgcolor  py-2 px-2 rounded-3xl">
                    <Flex className={'gap-x-1 items-center'}>
                    <IoStarSharp className='text-star'/>
                    <Text text={'4.9'} className={'text-xs font-moon text-white'}/>
                    </Flex>
                  </div>
                </Flex>
                <Text text={'2,769 online courses'} className={'text-cardcolor text-base font-bold font-moon mb-2'}/>
                <Text text={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."} className={'text-cardtxt text-base pr-12 font-moon mb-2'}/>
                <Flex className={'items-center gap-x-2 mb-3'}>
                <BsDownload className="text-cardtxt"/>
                <Text text={'15 Sales'} className={'text-cardtxt text-sm font-moon font-bold'}/>
                </Flex>
                <Flex className={'gap-x-2 mb-3'}>
                  <Text text={'$16.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                  <Text text={'$6.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                </Flex>
                <Flex className={"items-center rounded-3xl border-2 border-btncolor py-3 text-center w-40 px-6 mb-2"}>
                <Button text={'Learn More'} className={"text-btncolor hover:bg-white text-sm font-moon font-bold"}/>
                <FaChevronRight className={"text-2xl text-btncolor"} />
              </Flex>
              </div>
            </div>
            <div className="w-[32.5%] relative">
              <Badge text={'Sale'} className={'absolute top-5 left-3'}/> 
              <Flex className={'gap-x-3 absolute top-64 left-28'}>
                <div className="rounded-full bg-white text-center p-3">
                <FaRegHeart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <BsCart className="text-2xl"/>
                </div>
                <div className="rounded-full bg-white text-center p-3">
                <MdRemoveRedEye className="text-2xl"/>
                </div>
              </Flex>
              <Image imgSrc={Cardimg3} imgAlt={'cardimg3'} className={'w-full '}/>
              <div className=" bg-white px-5 py-7">
                <Flex className={'justify-between mb-2'}>
                  <Text text={'For Better Future'} className={'text-btncolor text-sm font-bold font-moon'}/>
                  <div className="bg-bgcolor  py-2 px-2 rounded-3xl">
                    <Flex className={'gap-x-1 items-center'}>
                    <IoStarSharp className='text-star'/>
                    <Text text={'4.9'} className={'text-xs font-moon text-white'}/>
                    </Flex>
                  </div>
                </Flex>
                <Text text={'2,769 online courses'} className={'text-cardcolor text-base font-bold font-moon mb-2'}/>
                <Text text={"We focus on ergonomics and meeting you where you work. It's only a keystroke away."} className={'text-cardtxt text-base pr-12 font-moon mb-2'}/>
                <Flex className={'items-center gap-x-2 mb-3'}>
                <BsDownload className="text-cardtxt"/>
                <Text text={'15 Sales'} className={'text-cardtxt text-sm font-moon font-bold'}/>
                </Flex>
                <Flex className={'gap-x-2 mb-3'}>
                  <Text text={'$16.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                  <Text text={'$6.48'} className={'text-mud hover:text-orange duration-300 text-base font-moon font-bold'}/>
                </Flex>
                <Flex className={"items-center rounded-3xl border-2 border-btncolor py-3 text-center w-40 px-6 mb-2"}>
                <Button text={'Learn More'} className={"text-btncolor hover:bg-white text-sm font-moon font-bold"}/>
                <FaChevronRight className={"text-2xl text-btncolor"} />
              </Flex>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

      {/* Courses Part End */}

      {/* advice part start */}
      <div className="bg-bgcolor py-40">
        <Container>
          <Text text={'Practice Advice'} className={'text-btncolor text-sm font-moon font-bold mb-5'}/>
          <Text text={'Approdable Packages'} className={'text-white text-[40px] font-moon font-bold mb-3'}/>
          <Text text={'Problems trying to resolve the conflict between  '} className={'text-white text-sm font-moon '}/>
          <Text text={'the two major realms of Classical physics: Newtonian mechanics '} className={'text-white text-sm font-moon mb-16'}/>
          <Flex className={'justify-between'}>
            <div className="w-[32.5%] pt-12 pb-8 bg-white px-[120px]">
            <Flex className={'justify-center gap-x-2 text-star2 mb-4'}>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <FaRegStar className="text-2xl"/>
            </Flex>
            <Text text={'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'} className={'text-center text-sm font-moon text-cardtxt mb-5'}/>
            <Flex className={'gap-x-3'}>
             <Image imgSrc={Circle1}/>
             <div className="py-2">
              <Text text={'Regina Miles'} className={'text-sm font-bold font-moon text-btncolor'}/>
              <Text text={'Designer'} className={'text-xs font-moon text-cardcolor'}/>
             </div>
            </Flex>
            </div>
            <div className="w-[32.5%] pt-12 pb-8 bg-white px-[120px]">
            <Flex className={'justify-center gap-x-2 text-star2 mb-4'}>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <FaRegStar className="text-2xl"/>
            </Flex>
            <Text text={'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'} className={'text-center text-sm font-moon text-cardtxt mb-5'}/>
            <Flex className={'gap-x-3'}>
             <Image imgSrc={Circle2}/>
             <div className="py-2">
              <Text text={'Regina Miles'} className={'text-sm font-bold font-moon text-btncolor'}/>
              <Text text={'Designer'} className={'text-xs font-moon text-cardcolor'}/>
             </div>
            </Flex>
            </div>
            <div className="w-[32.5%] pt-12 pb-8 bg-white px-[120px]">
            <Flex className={'justify-center gap-x-2 text-star2 mb-4'}>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <GoStarFill className="text-2xl"/>
            <FaRegStar className="text-2xl"/>
            </Flex>
            <Text text={'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.'} className={'text-center text-sm font-moon text-cardtxt mb-5'}/>
            <Flex className={'gap-x-3'}>
             <Image imgSrc={Circle3}/>
             <div className="py-2">
              <Text text={'Regina Miles'} className={'text-sm font-bold font-moon text-btncolor'}/>
              <Text text={'Designer'} className={'text-xs font-moon text-cardcolor'}/>
             </div>
            </Flex>
            </div>
            
          </Flex>
        </Container>
      </div>
      {/* advice part end */}

      {/* FAQ Part Start */}
      <div className="pt-40 pb-32 bg-bgcolor">
        <div className="text-center mb-20">
          <Text text={'FAQ'} className={'text-[40px] font-bold font-moon text-white mb-4'}/>
          <Text text={'Problems trying to resolve the conflict between'} className={'text-sm  font-moon text-white mb-1'}/>
          <Text text={'the two major realms of Classical physics: Newtonian mechanics'} className={'text-sm  font-moon text-white mb-4'}/>
        </div>
        <Container >
       <Flex className={'justify-between mb-8'}>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       
       </Flex>
       <Flex className={'justify-between mb-8'}>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       
       </Flex>
       <Flex className={'justify-between'}>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       <div className="w-[32%] bg-white rounded-lg py-7 px-6">
       <Flex className={'gap-x-5'}>
       <FaChevronRight className="text-2xl text-btncolor "/>
       <div className="">
       <Text text={'the quick fox jumps over the lazy dog'} className={'text-cardcolor text-base font-bold font-moon pr-4 mb-2'}/>
       <Text text={'Things on a very small scale behave like nothing '} className={'text-cardtxt text-sm font-bold font-moon pr-5'}/>
       </div>  
       </Flex>      
         </div>
       
       </Flex>
        </Container>
      </div>
      {/* FAQ Part End */}
    </>
  );
}

export default App;
