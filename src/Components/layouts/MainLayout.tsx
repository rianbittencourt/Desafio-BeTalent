import { Filter } from "Components/Filter";
import { Table } from "Components/layouts/Table";
export default function MainLayout() {
  return (
    <div className="px-5 md:px-20 mt-10">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between md:items-center md:gap-0 gap-5 md:flex-row flex-col">
          <h2 className="font-semibold text-2xl text-left md:text-center">
            {" "}
            Funcionários
          </h2>
          <Filter />
        </div>
        <Table />
      </div>
    </div>
  );
}
