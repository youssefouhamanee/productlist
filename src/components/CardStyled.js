import styled from "styled-components"

export const Table=styled.table`
    border-collapse: collapse;
    margin-left:10%; 
    margin-top:3%;
    

`
export const Td=styled.td`
    padding: .75rem;
    
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    &.card-empty{
        display:inline-table;
        border:none;
        position: absolute;
        align-items: center;
        justify-content: center;
        color:salmon;
        top:45%;
        left:40%;
    }
   
`
export const Img = styled.img`
    width:40px;
    height:40px;
    border:none;
    border-radius:50%;
`
export const Span= styled.span`
    &.price{
        background-color:#e4a27f;
        color:white;
        border-radius:10px;
        padding:3px;
        width:auto;
    }
`
export const I = styled.i`
    &.fa-trash{
        cursor: pointer;
        color:darkred;

    }
`