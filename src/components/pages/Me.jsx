import styled from "styled-components";

function Me() {
  return (
      <Profile className="me">
        Challenge by&nbsp;<a href="https://github.com/S-Devoe" target="_blank" rel="noreferrer">
          Frontend Mentor.</a>Coded by&nbsp;<a href="https://github.com/S-Devoe" target="_blank" rel="noreferrer">DeeVoe.</a>
      </Profile>
  );
}
export default Me

const Profile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Bellefair";
  background: #0B0F1A;

  a {
    color: grey;
  }

`;