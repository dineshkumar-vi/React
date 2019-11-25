import styled from "styled-components";
import { VIEWPORTS } from "../../Utilities/AppConstants";
import "./index.css";



export const LoginWrapper = styled.div.attrs({
  className: "card"
})`
  border: 1px solid #999;
  background: ${(props) => props.bgColor || "green"}

  @media (max-width: ${VIEWPORTS.XS}px) {
    width: 100% !important;
    margin: 20px 40px 20px;
  }
`;
export const LoginHeader = styled.div.attrs({
  className: "card-header"
})`
  color: black;
`;

export const LoginBody = styled.div.attrs({
  className: "card-body"
})`
  color: black;
`;

export const InputGroup = styled.div.attrs({
  className: "form-group"
})`
`;

export const Label = styled.label.attrs({
  className: "form-label"
})``;

export const InputBox = styled.input.attrs({
  className: "form-control"
})``;

export const InfoText = styled.p.attrs({
  className: "info-text"
})`
  a{
    color: green !important;
  }
`;

export const ButtonContainer = styled.div.attrs({
  className: "button-container"
})`
  text-align: center;
`;

export const ButtonNew = styled.button.attrs({
  className: "btn btn-primary btn-lg text-center",
})`
  background: ${({ theme }) => theme.primary};
  border-color: ${({ theme }) => theme.primary};
  width: 60%;
  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;
