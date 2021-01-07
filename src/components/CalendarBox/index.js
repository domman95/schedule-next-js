import styled from "styled-components";
import prev from "../../assets/prev.svg";
import next from "../../assets/next.svg";
import { hours } from "../../fakeData/data";
import CalendarField from "../CalendarField";

const days = [
  {
    text: "tuesday",
    no: "17",
  },
  {
    text: "wednesday",
    no: "18",
  },
  {
    text: "thursday",
    no: "19",
  },
  {
    text: "friday",
    no: "20",
  },
  {
    text: "saturday",
    no: "21",
  },
];

const StyledCalendar = styled.div`
  grid-column: 4 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(12, 1fr);
`;

const Title = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  grid-column: 2 / -1;
  grid-row: 1 / 2;

  .currentDateAndArrowsBox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-column: 1 / 7;
    gap: 10px;

    h2 {
      font-weight: bold;
      font-size: 24px;
      white-space: nowrap;
    }

    .arrows {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-self: flex-start;
      gap: 10px;
    }

    .arrowButton {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      width: 15px;
      height: 15px;
      outline: none;
      cursor: pointer;

      &:active {
        opacity: 0.6;
      }

      img {
        width: 100%;
      }
    }
  }

  .calendarMainButtons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-column: 9 / -1;
    gap: 10px;

    .viewSelect {
      outline-color: var(--blue);
      background-color: var(--white);
    }

    .addVisit {
      color: white;
      outline: none;
      word-spacing: 12px;
      white-space: nowrap;
      background-color: var(--blue);

      &:active {
        opacity: 0.6;
      }
    }

    .viewSelect,
    .addVisit {
      border: none;
      cursor: pointer;
      font-weight: bold;
      flex: 1;
      border-radius: 6px;
      padding: 10px 5px;
    }
  }
`;

const CalendarWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(auto-fill, 100px);
  overflow: auto;
`;

const HoursColumn = styled.div`
  .hour {
    display: flex;
    justify-content: flex-end;
    padding: 10px 10px 0 0;
    height: 100px;
    color: var(--grey);
    opacity: 0.6;
    font-weight: bold;
    font-size: 14px;
  }
`;

const WorkersColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column: 2 / -1;

  .column:first-child .label::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background-color: #f5f6fa;
  }

  .column:first-child .label {
    border-radius: 8px 0 0 0;
  }

  .column {
    position: relative;
    display: grid;
    grid-template-rows: repeat(auto-fill, 100px);
    height: 100%;

    .label {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      position: sticky;
      top: 0;
      left: 0;
      background-color: #fbfbfc;
      z-index: 3;

      .numberOfDay {
        color: var(--grey);
        font-size: 32px;
        font-weight: bold;
      }

      .textOfDay {
        color: var(--grey);
        text-transform: uppercase;
        font-size: 12px;
        opacity: 0.6;
        font-weight: bold;
      }
    }

    .field {
      border-left: 1px solid #cecece;
      border-top: 1px solid #cecece;
      height: 100px;
      width: 100%;
      background-color: var(--white);
    }
  }

  .column:first-child .field {
    border-left: none;
  }

  .column .field:nth-child(2) {
    border-top: none;
  }
`;

export default function CalendarBox() {
  return (
    <StyledCalendar>
      <Title>
        <div className="currentDateAndArrowsBox">
          <h2>December 17-21, 2019</h2>
          <div className="arrows">
            <button className="prevDate arrowButton">
              <img src={prev} alt="" />
            </button>
            <button className="nextDate arrowButton">
              <img src={next} alt="" />
            </button>
          </div>
        </div>
        <div className="calendarMainButtons">
          <select defaultValue="Week" className="viewSelect">
            <option name="week" value="week">
              Week
            </option>
            <option name="day" value="day">
              Day
            </option>
          </select>
          <button className="addVisit">+ Add</button>
        </div>
      </Title>
      <CalendarWrapper>
        <HoursColumn>
          <div className="hour" />
          {hours.map(({ start }) => (
            <div className="hour">{start}</div>
          ))}
        </HoursColumn>
        <WorkersColumn>
          {days.map(({ text, no }) => (
            <div className="column" key={no}>
              <div className="label">
                <p className="numberOfDay">{no}</p>
                <p className="textOfDay">{text}</p>
              </div>
              {hours.map(({ start }) => (
                <CalendarField no={no} start={start} />
              ))}
            </div>
          ))}
        </WorkersColumn>
      </CalendarWrapper>
    </StyledCalendar>
  );
}
