import { useState, useEffect } from "react";
import { Title, RepoContainer, MoreButton } from "./components";
import axios from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const repoURL = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;

  useEffect(() => {
    async function fetchData(url) {
      try {
        const response = await axios.get(url);
        setData([...data, ...response.data]);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData(repoURL);
  }, [page]);

  // conditional rendering
  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>There was an error...</h1>;
  }

  console.log(data);

  return (
    <>
      <Title />
      <RepoContainer data={data} />
      <MoreButton setPage={setPage} />
    </>
  );
}

export default App;
