import { useState } from "react";
import { TeamMember } from "Types/Members";
import { formatDate } from "Utils/FormatDate";
import { formatPhone } from "Utils/FormatPhone";

interface MobileTableProps {
  data: TeamMember[];
}

export function MobileTable({ data }: MobileTableProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="md:hidden rounded-t-md overflow-hidden border-collapse">
      <div className="bg-[#0500FF] text-white py-5 px-3 flex pr-6 justify-between items-center">
        <div className="flex text-white text-[16px] font-medium ">
          <h2 className="w-16">FOTO</h2>
          <h2 className="pl-2">NOME</h2>
        </div>
        <div className="w-3 h-3 rounded-full bg-white items-end  "></div>
      </div>
      <div>
        {data.length === 0 ? (
          <div className="w-full h-[20rem] bg-white flex items-center justify-center ">
            <p className="text-gray-500 animate-pulse text-lg">
              Não foi encontrado nenhum resultado.
            </p>
          </div>
        ) : (
          data.map((member) => (
            <div
              key={member.id}
              className="border-b border-black/20     bg-white text-[16px] font-[400] text-[#1C1C1C]"
            >
              <button
                onClick={() => toggleExpand(member.id)}
                className="flex items-center w-full p-4 hover:bg-gray-50 focus:outline-none"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt=""
                  className="w-10 h-10 rounded-full mr-6"
                />
                <span className="flex-1 text-left">{member.name}</span>
                <svg
                  className={`h-7 w-7 text-[#0500FF] transform transition-transform ${
                    expandedId === member.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {expandedId === member.id && (
                <div className="px-4 pb-4 pt-1 space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm divide-y divide-dashed ">
                    <span className="font-medium text-left text-[16px]">
                      Cargo
                    </span>
                    <span className="text-right font-[400] text-[16px] text-[#1C1C1C]">
                      {member.job}
                    </span>
                    <span className="font-medium text-left text-[16px]">
                      Data de Admissão
                    </span>
                    <span className="text-right font-[400] text-[16px] text-[#1C1C1C]">
                      {formatDate(member.admission_date)}
                    </span>
                    <span className="font-medium text-left text-[16px]">
                      Telefone
                    </span>
                    <span className="text-right font-[400] text-[16px] text-[#1C1C1C] ">
                      {formatPhone(member.phone)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
