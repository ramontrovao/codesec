import { Calendar, Download, Medal, Monitor, PencilLine } from "phosphor-react";
import { AdvantageSection } from "./styles";

export function Advantages() {
  return (
    <AdvantageSection>
      <div>
        <div>
          <Calendar size={25} />
        </div>

        <p>14 há 17 de setembro</p>
      </div>

      <div>
        <div>
          <Monitor size={25} />
        </div>

        <p>100% online e gratuito</p>
      </div>

      <div>
        <div>
          <PencilLine size={25} />
        </div>

        <p>Aulas práticas</p>
      </div>

      <div>
        <div>
          <Medal size={25} />
        </div>

        <p>Exclusividade no mercado</p>
      </div>

      <div>
        <div>
          <Download size={25} />
        </div>

        <p>Download das aulas</p>
      </div>
    </AdvantageSection>
  );
}
