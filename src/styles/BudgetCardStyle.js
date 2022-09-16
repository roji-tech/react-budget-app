import styled from 'styled-components';

const BudgetCardStyle = styled.div`
  width: 400px;
  aspect-ratio: 2/1;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ values: { exceeded } }) => exceeded ? "#f9d8d8" : "aliceblue"};
  font-size: 1em;

  .title {
    display: flex;
    justify-content: space-between;

    p {
      small {
        opacity: .7;
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
    transition: all .3s ease-in-out;

    ::after {
      position: absolute;
      inset: 0;
      content: "";
      background-color: ${({ values: { color } }) => color};
      border-radius: 200px;
      width: ${({ values: { width } }) => width + "%"};
      max-width: 100%;
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
    width: 350px;
  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }

`

export default BudgetCardStyle