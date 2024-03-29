import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as S from './style';
import Map from '../../components/Map';

export default function ContactPage() {
  return (
    <>
      <Header />
      <S.Main>
        <h3>CONTACT INFO</h3>
        <ul>
          <li>
            <label htmlFor="contact--mobile">전화</label>
            <a href="tel:070-7799-0703" id="contact--mobile">
              070 7799 0703
            </a>
          </li>
          <li>
            <label htmlFor="contact--email">이메일</label>
            <a href="mailto:official@dansong.kr" id="contact--email">
              official@dansong.kr
            </a>
          </li>
          <li>
            <label htmlFor="contact--address">주소</label>
            <a href="javascript:void(0)" id="contact--address">
              212, Hakdong-ro, Gangnam-gu, Postville 703
            </a>
          </li>
        </ul>
        <Map />
      </S.Main>
      <Footer />
    </>
  );
}
