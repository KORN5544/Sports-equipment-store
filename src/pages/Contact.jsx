import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex flex-col">
        <main className="container mx-auto px-4 py-8 flex-grow">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact</h1>
          <hr className="border-t-4 border-gray-300 mb-8 w-full" />

          <div className="text-lg text-gray-700 space-y-3">
            {/* <p className="font-semibold text-xl text-black">
              Contact
            </p> */}
            <p>Address: ซอย5</p>
            <p>Tel: 0632674068</p>
            <p>E-mail: road@Dessertsandlocalsweets.com</p>
            
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-neutral-500">
            <a href="https://github.com/KORN5544" className="hover:text-black" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.7 1.8 1.9 2.2.9.4 2 .2 2.5 0 .1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6.2 0-1.4.5-2.6 1.2-3.6-.1-.3-.5-1.7.1-3.6 0 0 1-.3 3.5 1.3a12 12 0 0 1 6.4 0c2.5-1.6 3.5-1.3 3.5-1.3.6 1.9.2 3.3.1 3.6.8 1 1.2 2.2 1.2 3.6 0 4.9-2.9 5.9-5.6 6.2.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
            </a>
            <a href="https://www.instagram.com/korn_y18/" className="hover:text-black" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.55c0-1.33 0-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.96v5.64H9.32V9h3.41v1.56h.05c.48-.9 1.66-1.86 3.41-1.86 3.65 0 4.33 2.4 4.33 5.52v6.23ZM5.34 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.13 20.45H3.55V9h3.58v11.45Z"/></svg>
            </a>
            
          </div>

        </main>
      </div>
    </>
  );
};

export default About;
