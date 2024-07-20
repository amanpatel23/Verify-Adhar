import { useState, useEffect, useContext } from "react";
import App, { AppContext } from "./_app";

interface Data {
  id: number;
  title: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { loggedIn } = useContext(AppContext);

  return (
    <div className="p-8">
      <div className="text-lg font-rajdhani">
        {loggedIn ? "You Are LoggedIn" : "You are not LoggedIn"}
      </div>
    </div>
  );
};

export default Home;
