import styled from 'styled-components';

interface ILegendProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  height: 320px;

  margin: 10px 0;
  padding: 20px 20px 60px 20px;

  border-radius: 7px;

  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
`;

export const LegendContainer = styled.ul`
  list-style: none;

  display: flex;
`;

export const Legend = styled.li<ILegendProps>`
  margin: 0 10px 7px 20px;

  display: flex;
  align-items: center;

  > div {
    background-color: ${props => props.color};

    width: 30px;
    height: 30px;
    margin-top: 0;
    border-radius: 5px;

    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > span {
    font-size: 18px;
    margin-left: 10px;
  }
`;