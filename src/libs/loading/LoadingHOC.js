import React, { useState } from 'react';

import Loading from './loading'

export const LoadingHOC = (WrappedText) => {
  function HOC(props) {
    const [loading, setLoading] = useState(false)

    return (
      <>
        {loading && <Loading />}
        {<WrappedText {...props} setLoading={setLoading} loading={loading} />}
      </>
    )
  }

  return HOC;

}
export default LoadingHOC;