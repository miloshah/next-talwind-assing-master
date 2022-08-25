import { useToggle } from '../provider/context';
import dynamic from 'next/dynamic';

const ThemeSwitchWithNoSSR = dynamic(
  () => import('../../components/themeSwitch'),
  {
    ssr: false,
  }
);

export default function TopNavigation() {
  const { toggle } = useToggle();
  return (
    <header className="bg-lightModeBg dark:bg-darkModeBg h-20 items-center relative w-full z-10">
      <div className="flex flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">
            <div className="flex group h-full items-center relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <ThemeSwitchWithNoSSR />
          </div>
        </div>
      </div>
    </header>
  );
}
