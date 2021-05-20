import styled from 'styled-components'

export const Container = styled.li`
   position: relative;
   font-size: 24px;
   border-bottom: 1px solid #ededed;
   &:hover {
      button {
         display: block;
      }
   }
   input {
      position: absolute;
      top: 0;
      left: 0;
      height: 30px;
      width: 30px;
      background-color: #fff;
      border: 1px solid #cacaca;
      border-radius: 50%;
      appearance: none;
   }
   input:checked {
      border-color: #a4ff9c;
   }
   .checkmark:after {
      content: '';
      position: absolute;
      display: none;
      left: 14px;
      top: 8px;
      width: 6px;
      height: 12px;
      border: solid #00c853;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
   }
   input:checked ~ .checkmark:after {
      display: block;
   }
   label {
      word-break: break-all;
      padding: 15px 60px 15px 15px;
      margin-left: 45px;
      display: block;
      line-height: 1.2;
      transition: color 0.4s;
      font-size: 22px;
      color: ${(props) => (props.status === true ? '#d9d9d9' : '#414141')};
      text-decoration: ${(props) => (props.status === true ? 'line-through' : 'none')};
   }
   button {
      display: none;
      position: absolute;
      top: 0;
      right: 10px;
      bottom: 0;
      width: 40px;
      height: 40px;
      margin: auto 0;
      font-size: 30px;
      color: #cc9a9a;
      margin-bottom: 11px;
      transition: color 0.2s ease-out;
      padding: 0;
      border: 0;
      background: none;
      &:hover {
         color: #af5b5e;
         cursor: pointer;
      }
      &:after {
         content: '×';
      }
   }
`
