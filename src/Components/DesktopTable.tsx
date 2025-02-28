import { TeamMember } from "../Types/Members";
import { formatDate } from "Utils/FormatDate";
import { formatPhone } from "Utils/FormatPhone";

interface DesktopTableProps {
  data: TeamMember[];
}

export function DesktopTable({ data }: DesktopTableProps) {
  return (
    <table className="w-full shadow-xl rounded-t-lg border-collapse hidden md:table overflow-hidden">
      <thead className="bg-[#0500FF] text-white text-[16px] font-medium">
        <tr>
          <th className="p-4 pl-10 text-left">FOTO</th>
          <th className="p-4 text-left">NOME</th>
          <th className="p-4 text-left">CARGO</th>
          <th className="p-4 text-left">DATA DE ADMISSÃO</th>
          <th className="p-4 text-left">TELEFONE</th>
        </tr>
      </thead>

      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={6} className="col-span-5 h-[20rem] bg-white ">
              <p className="text-gray-500 animate-pulse text-lg">
                Não foi encontrado nenhum resultado.
              </p>
            </td>
          </tr>
        ) : (
          data.map((member: TeamMember) => (
            <tr
              key={member.id}
              className="border-b border-black/20 bg-white text-[16px] font-[400] text-[#1C1C1C]"
            >
              <td className="p-4 pl-10">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="p-4 text-left">{member.name}</td>
              <td className="p-4 text-left">{member.job}</td>
              <td className="p-4 text-left">
                {formatDate(member.admission_date)}
              </td>
              <td className="p-4 text-left">{formatPhone(member.phone)}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
