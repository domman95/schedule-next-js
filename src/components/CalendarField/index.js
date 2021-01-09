import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const visits = [
  { day: "05", time: "09:00" },
  { day: "07", time: "08:00" },
  { day: "06", time: "07:30" },
];

const Field = styled.div``;

const Visit = styled.div`
  position: absolute;
  top: ${({ top }) => `calc(${top + 5}px)`};
  left: 5px;
  width: calc(100% - 10px);
  height: ${({ height }) => `calc(${height + 1 - 10}px)`};
  background-color: red;
`;

export default function CalendarField({ no, start }) {
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState(0);

  const myRef = useRef();

  useEffect(() => {
    setTop(myRef.current.offsetTop);
    setHeight(myRef.current.clientHeight * 2);
  }, [top]);

  return (
    <Field
      onClick={() => console.log(height)}
      className='field'
      ref={myRef}
      key={start}
    >
      {visits.map(({ day, time }) => {
        if (day === no && time === start) {
          return <Visit top={top} height={height} />;
        }
      })}
    </Field>
  );
}
