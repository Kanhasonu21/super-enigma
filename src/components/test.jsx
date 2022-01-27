import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

//custom hook
const useHackerApi = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('');
  const [loader, setLoader] = useState(false);
  useEffect(
    (_) => {
      const callAPI = async () => {
        try {
          setLoader(true);
          const {
            data: { hits },
          } = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${url}`
          );
          setData(hits);
          setLoader(false);
        } catch (err) {
          alert('Error happened');
        }
      };
      callAPI();
    },
    [url]
  );
  return [{ data, loader }, setUrl];
};

const Test = () => {
  const [searchValue, setSearchValue] = useState('');
  const [{ data, loader }, setUrl] = useHackerApi('');

  const onChangeInput = (e) => {
    setUrl(e.target.value);
  };
  const debounceAPI = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      const later = function () {
        timeout = null;
        func.apply(context, args);
      };
      timeout = setTimeout(later, wait);
    };
  };
  const optimisedDebounce = useCallback(debounceAPI(onChangeInput, 1000), []);
  return (
    <>
      <div>Custom Hooks Practice</div>
      <div>
        <input
          type='text'
          placeholder='enter any text'
          onChange={optimisedDebounce}
        />
      </div>

      {loader ? (
        <>Loading ....</>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.objectID}>
              <h1>{item.title}</h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Test;
