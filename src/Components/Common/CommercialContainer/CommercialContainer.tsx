import React from 'react';
import * as S from './CommercialContainer.style';
export default function CommercialContainer() {
  return (
    <li>
      <S.CommercialBox onClick={() => window.open('https://www.wanted.co.kr/')}>
        <img src="https://image1.marpple.co/files/u_1371660/2020/11/original/79f3b672740b1a7688b84a8bfd903bcc1b28d4431.png?w=1200&f=webp" />
      </S.CommercialBox>
    </li>
  );
}
