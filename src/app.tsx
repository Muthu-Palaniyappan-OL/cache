import publications from "./publications";
import Logo from "./assets/ista_transparent_logo.webp";
import { useEffect, useState } from "preact/hooks";

// prettier-ignore
export function App() {
  const years = [...new Set(publications.map(publication => (new Date(publication.date)).getFullYear()))].sort().reverse()

  return (
    <>
    {
        localStorage.getItem('notFirstTime') != '1'
      ?
        <Intro />
      :
     <></>
    }
    <Header />
    <div class="font-Azonix">
      {years.map(year => {
        return <div class="p-2">
          <p class="m-2 underline text-xl">{year}</p>
            <div class="flex flex-row flex-wrap">
            {publications.filter(publication => (new Date(publication.date).getFullYear() == year)).sort((a, b) => (new Date(b.date)).getMonth() - (new Date(a.date)).getMonth()).map(publication => {
                return <div class="max-w-sm rounded-lg shadow-2xl m-2 relative">
                    {publication.highlight ? <p class="animate-pulse absolute inline-flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded z-10 -top-2 p-1 -end-4">{publication.highlight}</p> : <></>}
                    {/* @ts-ignore */}
                    <div class="_df_thumb df-book-cover m-0 w-100 img" id="flipbook_example" source={publication.file} thumb={publication.cover}></div>
                    <div class="p-2">
                      <p class="font-sans font-bold text-center">{publication.name}</p>
                      <p class="font-sans text-xs">Published on {(new Date(publication.date).toLocaleDateString())}</p>
                    </div>
                </div>
            })}
            </div>
          </div>
      })}
    </div>
    <Footer />
    </>
  );
}

function Header() {
  return (
    <>
      <nav class="p-2 font-Azonix bg-white border-gray-300 dark:bg-gray-900 border-b-2">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cache
            </span>
          </a>
          <a
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
            href="http://istaceg.in/"
            target="_blank"
          >
            <div class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 hover:cursor-pointer font-medium rounded-lg text-sm px-4 py-2 text-center bg-gray-500 dark:bg-gray-700">
              <img src={Logo} class="h-10" alt="Cache Logo" />
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer class="bg-white shadow dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a
            href="https://istaceg.in/"
            class="hover:underline pl-2"
            target="_blank"
          >
            Cache (ISTA, CEG)
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
      localStorage.setItem("notFirstTime", "1");
    }, 4500);
  }, []);

  return (
    <>
      {visible ? (
        <div class="absolute bg-white opacity-100 font-Azonix z-20 max-w-full w-screen h-screen flex flex-row justify-center items-center p-0 m-0 top-0 left-0 bottom-0 right-0">
          <div class="inline-block">
            {"Cache".split("").map(function (char, index) {
              const style = { "animation-delay": 0.5 + (index * 4) / 10 + "s" };
              return (
                <span
                  aria-hidden="true"
                  class="moving text-2xl md:text-4xl lg:text-5xl inline-block"
                  key={index}
                  style={style}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
