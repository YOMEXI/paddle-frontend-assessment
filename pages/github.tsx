import axios from "axios";
import React, { useEffect, useState } from "react";
import GithubCard from "../components/Shared/GithubCard";
import { GithubTypes } from "../components/Types";

const github = () => {
  const [result, setResult] = useState<any>({});
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    );

    setResult(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {result
        ? result?.items?.map((result: GithubTypes, i: any) => (
            <GithubCard
              key={i}
              name={result.name}
              description={result.description}
              stars={result.stargazers_count}
              issues={result.open_issues}
              owner={result.owner}
            />
          ))
        : ""}
    </div>
  );
};

export default github;
