import { useState } from 'react';
import Sidebar from '../components/Sidebar/SideBar';

import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header openMenu={openMenu} />

      <Sidebar />
      <Sidebar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;