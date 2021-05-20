import styled from 'styled-components'

export const Container = styled.footer`
   display: ${(props) => (props.length <= 0 ? 'none' : 'block')};
   color: #777;
   padding: 10px 15px;
   height: 20px;
   text-align: center;
   border-top: 1px solid #e6e6e6;
   &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      height: 50px;
      overflow: hidden;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
         0 17px 2px -6px rgb(0 0 0 / 20%);
   }
   span {
      float: left;
      text-align: left;
   }
`
