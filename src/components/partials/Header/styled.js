import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1 {
      color: #f00;
    }
    .logo-2 {
      color: #0f0;
    }
    .logo-3 {
      color: #00f;
    }
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      alig-items: center;
      height: 40px;
    }

    li {
      margin-left: 20px;
      margin-right: 20px;
    }
    a,
   button {
      color: #000;
      font-size: 14px;
      border: 0;
      background: none;
      text-decoration: none;
      cursor: pointer;
      outline: none;

      &:hover {
        color: #999;
      }
      &.button {
        background-color: #ff8100;
        border-radius: 4px;
        color: #fff;
        padding: 5px 10px;
      }
      &.button:hover {
        background-color: #e57706;
      }
    }
  }
`;
