import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { interval } from 'rxjs';

const StyledDiv = styled.div`
  color: coral;
`;

export default function Home() {
  const [counter, setCounter] = useState(0);

  // use effect keeps the observable client side, as well as provides a means of unsubscribing on unmount to prevent memory leaks
  useEffect(() => {
    const subscription = interval(1000).subscribe(setCounter);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <>
      <div>Counter using RxJS: {counter}</div>
      <StyledDiv>This is a Styled Component!</StyledDiv>
    </>
  );
}
