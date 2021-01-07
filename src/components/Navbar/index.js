import styled from "styled-components";
import logo from "../../assets/logo.svg";
import ActiveLink from "../ActiveLink";

const StyledNavbar = styled.nav`
  background: #ffffff;
  height: 60px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 20px;
  border-bottom: 1px solid #cecece;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-column: 1 / 5;
  gap: 10px;

  .svg {
    background: url(${logo}) no-repeat center/cover #4459f7;
    border-radius: 8px;
    width: 30px;
    height: 30px;
  }

  p {
    font-weight: bold;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  grid-column: 5 / 9;
  margin-left: 5px;

  a {
    position: relative;
    overflow: hidden;

    &.active::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background: var(--blue);
      left: 0;
      bottom: -2px;
      transform: translateX(0);
    }

    &.active {
      color: #4459f7;
      font-weight: bold;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 4px;
      background: var(--blue);
      left: 0;
      bottom: -2px;
      transform: translateX(-100%);
      transition: transform 0.3s;
    }

    &:hover::before {
      transform: translateX(0);
    }
  }
`;

const Profile = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  grid-column: 9 / -1;

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: url("https://images.unsplash.com/photo-1508602636771-613ba0112c30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")
      var(--blue) no-repeat center/cover;
  }

  .profileInfo {
    font-size: 12px;
    display: grid;

    .fullName {
      grid-row: 1 / 2;
    }

    .title {
      color: darkgrey;
      grid-row: 2 / 3;
    }

    p {
      font-weight: bold;
    }
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo>
        <div className="svg" />
        <p>Schedule</p>
      </Logo>
      <Links>
        <ActiveLink href="/" activeClassName="active">
          <a>Dashboard</a>
        </ActiveLink>
        <ActiveLink href="/calendar" activeClassName="active">
          <a>Calendar</a>
        </ActiveLink>
        <ActiveLink href="/customercards" activeClassName="active">
          <a>Customer cards</a>
        </ActiveLink>
      </Links>
      <Profile>
        <div className="circle" />
        <div className="profileInfo">
          <p className="fullName">John Smith</p>
          <p className="title">Owner</p>
        </div>
      </Profile>
    </StyledNavbar>
  );
}
