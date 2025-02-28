import { useFilter } from "Components/Contexts/FilterContext";

export function Filter() {
  const { setFilter } = useFilter();

  return (
    <div className="relative md:w-[300px]">
      <input
        type="text"
        placeholder="Pesquisar"
        onChange={(e) => setFilter(e.target.value)}
        className="shadow-md rounded-md py-4 px-5 w-full pr-12 placeholder:font-regular placeholder:text-xl"
      />
      <img
        src="/Icons/searchIcon.svg"
        alt="Buscar"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7"
      />
    </div>
  );
}
