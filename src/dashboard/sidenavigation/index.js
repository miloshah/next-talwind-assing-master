import SidenavItems from './items';
import SidenavHeader from './header';
import css from './index.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
  close: `hidden`,
  container: `pb-32 lg:pb-12`,
  open: `absolute w-8/12 z-40 sm:w-5/12`,
  default: `bg-lightModeBg dark:bg-darkModeBg h-screen overflow-y-auto top-0 lg:flex lg:relative lg:z-auto`,
};

export const SideNavigation = ({ mobilePosition }) => {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
};

export default SideNavigation;
