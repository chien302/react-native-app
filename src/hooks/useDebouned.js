import {View, Text} from 'react-native';
import {useState, useEffect} from 'react';
import React from 'react';

const useDebouned = (text, delay) => {
  const [value, setValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(text);
    }, delay);
    return () => clearTimeout(handler);
  }, [text]);
  return value;
};
export default useDebouned;
