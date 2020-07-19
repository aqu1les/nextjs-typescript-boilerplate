import * as S from './styles';

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e StyledComponents'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Um átomo e React Avançado ao lado." />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela de código"
    />
  </S.Wrapper>
);

export default Main;
