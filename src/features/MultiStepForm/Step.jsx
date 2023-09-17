import { CheckIcon } from "@heroicons/react/24/solid";

const steps = [
  {
    id: "01",
    name: "Select a service",
    href: "#",
    status: 1,
  },
  {
    id: "02",
    name: "Product information",
    href: "#",
    status: 2,
  },
  {
    id: "03",
    name: "Product Description",
    href: "#",
    status: 3,
  },
];

export default function Step({ step }) {
  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="divide-y rounded-md border border-[#bababe] md:flex md:divide-y-0"
      >
        {steps.map((LpStep) => (
          <li key={LpStep.name} className="relative md:flex md:flex-1">
            {LpStep.status === step ? (
              <a
                href={LpStep.href}
                className="group flex items-center border-b-4 border-gray-900 md:w-56 lg:w-72"
              >
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5e575a] to-[#4f4f58] text-white">
                    <CheckIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-medium text-black">
                    {" "}
                    {LpStep.name}
                  </span>
                </span>
              </a>
            ) : LpStep.status !== step ? (
              <a
                href={LpStep.href}
                className="flex items-center px-6 py-4 text-sm font-medium"
                aria-current="step"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#bababe]">
                  <span className="text-[#6e6e77]">{LpStep.id}</span>{" "}
                  {/* Display "id" */}
                </span>
                <span className="ml-4 text-sm font-medium text-[#76767e]">
                  {LpStep.name}
                </span>
              </a>
            ) : (
              <a href={step.href} className="group flex items-center">
                <span className="flex items-center px-6 py-4 text-sm font-medium">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#bababe] group-hover:border-gray-400">
                    <span className="text-gray-500 group-hover:text-gray-900">
                      {step.id}
                    </span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                    {step.name}
                  </span>
                </span>
              </a>
            )}

            {step !== steps.length - 1 ? (
              <>
                <div
                  className="absolute right-0 top-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
