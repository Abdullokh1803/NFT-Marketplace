import s from "./Header.module.scss";
import { PiRocketLaunch } from "react-icons/pi";

const Headers = () => {
  return (
    <div className="container">
      <header id={s.header}>
        <div className={s.header__content}>
          <div className={s.content__text}>
            <h1>Discover digital art & Collect NFTs</h1>
            <div>
              <p>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
            </div>
            <button>
              <PiRocketLaunch className={s.icon} /> Get Started
            </button>
            <div className={s.total}>
              <div>
                <h4>240k+</h4>
                <p>Total Sale</p>
              </div>
              <div>
                <h4>100k+</h4>
                <p>Auctions</p>
              </div>
              <div>
                <h4>240k+</h4>
                <p>Artists</p>
              </div>
            </div>
          </div>

          <div className={s.content__img}>
            <div className={s.card}>
              <div className={s.img}></div>
              <div className={s.underImg}>
                <h5>Space Walking</h5>
                <div className={s.underImg__avatar}>
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9113/13b2/d79c0afb936279fe8427b823bc6218b6?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5yCQIYdX3Ix9F8Ec4p7ryomfYBy-8uvqBx2tIXP-bsso41thil6o5f15Pm7D76dElD8lCiQlnb9IgLaMWAe5R4BmrzN4t0NIbLTCsCoCXllXoT~sR4xQbReRdHsUofxspAZYRPS7ckYkkjgWPoJVgEjmn63eIL7bvag~9gWPgnjkn4KIlpbrkmVwXCcNQtrnfboSGkHXqsTKdVJPQzPkZmPKhFjcaSYv-umcW8Z2ya~7kXj3T5WEQ6yKA47XU4JUbq2ZR8dT9dBGinM7mnfCQJrxeg7ULFSI6wtxvbdhZelxs2PpBpjweUF8SRTdzO7ctnJoUCk~p3O8F-nXfBvnQ__"
                    alt=""
                  />
                  <p>Animakid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;
