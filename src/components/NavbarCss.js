import styled from "styled-components";

export const Navbar = styled.div`
  /* margin:0;
    padding:0;
    width:70%;
    height:60px; */
  background: #ff8e53;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;
export const Ul = styled.ul`
  list-style-type: none;
  display: block;
`;
export const Li = styled.li`
  float: left;
  color: #fff;
  margin-left: 12px;
  padding: 10px;
  .fa .fa-shopping-cart {
    float: right;
  }
  .brand {
    text-decoration: none;
    color: white;
    font-weight: 400;
  }
`;
export const Span = styled.span`
  float: right;
  padding: 18px 30px 0 0;
  color: white;
  position: relative;
  .NavLink {
    text-decoration: none;
    color: white;
  }
`;
export const Small = styled.small`
  padding: 0.5px 4px;
  border-radius: 50%;
  position: absolute;
  color: white;
  background-color: #9b481d;
`;
