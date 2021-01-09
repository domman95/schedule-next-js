import styled from "styled-components";
import { workers } from "../../fakeData/data";

const StyledWorkerCheckbox = styled.div`
  background-color: var(--white);
  border-radius: 8px;
  grid-column: 1 / 4;
  grid-row: 9 / -1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;

  ul {
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 60px);
    border-radius: 6px;
    top: 50px;
    overflow-y: auto;
    background-color: var(--bgcColor);

    li {
      display: flex;
      align-items: center;
      padding: 5px;
      list-style: none;
      border-bottom: 1px solid #cecece;
      gap: 10px;

      .sqr {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        border: 1px solid var(--blue);
        background-color: var(--white);
      }
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 10px;
  grid-column: 1 / -1;
  grid-row: 1 / 2;

  h3 {
    font-size: 18px;
  }

  .addWorker {
    border: none;
    background-color: transparent;
    font-size: 24px;
    outline: none;
    cursor: pointer;
  }
`;

export default function WorkersCheckbox() {
  return (
    <StyledWorkerCheckbox>
      <Header>
        <h3>Workers</h3>
        <button className='addWorker'>+</button>
      </Header>
      <ul>
        <li>
          <div className='sqr' />
          <p>All</p>
        </li>
        {workers.map(({ id, name }) => (
          <li key={id}>
            <div className='sqr' />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </StyledWorkerCheckbox>
  );
}
