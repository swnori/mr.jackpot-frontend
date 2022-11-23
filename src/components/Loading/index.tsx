import { LoadingContainer, LoadingImg } from './style';

import LoadingGIF from '@/assets/images/loading.gif';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingImg src={LoadingGIF} />
    </LoadingContainer>
  );
};

export default Loading;
