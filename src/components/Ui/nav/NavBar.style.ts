import styled from "styled-components";

export const StyledNavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 44px;

  span {
    margin-right: 12px;
    border-right: 1px solid;
    padding: 0 32px;
    color: white;
    cursor: pointer;
  }

  a:first-child {
    margin-right: 12px;
    border-right: 1px solid;
    padding: 0 32px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
  }

  a:nth-child(8) span {
    border: 0;
  }

  .toggleCover {
    margin: 20px 0 0 80px;
  }

  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .button {
    position: relative;
    top: 50%;
    width: 74px;
    height: 36px;
    margin: -20px auto 0 auto;
    overflow: hidden;
  }

  .button.r,
  .button.r .layer {
    border-radius: 100px;
  }

  .button.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: white;
    transition: 0.3s ease all;
    z-index: 1;
  }

  #button-1 .knobs:before {
    content: "Light";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: black;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #button-1 .checkbox:checked + .knobs:before {
    content: "Dark";
    color: black;
    left: 42px;
    background-color: white;
  }

  #button-1 .checkbox:checked ~ .layer {
    background-color: black;
    border: 1px solid white;
  }

  #button-1 .knobs,
  #button-1 .knobs:before,
  #button-1 .layer {
    transition: 0.3s ease all;
  }
`;
