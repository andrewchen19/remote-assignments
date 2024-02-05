import Repo from "./Repo";

const RepoContainer = ({ data }) => {
  return (
    <main>
      {data.map((item) => {
        return <Repo key={item.id} {...item} />;
      })}
    </main>
  );
};

export default RepoContainer;
