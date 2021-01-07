import styled from "styled-components";
import CalendarBox from "../src/components/CalendarBox";
import Datepicker from "../src/components/Datepicker";
import Navbar from "../src/components/Navbar";
import WorkersCheckbox from "../src/components/WorkersCheckbox";

const Container = styled.div`
  flex: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  gap: 20px;
`;

export default function Calendar() {
  return (
    <>
      <Navbar />
      <Container>
        <Datepicker />
        <WorkersCheckbox />
        <CalendarBox />
      </Container>
    </>
  );
}
