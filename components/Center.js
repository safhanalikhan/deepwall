import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Center({children}) {
  return (
    <StyledDiv className="container" >{children}</StyledDiv>
  );
}