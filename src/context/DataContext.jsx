import { createContext, useContext, useEffect, useState } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch("https://dev.to/api/articles");
      if (!result.ok) {
        setError(true);
        return;
      }
      const data = await result.json();
      setData(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dataContext.Provider value={{ error, data, loading }}>
      {" "}
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => {
  return useContext(dataContext);
};
