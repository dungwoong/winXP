import React from 'react';
import Search from './Search';
import Main from './Main';
import styled from 'styled-components';

// export function Google({ route = 'main', query = '', onSearch, goMain }) {
//   if (route === 'main') return <Main onSearch={onSearch} />;
//   else return <Search goMain={goMain} onSearch={onSearch} query={query} />;
// }

export function Google() {
  return (
    <TestDiv>
      <MySite src="https://dungwoong.github.io/"></MySite>
    </TestDiv>
  );
}

const MySite = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const TestDiv = styled.div`
  width: 100%;
  height: 90%;
`;

export default Google;
