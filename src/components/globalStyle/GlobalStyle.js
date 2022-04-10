import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: rgb(190, 190, 190);
 }
 
 .header{
     background-color: rgb(95, 95, 95);
     font-family: Arial, Helvetica, sans-serif;
     padding: 1%;
 }
 
 .header-name{
     padding-left: 2%;
     color: rgb(252, 219, 31);
 }
 
 .button-cart{
     margin-right: 1%;
     background-color: rgb(252, 219, 31);
     border: none;
 }
 
 .button-cart:active{
     background-color: white;
 }
 
 .footer{
     padding: 1%;
     background-color: black;
 }
 
 .footer-text{
     padding-left: 34%;
     color: white;
     align-items: center;
 }
 
 .modal-cart{
     background-color: rgb(148, 147, 147);
 }
 
 a{
     color:  rgb(252, 219, 31);
     text-decoration: none;
     font-weight: bolder;
 }
 
 a:hover{
     color: white;
 }
 
 .container{
     margin-top: 5%;
     margin-left: 14%;
     padding: 12%;
 }
 
 .form{
     border: solid white; 
     padding: 5%;
     background-color: white;
     border-left: solid rgb(252, 219, 31);
 }
`;