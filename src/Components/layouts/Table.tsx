import React, { useState, useEffect } from "react";

import { TeamMember } from "Types/Members";
import { MobileTable } from "Components/MobileTable";
import { DesktopTable } from "Components/DesktopTable";
import { useFilter } from "Components/Contexts/FilterContext";

export function Table() {
  const { filter } = useFilter();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<TeamMember[]>([]);

  const fetchData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_URL_API;
      if (!apiUrl) {
        throw new Error("Api não está definida");
      }

      const response = await fetch(apiUrl);

      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
