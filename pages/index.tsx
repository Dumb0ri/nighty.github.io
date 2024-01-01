import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Head from 'next/head'


function discord() {
    window.open("https://discord.com/users/706911188356694087");
    alert('@nighty.lol');
}
function easteregg() {
    alert('NIGHTY ON TOP');
}

export default function Home() {
  return (
      <main className="flex justify-center items-center font opacity-80 font['Pretendard']">
          <div className="flex items-center flex-col bg-[#fcf7c1] rounded-[15px] w-[280px] h-[566px] drop-shadow-[19px_19px_10px_rgba(0,0,0,0.25)] mt-[7%]">
              <Head>
                  <title>Nighty's Profile Site</title>
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
              <p className="text-[45px]">Nighty</p>
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
                      src="/image/ytlogoog.png"
                      width={25}
                      height={1}
                      alt=""
                      onClick={yt}
                      className="mr-[25px] hover:cursor-pointer"
                  />
              </div>
              <div>
                  <Typewriter
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("Wassup")
                              .pauseFor(15000)
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
