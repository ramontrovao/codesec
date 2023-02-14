import { ClockContainer, ClockSection } from "./styles";

export function Clock() {
  return (
    <ClockSection>
      <ClockContainer>
        <strong>O evento começa em:</strong>

        <div>
          <div>
            <strong>00</strong>

            <span>dias</span>
          </div>

          <div>
            <strong>00</strong>

            <span>dias</span>
          </div>

          <div>
            <strong>00</strong>

            <span>horas</span>
          </div>
        </div>
      </ClockContainer>
    </ClockSection>
  );
}
