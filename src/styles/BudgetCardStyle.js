import styled from "styled-components";

const BudgetCardStyle = styled.div`
  width: 400px;
  aspect-ratio: ${({ showMax }) => (!showMax ? "2/1" : "3/1")};
  aspect-ratio: ${({ hideButtons, showMax }) =>
    hideButtons | showMax ? "3.5/1" : "2/1"};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ values: { exceeded } }) =>
    exceeded ? "#f9d8d8" : "aliceblue"};
  background: ${({ showMax }) => showMax && "aliceblue"};
  font-size: 1em;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 10px 1px #18252c60;

  .title {
    display: flex;
    justify-content: space-between;

    p {
      small {
        opacity: 0.7;
      }
    }
  }

  .progress_bar {
    border-radius: 200px;
    height: 15px;
    background-color: white;
    width: 100%;
    min-width: 100%;
    position: relative;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid rgba(3, 54, 79, 0.3);
    overflow: hidden;

    ::before {
      position: absolute;
      inset: 0;
      content: "";
      background-color: ${({ values: { color } }) => color};
      border-radius: 200px;
      width: 0%;
      width: ${({ values: { width } }) => width + "%"};
      max-width: 100%;
      z-index: 1;
    }

    ::after {
      position: absolute;
      inset: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 30%;
      content: "";
      background-color: white;
      border-radius: 200px;
      width: 0%;
      width: ${({ values: { width2 } }) => width2 + "%"};
      max-width: 100%;
      z-index: 1;
    }
  }

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    user-select: none;
    text-align: center;
    align-self: flex-end;

    p {
      box-sizing: border-box;
      border: 2px solid white;
      padding: 7px;
      background: whitesmoke;
      cursor: pointer;
      border-radius: 5px;
      background: whitesmoke;
      border: 1px solid #cecece;
      box-shadow: 1px 1px 10px 0 #cecece;

      :hover {
        background: #cecece;
      }

      :active {
        background: aliceblue;
      }
    }

    .add {
      background-color: #66cdf0;
      border: 1px solid #66cdf0;

      :hover {
        background-color: #add8e6;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export default BudgetCardStyle;
