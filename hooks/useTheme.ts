import { useLayoutEffect, useState } from 'react';
// let isDarkTheme;
// // if (window: Window) {
// //   isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
// // }
// const isClient = typeof window !== 'undefined';
// const defaultValue = isDarkTheme ? 'dark' : 'light';
// export const useTheme = () => {
//   const [theme, setTheme] = useState(
//     (isClient && localStorage.getItem('app-theme')) || defaultValue
//   );

//   useLayoutEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     if (isClient) {
//       localStorage.setItem('app-theme', theme);
//     }
//   }, [theme]);

//   return { theme, setTheme };
// };
