import styled from "styled-components";

const StyledDatepicker = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  grid-column: 1 / 4;
  grid-row: 1 / 9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

export default function Datepicker() {
  return <StyledDatepicker>Datepicker</StyledDatepicker>;
}
