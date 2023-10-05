import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HomeIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
export default function BreedTitle() {
  const { game } = useParams();
  return (
    <div>
      <div>
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-0 sm:space-x-2">
            <li>
              <div className="flex">
                <a
                  href="/"
                  className="text-xs font-medium text-gray-500 hover:text-gray-700 sm:text-sm"
                >
                  <HomeIcon
                    className="mr-1 h-[18px] w-[18px] shrink-0"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="/dashboard"
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href={`/dashboard/${game}`}
                  aria-current="page"
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {game.charAt(0).toUpperCase() + game.slice(1)}
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mb-4 mt-5 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Valorant Accounts
          </h2>
        </div>
      </div>
    </div>
  );
}
