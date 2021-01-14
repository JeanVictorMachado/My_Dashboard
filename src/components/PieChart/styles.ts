import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 48%;
  height: 260px;

  margin: 10px 0;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 7px;

  display: flex;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  > h2 {
    margin-bottom: 20px;
  }
`;

export const LegendContainer = styled.ul`
  list-style: none;
  height: 175px;
  padding-right: 15px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.tertiary};
    border-radius: 10px;
  }
`;

export const Legend = styled.li<ILegendProps>`
  margin-bottom: 7px;

  display: flex;
  align-items: center;

  > div {
    background-color: ${props => props.color};

    width: 45px;
    height: 45px;
    border-radius: 5px;

    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span {
    margin-left: 5px;
  }
`;

export const SideRight = styled.main`
  
`;