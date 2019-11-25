import styled from "styled-components";

export const FormModal = styled.form`
  border: 1px solid darkred;
  display: block;
  border-radius: 5px;
  width: auto;
  height: auto;
  padding: 10px;
  float: right;
  right: 30px;
  bottom: 80px;
  background-color: #ff8e53;
  position: fixed;
  -webkit-transition-property: height; /* Safari */
  -webkit-transition-duration: 5s; /* Safari */
  transition-property: height;
  transition-duration: 5s;
  .form-control {
    display: block;
    font-weight: 300;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    background-clip: padding-box;
    margin-top: 20px;
    width: 250px;
    border-bottom: 1px solid #fff;
    color: #fff;
    outline: 0px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-radius: 0;
    padding: 8px;
    font-size: 0.7rem;
    background-color: #ff8e53;
    &::placeholder {
      color: #fff;
    }
  }
  .form__error {
    color: whitesmoke;
    font-size: 12px;
  }
  .btn {
    display: inline-block;
    font-weight: 300;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.75rem;
    margin-top: 20px;
    font-size: 0.6rem;
    float: right;
    line-height: 0.5;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .btn:hover {
    color: #212529;
    text-decoration: none;
    border-radius: none;
  }

  .btn:focus,
  .btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
  .btn-success {
    border-radius: none;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }

  .btn-success:hover {
    color: #fff;
    background-color: #218838;
    border-color: #1e7e34;
  }

  .btn-success:focus,
  .btn-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
  }
`;
