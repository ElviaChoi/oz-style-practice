import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  li {
    list-style: none;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>OZ코딩스쿨</h1>
      <Menu>
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </Menu>
    </HeaderContainer>
  );
}
