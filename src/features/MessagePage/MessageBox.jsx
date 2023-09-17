import MessageSearchBar from "./MessageSearchBar";
import MessageComponentEachUser from "./MessageComponentEachUser";
const messages = [
  {
    name: "Abdullah",
    message: "Hey, how are you doing?",
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
  },
  {
    name: "Alice",
    message: "I'm good, thanks for asking!",
  },
  {
    name: "Jordan",
    message: "Did you catch the game last night?",
  },
  {
    name: "Jennifer",
    message: "Sure did! It was an intense match.",
  },
  {
    name: "Emma",
    message: "What's the plan for the weekend?",
  },

  // {
  //   name: "Olivia",
  //   message: "We're aiming to finish it by next week.",
  // },
  // {
  //   name: "Ibad",
  //   message: "I heard there's a new restaurant in town.",
  // },
  // {
  //   name: "Michael",
  //   message: "Any updates on the project deadline?",
  // },
];
export default function MessageBox() {
  return (
    <div className="flex h-screen flex-row text-gray-800 antialiased">
      <div className="hidden w-72 shrink-0 flex-row border-r-2 bg-white sm:flex md:w-72 lg:w-80">
        <div className="h-full w-full flex-col sm:flex">
          <div className="flex flex-row items-center px-4 pt-6">
            <div className="mt-1 flex flex-row items-center">
              <a href="/" className="text-xl font-semibold">
                <img src="/logo4.png " className="h-6 w-10" alt="" />
              </a>
              <a href="/">
                <div className="ml-2 flex items-center justify-center rounded-full text-lg font-extrabold text-gray-700">
                  GAMERSHELF
                </div>
              </a>
            </div>
            <div className="ml-auto">
              <img
                className="h-9 w-9 rounded-full"
                src="/ProfileImg2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="px-4 pt-2">
            <MessageSearchBar />
          </div>
          <div className="pl-4">
            <select
              id="location"
              name="location"
              className="block w-[30%] rounded-md border-0 text-sm text-gray-900 ring-inset"
              defaultValue="Canada"
            >
              <option>All Contacts</option>
            </select>
          </div>
          <div className="">
            <div className="overflow-y-auto">
              {messages.map((message, index) => (
                <button key={index} className="w-full p-4 hover:bg-red-100">
                  <MessageComponentEachUser message={message} index={index} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-col bg-white px-4">
        <div className="flex flex-row items-center rounded-2xl px-6 py-4 shadow">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 font-bold text-pink-300">
            <img
              src={`/images/avatars/avatar-0.webp`}
              className="rounded-full"
            ></img>
          </div>
          <div className="ml-3 flex flex-col">
            <div className="text-sm font-semibold">Abdullah</div>
            <div className="text-xs text-gray-500">Active</div>
          </div>
          <div className="ml-auto">
            <ul className="flex flex-row items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
                >
                  <span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
                >
                  <span>
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200"
                >
                  <span>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full overflow-hidden py-4">
          <div className="h-full overflow-y-auto">
            <div className="grid grid-cols-12 gap-y-2">
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>Hey How are you today?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel ipsa commodi illum saepe numquam maxime asperiores
                      voluptate sit, minima perspiciatis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>Im ok what about you?</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>Lorem ipsum dolor sit amet !</div>
                  </div>
                </div>
              </div>
              <div className="col-start-6 col-end-13 rounded-lg p-3">
                <div className="flex flex-row-reverse items-center justify-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                    </div>
                    <div className="absolute bottom-0 right-0 -mb-5 mr-2 text-xs text-gray-500">
                      Seen
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, in.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-8 rounded-lg p-3">
                <div className="flex flex-row items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-500">
                    A
                  </div>
                  <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
                    <div className="flex flex-row items-center">
                      <button className="flex h-8 w-10 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-800">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex flex-row items-center">
          <div className="flex h-12 w-full flex-row items-center rounded-3xl border px-2">
            <button className="ml-1 flex h-10 w-10 items-center justify-center text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            <div className="w-full">
              <input
                type="text"
                className="flex h-10 w-full items-center border border-transparent text-sm focus:outline-none"
                placeholder="Type your message...."
              />
            </div>
            <div className="flex flex-row">
              <button className="flex h-10 w-8 items-center justify-center text-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                </svg>
              </button>
              <button className="ml-1 mr-2 flex h-10 w-8 items-center justify-center text-gray-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="ml-6">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-indigo-800 hover:bg-gray-300">
              <svg
                className="-mr-px h-5 w-5 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
