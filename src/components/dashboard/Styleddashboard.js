import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: 20%;
  margin-left: 20%;
  margin-top: 10%;
`;
export const Table = styled.table`
  margin-top: 65px;
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-bottom: 5px;
  float: left;
  width: 100%;
  border-radius: 3px;
  color: #58626b;
  /* border-width: 1px; */
  /* border-style: solid;
  border-top-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-left-style: solid; */

  border-image: initial;
  text-align: center;
  th,
  td {
    padding: 0.75rem;
    vertical-align: top;
    border-color: rgb(228, 231, 238);
    border-bottom: 1px solid rgb(228, 231, 238);
  }
  th {
    font-size: 15px;
    font-weight: bold;
  }
  td {
    font-size: 13px;
    font-weight: 200;
    line-height: 0.75rem;
  }
  i {
    cursor: pointer;
    margin-right: 10px;
  }
  .fa-trash {
    color: red;
  }
  .fa-pencil {
    color: darkgrey;
  }
`;
export const Img = styled.img`
  width: 35px;
  margin-top: -10px;
  height: 35px;
  border: 1px solid lightgray;
  border-radius: 50%;
`;
