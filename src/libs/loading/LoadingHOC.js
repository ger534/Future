import React, { } from 'react';

import Loading from './loading'

export const LoadingHOC = (WrappedText) => {
  function HOC(props) {
    const [loading, setLoading] = React.useState(false)

    return (
      <>
        {loading && <Loading />}
        {<WrappedText {...props} setLoading={setLoading} loading={loading} />}
        {/*text === "error" &&
          <div style={{ display: "flex", flexDirection: "column", alignContent: "stretch", alignItems: "center" }} > <WarningIcon fontSize="large" /> Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web </div>*/}
      </>
    )
  }

  return HOC;

}
//"Las fuerzas del universo han conspirado contra ti y se ha generado un error en el sitio web"
export default LoadingHOC;