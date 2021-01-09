import styled from "styled-components";
import { useAppContext } from "../../context/state";
import next from "../../assets/next.svg";
import prev from "../../assets/prev.svg";

const StyledDatepicker = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  grid-column: 1 / 4;
  grid-row: 1 / 9;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  h3 {
    font-size: 18px;
  }

  .nextPrevDate {
    display: flex;
    gap: 10px;

    button {
      border: none;
      background-color: transparent;
      width: 18px;
      height: 18px;

      img {
        width: 100%;
      }
    }
  }
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .weekDays {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: var(--grey);
    font-weight: bold;
    font-size: 12px;
    opacity: 0.6;

    div {
      padding: 5px 10px;
      flex: 1;
    }
  }

  .weeks {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .day {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      text-align: center;
      font-size: 14px;
      padding: 5px 10px;
    }

    .currentDay {
      font-weight: bold;
      color: var(--blue);
    }

    .otherMonth {
      color: red;
    }
  }

  .currentWeek {
    background-color: var(--bgcColor);
    border-radius: 14px;
  }
`;

export default function Datepicker() {
  const { dateValue } = useAppContext();
  const startDay = dateValue.clone().startOf("month").startOf("week");
  const endDay = dateValue.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];

  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }

  return (
    <StyledDatepicker>
      <Header>
        <h3>{dateValue.format("MMMM YYYY")}</h3>
        <div className='nextPrevDate'>
          <button className='prev'>
            <img src={prev} alt='' />
          </button>
          <button className='next'>
            <img src={next} alt='' />
          </button>
        </div>
      </Header>
      <CalendarWrapper>
        <div className='weekDays'>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {calendar.map((week) => (
          <div
            className={
              week[0].clone().startOf("week").format("DD.MM.YYYY") ===
              dateValue.clone().startOf("week").format("DD.MM.YYYY")
                ? "weeks currentWeek"
                : "weeks"
            }
          >
            {week.map((day) => (
              <div
                className={
                  day.format("DD.MM.YYYY") === dateValue.format("DD.MM.YYYY")
                    ? "day currentDay"
                    : "day"
                }
              >
                {day.format("D").toString()}
              </div>
            ))}
          </div>
        ))}
      </CalendarWrapper>
    </StyledDatepicker>
  );
}
