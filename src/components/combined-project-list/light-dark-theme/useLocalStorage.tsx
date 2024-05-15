import { useEffect, useState } from "react";

const useLocalStorage = (key: string, defaultValue: string)  => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      // convierto a objeto JSON la variable currentValue, dado que en el localstorage
      // solamente se puede guardar JSON string, que es de donde la estamos recuperando.
      
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      console.log(error); 
      
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    //Ahora, una vez que tengo recuperado el valor que había en localStorage,
    //sincronizo mi componente con el del localStorage y utilizo
    //stringify para pasarlo a JSON string.
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
