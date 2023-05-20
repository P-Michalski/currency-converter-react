import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    margin: 50px auto;
`;

export const StyledForm = styled.form`
    padding: 20px 20px;
`;

export const Fieldset = styled.fieldset`
    border: 2px solid rgb(37, 37, 37);
    border-radius: 20px;
    background-color: white;
`;

export const Legend = styled.legend`
    padding: 5px;
    background-color: rgb(141, 233, 236);
    border: 2px solid black;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 700;
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

export const Item = styled.li`
    padding: 10px;
`;

export const Button = styled.button`
    width: 150px;
    padding: 5px;
    background-color: hsl(182, 71%, 74%);
    border-radius: 20px;
    box-shadow: 3px 3px 5px 0 #B3DDDB;
    font-family: 'Lato', sans-serif;
    font-size: 18px;

    &:hover {
        background-color: hsl(182, 71%, 54%);
        cursor: pointer;
    }
`;

export const InputBox = styled.input`
    border: 2px solid black;
    min-width: 190px;
    padding: 5px;
    margin-left: 5px;
`;
