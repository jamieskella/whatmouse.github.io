import "./App.css";
import Logo from "./assets/sub-optimum.svg";
import { ScrambleText } from "./components/ScrambleText";
import Viewer from "./components/Viewer";
function App() {
  return (
    <>
      <div className="flex flex-col space-y-16 max-w-screen-md px-4 md:px-8 mx-auto py-16">
        <div className="flex gap-16">
          <img src={Logo} alt="Sub Optimum" width={280} />
          <div className="h-0.25 min-h-0.25 bg-[#FFE684] w-full self-end"></div>
        </div>

        <pre>
          <ScrambleText
            text={`{
  "Chassis": "6.1 grams",
  "DA V3 Pro PCB": "8.6 grams",
  "TJ Battery": "5.1 grams",
  "Sub20 Gross Weight": "19.8 grams",
}`}
          />
        </pre>
      </div>

      <div className="w-full h-180 -my-48">
        <Viewer />
      </div>

      <div className="flex flex-col space-y-16 max-w-screen-md px-4 md:px-8 mx-auto py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-6 basis-1/2">
            <pre>
              <ScrambleText
                text={`{
  "description": {
    "tone": "edgy 1990s PlayStation ad",
  }
}`}
              />
            </pre>

            <p className="uppercase font-bold">
              Ultra light? Logitech G Pro, eat your heart out. Featherweight?
              Razer Viper, you're not even close. This is in a league [almost]
              of its own. You have just a few choices if you want an
              uncompromisingly exact and unapologetically raw mousing
              experience. And this is one of them.
            </p>

            <p className="uppercase font-bold">Welcome to the Sub20 club.</p>

            <p className="uppercase">
              60 grams is a relic of the past and precision is now measured in
              milligrams. In an arena where mousing fidelity separates the
              champions from the forgotten, there's no room for dead weight.
              Which is why every gram of unnecessary mass has been stripped
              away.
            </p>
          </div>

          <div className="w-0.25 min-w-0.25 bg-[#FFE684] hidden md:flex"></div>

          <div className="flex flex-col gap-6 md:pt-87 basis-1/2">
            <p className="uppercase">
              You think you know lightweight? Think again. This stops on a dime,
              with zero inertia; with absolute accuracy. This mouse is not about
              luxury; it's an extension of your will. This is a pure,
              unadulterated connection to your game. No RGB. No frills. Just
              you, 19.8 grams of high-performance hardware, and your unbridled
              skill.
            </p>

            <p className="uppercase">
              Named with a hat-tip to its inspiration, Optimum Tech's{" "}
              <a
                href="https://www.youtube.com/watch?v=UNSLekT0AIo"
                className="underline"
                target="_blank"
              >
                Zeromouse
              </a>
              ... <span className="font-bold">meet the Sub-Optimum</span>.
            </p>

            <p className="uppercase">
              It's free for you to 3D print, right now. Go forth and conquer.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-6 basis-1/2"></div>

          <div className="w-0.25 min-w-0.25 bg-transparent hidden md:flex"></div>

          <div className="flex flex-col gap-6 basis-1/2">
            <a
              href="https://makerworld.com/en/@jamieskella"
              className="border-b py-4 border-[#FFE684] uppercase text-[#FFE684] font-bold underline-offset-8 justify-between flex gap-4 items-center"
              target="_blank"
            >
              <span>Print for free at makerworld</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8V0H10V2H14V4H12V6H10V8H8V10H6V12H8V10H10V8H12V6H14V4H16V8H18ZM8 2H0V18H16V10H14V16H2V4H8V2Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://skel.la/products/whatmouse-sub-optimum-1-0"
              className="border-b py-4 border-[#FFE684] uppercase text-[#FFE684] font-bold underline-offset-8 justify-between flex gap-4 items-center"
              target="_blank"
            >
              <span>Buy ready-made at skel.la</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8V0H10V2H14V4H12V6H10V8H8V10H6V12H8V10H10V8H12V6H14V4H16V8H18ZM8 2H0V18H16V10H14V16H2V4H8V2Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <pre>
          <ScrambleText
            step={6}
            text={`{
  "terms": {
    "text": "You're using this website and the engineering marvel it promotes with no guarantees; you may not end up at the Majors using it. But you might if you use it with a glass pad. Don't sell the Sub-Optimum 1.0 design as your own — that would be uncool. Whatmouse.xyz doesn’t collect, store or distribute any data on your visit to this website — your secrets are safe with us. If you buy a print, rest assured it is sent in packaging that you could suplex into oblivion and it would still survive. It's not made of mere mortal stuff. It's tougher than you will ever be. This website comes with no warranties, so no whining  — you're in the Sub20 club now; get a teaspoon of concrete into ya."
  }
}
`}
          />
        </pre>
      </div>
    </>
  );
}

export default App;
