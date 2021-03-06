import styled, { keyframes } from  'styled-components';

interface ITagProps {
  color: string;
}

const animate = keyframes`
  0% {
    transform: translatex(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translatex(0);
    opacity: 1;
  }
`;

export const Container = styled.li`
  background-color: ${props => props.theme.colors.tertiary};
  list-style: none;
  border-radius: 10px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  animation: ${animate} .5s ease;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    opacity: .7;
    transform: scale(1.02);
  }

  > div {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div span {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Tag = styled.div<ITagProps>`
  background-color: ${props => props.color};
  width: 10px;
  height: 60%;
  position: absolute;
  left: 0;
`;
