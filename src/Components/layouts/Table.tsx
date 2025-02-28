import { useState, useEffect } from "react";

import { TeamMember } from "Types/Members";
import { MobileTable } from "Components/MobileTable";
import { DesktopTable } from "Components/DesktopTable";
import { useFilter } from "Components/Contexts/FilterContext";
import { fetchDataFromAPI } from "Utils/FetchData";

export function Table() {
  const { filter } = useFilter();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_URL_API;
    console.log(apiUrl);

    if (!apiUrl) {
      console.error("API URL não está definida");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const jsonData = await fetchDataFromAPI(apiUrl);
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter((member) =>
    Object.values(member).some((value) =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="w-full rounded-xl  ">
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <DesktopTable data={filteredData} />{" "}
          <MobileTable data={filteredData} />
        </>
      )}
    </div>
  );
}
