import React, { useState } from 'react';
import Preloader from '../components/Preloader';

const WithLoading = (WrappedComponent: any) => {
  function HOC(props: any) {
    const [isLoading, setIsLoading] = useState(true);

    const setLoading = (isLoadingComponent: boolean) => setIsLoading(isLoadingComponent);

    return (
      <>
        {isLoading && <Preloader />}
        <WrappedComponent {...props} setLoading={setLoading} />
      </>
    );
  }

  return HOC;
};

export default WithLoading;
