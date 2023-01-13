import { SpinnerCircular } from 'spinners-react';
import { Overlay } from './Loader.styled';

export default function Loader() {
  return (
    <Overlay>
      <SpinnerCircular
        size={76}
        thickness={180}
        speed={139}
        color="#0d0d0d"
        secondaryColor="#a3a3a3"
      />
    </Overlay>
  );
}
