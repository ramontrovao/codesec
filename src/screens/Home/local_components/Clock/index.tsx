import { Span } from "@/components/Span/styles";
import { Strong } from "@/components/Strong/styles";
import { ClockContainer, ClockSection } from "./styles";

export function Clock() {
  return (
    <ClockSection>
      <ClockContainer>
        <Strong colorVariant="white100" fontVariant="medium-lg">
          O evento começa em:
        </Strong>

        <div>
          <div>
            <Strong colorVariant="white100" fontVariant="large-sm">
              00
            </Strong>

            <Span colorVariant="white100" fontVariant="medium-md">
              dias
            </Span>
          </div>

          <div>
            <Strong colorVariant="white100" fontVariant="large-sm">
              00
            </Strong>

            <Span colorVariant="white100" fontVariant="medium-md">
              dias
            </Span>
          </div>

          <div>
            <Strong colorVariant="white100" fontVariant="large-sm">
              00
            </Strong>

            <Span colorVariant="white100" fontVariant="medium-md">
              horas
            </Span>
          </div>
        </div>
      </ClockContainer>
    </ClockSection>
  );
}
