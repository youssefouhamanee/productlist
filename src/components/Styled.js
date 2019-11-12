import styled from 'styled-components';
export const Div = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right:auto;
  margin-left:auto;
  @media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
`
export const Row = styled.div`
     display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding:20px;
`
export const Col = styled.div`
position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 100px;
`

export const Table = styled.table`
border-collapse: collapse;
border: 1px solid whitesmoke;
background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border-radius: 3;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white;
    height: 48px;
    padding: 0 30px;
`

export const Ul= styled.ul`
    border:1px solid whitesmoke;
    background-color:whitesmoke;
    padding:30px;
    &.center{
        padding: 1em;
        position: absolute;
        top: 30%;
        left: 40%;
        margin-right: -50%;
    }
`
export const Li= styled.li`
list-style-type:none;
`
export const Input=styled.input`
    padding:0 0 0 0.7rem;
    width:50px;
  font-size: 1rem;
  line-height: 1.5;
  color: #ffb1b1;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ffb1b1;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`
// export const Span=styled.span`
    
//     cursor:pointer;
//     &.btnRefresh{
//        text-align:center;
//     }
//     &.addBtn{
//        margin-left:45%;
//     }
//     &.stopBtn{
//         margin-left:45%;
//     }
// `   
export const Button=styled.button`
    cursor:pointer;
    margin:50px;
`
export const Item= styled.div`
    border:1px solid #ffb1b1;
    border-radius:3px;
    width:200px;
    height:200px;
    margin-left:5px;
    box-shadow: 0 0 2px 0.5px rgba(255, 105, 135, .3);
    padding:30px;
    display:block;
    float:left;
    position:relative;
    background-color:white;
`
export const Cardsymb=styled.div`
    background-color:#9B481D;
    color:white;
    width:30px;
    height:30px;
    padding:4px 5px 5px 9px;
    position:absolute;
    margin:0 0 0 135px;
    border-radius:50%;
    top: 12px;
    right: 5px;
    cursor:pointer;
    
    .fa-ban{
        background-color:#9B481D;
        opacity:0.5;
    }
`
export const Cardprice=styled.span`
background-color:#9B481D;
color:white;
    width:auto !important;
    height:30px;
    padding:4px 5px 5px 9px;
    position:absolute;
    margin:0 0 0 135px;
    border-radius:0 30%;
    bottom: 12px;
    right: 0;
    cursor:pointer;
    opacity: 0.5;
`
