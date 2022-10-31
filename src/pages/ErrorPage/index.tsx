import { ErrorBtn, ErrorContainer, ErrorDesc, ErrorImg, ErrorTitle } from './style';

import { useLink } from '@/hooks/useLink';

import ErrorGIF from '@/assets/images/loading.gif';

interface ErrorValue {
  cause?: string;
  solution?: string;
}

const ErrorPage = ({
  cause = '페이지가 존재하지 않습니다.',
  solution = '이전 페이지로 돌아가주세요.',
}: ErrorValue) => {
  const link = useLink();
  return (
    <ErrorContainer>
      <ErrorImg src={ErrorGIF} alt='error' loading='lazy' />
      <ErrorTitle>아이고!</ErrorTitle>
      <ErrorDesc>{cause}</ErrorDesc> <br />
      <ErrorDesc>{solution}</ErrorDesc>
      <ErrorBtn onClick={() => link.back()}>이전 페이지로 돌아가기</ErrorBtn>
    </ErrorContainer>
  );
};

export default ErrorPage;
