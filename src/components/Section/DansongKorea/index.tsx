import { useState } from 'react';
import Textline from '../../Textline';
import * as S from './style';
import useDebounce from '../../../hooks/useDebounce';
import VideoList from '../../VideoList';

// const src = 'https://www.youtube.com/watch?v=H6jx_By_dKg&t=2s';
// const videoId = src.match(/(?<=\?v=)[^&]+/)![0];
// const thumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

export default function DansongKorea() {
  return (
    <S.Section>
      <S.VideoSection>
        <S.VideoContainer>
          {/* <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            width="100%"
            height="360"
            src="https://www.youtube.com/embed/H6jx_By_dKg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          /> */}
          {/* {debouncedHoveredIndex !== 0 && (
            <Hover>
              <img
                src={thumbnail}
                onMouseEnter={() => setHoveredIndex(1)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </Hover>
          )}
          {debouncedHoveredIndex !== 1 && (
            <Hover>
              <img
                src={thumbnail}
                onMouseEnter={() => setHoveredIndex(0)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            </Hover> */}
          {/* )} */}
          <VideoList />
        </S.VideoContainer>
      </S.VideoSection>
      {/* <Button text="sss" type="link" onClick={() => {}} /> */}
      <S.TextSection>
        <S.TextContainer>
          <Textline fontSize="4.8rem" animation="top" isFontBold={true}>
            Think Make Change
          </Textline>
          <Textline fontSize="2.4rem" animation="top">
            생각이 실현되는 곳
          </Textline>
        </S.TextContainer>
      </S.TextSection>
      <div style={{ height: '1000px' }}></div>

      <S.LogoSection>
        <S.LogoContainer>
          <div>ddd</div>
        </S.LogoContainer>
      </S.LogoSection>
    </S.Section>
  );
}
