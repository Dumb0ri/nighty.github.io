import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Head from 'next/head'

function github() {
    window.open("https://github.com/Dumb0ri");
}
function email() {
    window.open("mailto:jhhhan5932@gmail.com");
}
function discord() {
    window.open("https://discord.com/users/1105653154542006333");
    alert('@goldumb');
}
function easteregg() {
    alert('Best Bedwars Player fr');
}

export default function Home() {
  return (
      <main className="flex justify-center items-center font opacity-80 font['Pretendard']">
          <div className="flex items-center flex-col bg-[#6277BF] rounded-[15px] w-[280px] h-[566px] drop-shadow-[19px_19px_10px_rgba(0,0,0,0.25)] mt-[7%]">
              <Head>
                  <title>Goldumb Profile Site</title>
                  <link rel="icon" href="/favicon.png" sizes="any"/>
              </Head>
              <Image
                  src="/favicon.png"
                  width={96}
                  height={1}
                  alt=""
                  onClick={easteregg}
                  className="mt-[30px]"
              />
              <p className="text-[56px]">Goldumb</p>
              <div className="flex mb-[10px]">
                  <Image
                      src="/image/discord.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={discord}
                      className="ml-[25px] mr-[25px] hover:cursor-pointer"
                  />
                  <Image
                      src="/image/github.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={github}
                      className="mr-[25px] hover:cursor-pointer"
                  />
                  <Image
                      src="/image/envelope.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={email}
                      className="mr-[25px] hover:cursor-pointer"
                  />
              </div>
              <div>
                  <Typewriter
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("#Hello, World!")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("#Age 16")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("#Developer")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("Java, JS, C, etc..")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("#Translator")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("Minecraft, Hypixel, etc..")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("Minecraft enthusiast")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("I create reliable outcomes")
                              .pauseFor(3500)
                              .deleteAll()
                              .typeString("I'm dumb")
                              .pauseFor(3500)
                              .deleteAll()
                              .start();
                      }}
                  />
              </div>
              <div className="mt-[30%] text-[25px]">
                  <p className="">404</p>
                  <p className="">Not Found</p>
              </div>
          </div>
      </main>
  );
}
