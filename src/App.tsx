import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center bg-light_beige">
      <div className="ellipse1"></div>
      <div className="ellipse2"></div>
      <div className="ellipse3"></div>
      <div className="mx-[48px] max-w-[1235px]">
        <header className="flex flex-row justify-between">
          <div className="mt-[34px] text-base font-[500]">Short_cute</div>
          <button className="z-[100] mt-[24px] px-[16px] py-[12px] bg-dark block text-beige rounded-md">
            Download our Chrome Extension
          </button>
        </header>

        <section className="flex flex-col md:flex-row mt-[133px] justify-evenly">
          <div className="">
            <div className="text-5xl text-dark">
              Become a keyboard shortcuts athlete ️️⚡️
            </div>
            <div className="text-2xl my-[24px]">
              The extension to save and practice shortcuts you wouldn’t remember
              otherwise
            </div>
            <div className="mb-[24px]">
              1. Save new shortcuts in seconds through our extension <br />
              2. Practice them through our mini-game website
              <br />
              3. become a shortcuts athlete
              <br />
            </div>
            <button className="mb-[24px] px-[16px] py-[12px] bg-dark block text-beige rounded-md">
              Download our Chrome Extension
            </button>
            <div className="text-dark_beige">
              (Only available on Google Chrome for now)
            </div>
          </div>
          <div className="mt-[44px]  item-end justify-end flex w-[592px] h-[370px]">
            <img
              width={592}
              height={370}
              style={{ objectFit: "cover" }}
              src="https://uploads.linear.app/6428672a-ee13-417a-a8a4-dd3a0ddfc5a8/a9cbd790-c16e-43e2-ac84-97e52316aca1/d294bc30-f8a5-4ea4-9040-c557a55e7e71"
              alt=""
            />
          </div>
        </section>

        <section className="mt-[250px]">
          <div className="text-2xl text-dark mb-[40px] text-center">
            1. Save new shortcuts in seconds through our extension
          </div>
          <div className="mt-[44px] flex-1 justify-center w-full flex mb-[80px]">
            <img
              width={592}
              height={370}
              src="https://uploads.linear.app/6428672a-ee13-417a-a8a4-dd3a0ddfc5a8/8c21ae93-35c1-47b7-a64f-274b71e169f8/c2d135a5-0963-4fa4-abb0-b638ecf05bc5"
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="text-2xl text-dark mb-[40px] text-center">
            2. Practice your saved shortcuts with our mini-game website
          </div>
          <div className="mt-[44px] flex-1 justify-center w-full flex mb-[80px]">
            <img
              width={592}
              height={370}
              src="https://uploads.linear.app/6428672a-ee13-417a-a8a4-dd3a0ddfc5a8/0212cc14-1f87-450a-93fb-0169da6db0b2/5444aead-d601-4785-8b30-8b47f6fe7932"
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="text-2xl text-dark mb-[40px] text-center">
            3. become a shortcuts athlete ⚡️
          </div>
          <div className="mt-[44px] flex-1 justify-center w-full flex mb-[140px]">
            <img
              width={592}
              height={370}
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHpmNzhtOWY4cmhzeG1tNWM4djY5bG9pZDIwdzBvYnF5eWt0eG1pZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7srpeY4TZMrO8/200.webp"
              alt=""
            />
          </div>
        </section>

        <section>
          <div className="text-5xl text-center mb-[80px]">
            Pay once, use forever
          </div>

          <div className="flex item-center justify-center">
            <div className="border-2 border-dark rounded-[8px] text-dark w-[320px] mb-[120px]">
              <div className="text-5xl mt-[40px] mb-[24px] text-center">7$</div>
              <div className="text-2xl mt-[40px] mb-[24px] text-center">
                Lifetime membership
              </div>
              <div className="text-center">
                Save and practice as many
                <br /> shortcuts as you want.
              </div>
              <div className="flex item-center justify-center mt-[24px]">
                <button className="mb-[24px] px-[32px] py-[12px] bg-dark block text-beige rounded-md mb-[8px]">
                  Start your 3 days free trial
                </button>
              </div>
              <div className="text-center mb-[40px]">
                (no credit card required)
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-dark_beige w-full"></div>
        <div className="text-center my-[12px] text-black">
          Made by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://www.linkedin.com/in/ulysse-ducamp-3752b413b/"
          >
            Ulysse Ducamp
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/esteban-a-leclet-b99092111/"
          >
            Esteban Leclet
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
/* Ellipse 56 */
