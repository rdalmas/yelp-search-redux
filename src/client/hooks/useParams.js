import { useState } from 'react';

function useParams(defaultParams) {
  const [params, setParams] = useState(defaultParams);

  function updateParams(param, value) {
    setParams(prevState => {
      return {
        ...prevState,
        [param]: value
      }
    })
  }

  return { params, updateParams };
}

export default useParams;
