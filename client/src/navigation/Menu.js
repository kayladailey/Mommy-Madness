import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>
                <StyledLink to="/">Home</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/logout">Tasks</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/about">About</StyledLink>
            </li>
            <li onClick={close}>
                <StyledLink to="/youtube">Youtube</StyledLink>
            </li>
        </ul>
    </div>
);

//Styling
const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;