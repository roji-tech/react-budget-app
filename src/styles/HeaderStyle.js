import styled from "styled-components";

const HeaderStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 30px;
  }

  min-width: 100%;
  height: max-content;
  /* background: #f0f8ff; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  .btns {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    user-select: none;
    text-align: center;

    p {
      padding: 10px;
      background: #f0f8ff;
      cursor: pointer;
      border-radius: 5px;

      :hover {
        background: whitesmoke;
      }

      :active {
        background: aliceblue;
      }
    }

    .add {
      background-color: #66cdf0;
      
      :hover {
        background-color: #add8e6;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .btns {
      flex-direction: column;
      margin: 10px;

      p {
      }
    }
  }
`;

export default HeaderStyle;
