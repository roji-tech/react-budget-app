import styled from "styled-components";

const NewBudgetStyle = styled.div`
  position: fixed;
  inset: 0;
  top: ${({ show }) => (show ? 0 : "-100%")};
  z-index: ${({ show }) => (show ? 2 : -2)};
  background-color: #ffffff6a;
  background-color: #12111164;
  transition: all 0.4s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 10%; */
  /* display: ${({ show }) => (show ? "flex" : "none")}; */

  width: 100%;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  align-self: center;
  /* height: max-content; */

  > div {
    display: flex;
    flex-direction: column;
    padding: 2%;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    width: 90%;
    height: max-content;
    max-width: 800px;

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      h2 {
        align-self: flex-start;
        font-size: 30px;
      }

      .close {
        padding: 1px 4px;
        font-size: 10px;
        background-color: red;
        color: white;
        font-weight: 1000;
        text-transform: uppercase;
        border-radius: 10px;
        border: 1px solid red;
        cursor: pointer;

        :hover {
          color: black;
          background-color: transparent;
        }

        p {
          font-size: 30px;
          font-weight: 1000;
        }
      }
    }

    form {
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      flex-direction: column;
      gap: 30px;

      .inpDiv {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        width: 100%;
        flex-direction: column;

        label {
          padding: 10px 0;
          color: #0000009a;
          font-weight: 1000;
        }

        input {
          outline: none;
          padding: 10px;
          border: none;
          border-radius: 5px;
          font-size: 1.1em;
          background: #12111124;

          :focus {
            background: white;
            box-shadow: -1px -1px 1px 1px #12111164;
          }
        }
      }

      .btn {
        align-self: flex-end;
        padding: 8px 15px;
        border-radius: 10px;
        background-color: blue;
        font-weight: 1000;
        color: white;
        border: 2px solid blue;
        box-shadow: 4px 4px 1px 2px #12111164;
        transition: all 0.2s ease-out;

        :hover {
          color: black;
          background: white;
          box-shadow: -1px -3px 1px 1px #12111164;
        }
      }
    }
  }
`;

export default NewBudgetStyle;
