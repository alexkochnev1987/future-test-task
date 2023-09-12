import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const Layout = () => {
  return (
    <>
      <NavBar />
      <div className='min-vh-100 w-100 d-flex flex-column p-0'>
        <Outlet />
      </div>
    </>
  );
};
