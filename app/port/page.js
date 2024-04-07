import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Carrer from "./_component";

export default function Home() {
  return (
    <main>
      <div className={styles.resume_subject}>
        <h3>
          React/NodeJS/NestJS/React Native/C++/MFC/Visual
          C++/C#/MSSQL/MYSQL/Postgresql/HTS/BITCOIN
        </h3>
      </div>

      <div className={styles.profile_data}>
        <div className={styles.image_margin}>
          <Image
            className={styles.myimage}
            src="/profile/my.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </div>
        <div className={styles.image_left}>
          <div className={styles.image_test}>
            <div className={styles.profile_info_general_name}>박권욱</div>
            <div className={styles.profile_info_general_year}>
              남 2003년 (만 21세)
            </div>
          </div>
          <div className={styles.profile_info_detail}>
            <div class={styles.profile_label}>휴대폰 | 010-4500-5558</div>
            <div class={styles.profile_label}>Email | kwonwook.park@jastecm.com</div>
            <div class={styles.profile_label}>전화번호 | 031-601-4462</div>
            <div class={styles.profile_label}>
              주소 | 성남시 수정구 시민로175번길 22, 503호
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className={styles.grid_container}>
          <div>
            <div className={styles.grid_item}>학력</div>
            <div className={styles.grid_item}>가천대 </div>
            <div className={styles.grid_item}>
              <div>대학교(4년)</div>
              <div>재학</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>경력</div>
            <div className={styles.grid_item}>자스텍엠</div>
            <div className={styles.grid_item}>
              <div>재직 중</div>
              <div>총 1년 2개월</div>
            </div>
          </div>

          <div>
            <div className={styles.grid_item}>
              인턴&middot;대외활동 / 해외경험
            </div>
            <div className={styles.grid_item}>-</div>
          </div>

          <div>
            <div className={styles.grid_item}>자격증 / 어학</div>
            <div className={styles.grid_item}>정보처리기사</div>
            <div className={styles.grid_item}>영어-회화가능</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.keyword_box}>
          <Link href="https://viewcar.co.kr/">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>V4 ViewCar</span>
            </button>
          </Link>

          <Link href="https://vdaspro.viewcar.co.kr/vdasPro/main/index.do">
            <button type="button" className={styles.list_btn}>
              <span className={styles.btn_gap}>V3 ViewCar</span>
            </button>
          </Link>
        </div>
      </section>
      <section>
        <h1 className={styles.school_title}>학력</h1>
        <div className={styles.school_title_grid_margin}>
          <div className={styles.school_title_grid}>
            <div>
              <div>2022.03~ </div>
              <div>재학 중</div>
            </div>
            <div>
              <div>
                <div>가천대 </div>
                <div>미래자동차학과</div>
              </div>
              <div>
                <div>
                  <div>
                    <div>학점</div>
                    <div>3.60 / 4.5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.school_title_grid}>
            <div>
              <div>2021</div>
              <div>졸업 </div>
            </div>
            <div>
              <div>
                <div>세경고등학교 </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carrer />
    </main>
  );
}
