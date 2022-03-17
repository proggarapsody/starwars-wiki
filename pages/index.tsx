import { ThemeProvider, useTheme } from 'next-themes';
import React from 'react';
import Header from '../components/Header/Header';

import MainLayout from '../components/MainLayout';

import TryItSection from '../components/sections/TryItSection/TryItSection';
import MenuSection from '../components/sections/MenuSection/MenuSection';
import ExampleSection from '../components/sections/ExampleSection/ExampleSection';
const MainPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Header />
      <MainLayout>
        <TryItSection />
        <MenuSection />
        <ExampleSection />
      </MainLayout>
    </>
  );
};

export default MainPage;
