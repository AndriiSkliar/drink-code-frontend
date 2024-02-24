import{u as c,j as e,N as l,r as d,a as m}from"./index-4184d230.js";const g=c.li`
  margin-bottom: 40px;
  border-radius: 8px;
  /* width: 335px;
  height: 360px; */

  @media (min-width: 768px) {
    /* width: 342px;
    height: 360px; */
    margin-bottom: 80px;
    width: calc(150% - 20px); /* Две картинки с промежутком в 20px */
  }

  @media (min-width: 1280px) {
    /* width: 400px;
    height: 400px; */
    width: calc(100% - 40px); /* Три картинки с промежутками в 20px */
  }

  .imgContainer {
    margin-bottom: 14px;
    /* Подсветка карточки с коктейлем */
    background: transparent;
    position: relative;
  }

  .imgContainer:hover {
    border-radius: 8px;
    position: relative;
    background: linear-gradient(0deg, #000, #272727);
    transition: background cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s; /* Плавный переход цвета */
  }

  /* Эффект радужной тени */
  .imgContainer:hover:before,
  .imgContainer:hover:after,
  .imgContainer:focus:before,
  .imgContainer:focus:after {
    content: '';
    position: absolute;
    left: -2px;
    top: -2px;
    background: linear-gradient(
      45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000
    );
    background-size: 400%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 8px;
    z-index: -1;
    animation-name: steam; /* имя анимации, определенной ниже с использованием @keyframes */
    animation-duration: 16s; /* продолжительность анимации */
    animation-timing-function: linear; /* анимация идет с постоянной скоростью */
    animation-iteration-count: infinite; /* бесконечное повторение */
  }

  /* Анимация радужной тени */
  @keyframes steam {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  /* Эффект размытия */
  .imgContainer:after {
    filter: blur(20px);
    transition: filter cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s; /* Плавный переход размытия */
  }

  .drinkImgWrapper {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    /* Градиент для затемнения на фото коктейля */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      background: linear-gradient(
        180deg,
        rgba(10, 10, 17, 0.03) 2.37%,
        rgba(10, 10, 17, 0.96) 95.31%
      );
      z-index: 1;
    }
  }


  /* .drinkImg {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  } */

  .drinkName {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.125;
    color: var(--primary-text-color);

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 1.33333;
    }
  }

  .seeMoreLink {
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: right;
    color: var(--secondary-text-color);

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    .seeMoreLink {
      font-size: 16px;
      line-height: 1.125;
    }
  }

  .contentContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,b=({id:i,drinkName:t,img:a})=>e.jsxs(g,{children:[e.jsx("div",{className:"imgContainer",children:e.jsx("div",{className:"drinkImgWrapper",children:e.jsx("img",{src:`${a}`,alt:t,className:"drinkImg"})})}),e.jsxs("div",{className:"contentContainer",children:[e.jsx("h3",{className:"drinkName",children:t}),e.jsx(l,{to:`/drink/${i}`,className:"seeMoreLink",children:"See more"})]})]}),f=c.div`
  .drinksList {
    list-style: none;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      column-gap: 20px;
      justify-content: space-between;
    }

    @media (min-width: 1280px) {
      /* на будущее */
    }
  }

  /* Стили для мобильной версии */
  .drinksListTitle {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var( --primary-text-color);

    margin-bottom: 24px;
  }

  /* Стили для планшетной версии (если они отличаются от мобильной) */
  @media (min-width: 768px) {
    .drinksListTitle {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 40px;
    }
  }

  /* Стили для десктопной версии (если они отличаются от мобильной и планшетной) */
  @media (min-width: 1280px) {
    .drinksListTitle {
      line-height: 1.1;
    }
  }
`,s=({title:i,drinks:t})=>{const a=t.filter(n=>n.category===i),[r,p]=d.useState(1);d.useEffect(()=>{const n=()=>{const h=window.innerWidth;h>=1280?p(3):h>=768?p(2):p(1)};return window.addEventListener("resize",n),n(),()=>{window.removeEventListener("resize",n)}},[]);const x=a.slice(0,r);return e.jsxs(f,{children:[e.jsx("h2",{className:"drinksListTitle",children:i}),e.jsx("ul",{className:"drinksList",children:x.map(n=>e.jsx(b,{className:"drinksListItem",drinkName:n.drink,img:n.drinkThumb},n._id))})]})},k=c.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 112px;

  /* Планшетная версия  */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 120px;
    margin-bottom: 123px;
  }
  /* Десктопная версия  */
  @media (min-width: 1280px) {
    margin-top: 185px;
    margin-bottom: 218px;
  }

  .heroContent {
    margin-bottom: 47px;
  }
  @media (min-width: 768px) {
    .heroContent {
      margin-bottom: 54px;
    }
  }
  @media (min-width: 1280px) {
    .heroContent {
      margin-bottom: 0;
    }
  }

  .heroTitle {
    font-weight: 600;
    color: var(--primary-text-color);
    font-size: 32px;
    line-height: 1.1875;

    max-width: 335px;
    margin-bottom: 16px;
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .heroTitle {
      font-size: 56px;
      line-height: 1.07143;

      margin-bottom: 28px;
      max-width: 641px;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .heroTitle {
      font-size: 64px;
      line-height: 1.0625;

      max-width: 715px;
    }
  }

  .heroDescription {
    font-weight: 400;
    color: var(--primary-text-color);

    font-size: 14px;
    line-height: 1.42857;

    max-width: 335px;
    margin-bottom: 32px;
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .heroDescription {
      font-size: 18px;
      line-height: 1.33333;

      max-width: 619px;
      margin-bottom: 48px;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .heroDescription {
      max-width: 500px;
      margin-bottom: 40px;
    }
  }

  .addDrinkLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 155px;
    height: 46px;
    background: var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  /* Планшетная версия */
  @media (min-width: 768px) {
    .addDrinkLink {
      padding: 18px 44px;
      width: 173px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
  }

  /* Десктопная версия */
  @media (min-width: 1280px) {
    .addDrinkLink {
      width: 164px;
      margin-bottom: 0;
    }
  }
  .addDrinkLink:hover,
  .addDrinkLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var( --link-bg-hover);
  }
`,u="/drink-code-frontend/assets/left_blur_desktop-d4c6c43c.svg",w="/drink-code-frontend/assets/right_blur_desktop-fd0baab0.svg",_="/drink-code-frontend/assets/center_blur_desktop-df6d6ec0.svg",v="/drink-code-frontend/assets/left_blur_tablet-521345fe.svg",j="/drink-code-frontend/assets/right_blur_tablet-25d28852.svg",y="/drink-code-frontend/assets/left_blur_mobile-c5ff6af9.svg",z="/drink-code-frontend/assets/right_blur_mobile-b7131396.svg",D="/drink-code-frontend/assets/blue_tea_desktop_jpg-38f4926c.jpg",L="/drink-code-frontend/assets/blue_tea_tablet-e1e8e227.png",N="/drink-code-frontend/assets/blue_tea_tablet-e1e8e227.png",C="/drink-code-frontend/assets/blue_tea_mobile-bf274514.png",o={left_blur_desktop:u,right_blur_desktop:w,center_blur_desktop:_,left_blur_tablet:v,right_blur_tablet:j,left_blur_mobile:y,right_blur_mobile:z,blue_tea_desktop_jpg:D,blue_tea_desktop:L,blue_tea_tablet:N,blue_tea_mobile:C},S=()=>e.jsxs(k,{className:"heroContainer",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("h1",{className:"heroTitle",children:"Craft Your Perfect Drink with Drink Master"}),e.jsx("p",{className:"heroDescription",children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(l,{to:"/add",className:"addDrinkLink",children:"Add drink"})]}),e.jsx("div",{className:"hero-picture-wrapper",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:o.blue_tea_mobile,type:"image/png",media:"(min-width:280px)",width:"352px",height:"313px"}),e.jsx("source",{srcSet:o.blue_tea_tablet,type:"image/png",media:"(min-width:768px)",width:"359px",height:"445px"}),e.jsx("source",{srcSet:o.blue_tea_desktop,type:"image/png",media:"(min-width:1200px)",width:"359px",height:"445px"}),e.jsx("img",{src:o.blue_tea_desktop_jpg,alt:"Blue tea in a glass",className:"hero-picture",width:"359px",height:"445px"})]})})]}),T=c.div`
  @media (min-width: 1280px) {
    background-image: url(${o.center_blur_desktop});
    background-size: 549px 543px;
    background-repeat: no-repeat;
    background-position: top 343px right;
    background-clip: content-box;
  }
  .categoryListsContainer {
    margin-bottom: 60px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .otherDrinksLink {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 42px;
    padding: 14px 40px;
    width: 167px;
    height: 46px;
    background:var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var( --link-text);

    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;

    transition:
      box-shadow 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-radius 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
      background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

    @media (min-width: 768px) {
      padding: 18px 44px;
      width: 187px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;

      margin-bottom: 140px;
    }

    @media (min-width: 1280px) {
      margin-bottom: 158px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var( --link-bg-hover)
  }
`,E="https://drink-code-backend.onrender.com",I=async()=>{try{const t=(await m.get(`${E}/api/drinks/mainpage`)).data;return console.log("data",t),t}catch(i){throw console.error("Ошибка при получении данных:",i),i}},M=()=>{const[i,t]=d.useState([]);return d.useEffect(()=>{(async()=>{try{const r=await I();t(r)}catch(r){console.error("Ошибка при загрузке данных:",r)}})()},[]),e.jsxs(T,{className:"container",children:[e.jsx(S,{}),e.jsxs("div",{className:"categoryListsContainer",children:[e.jsx(s,{drinks:i,title:"Ordinary Drink"},"OrdinaryDrink"),e.jsx(s,{drinks:i,title:"Cocktail"},"Cocktail"),e.jsx(s,{drinks:i,title:"Shake"},"Shake"),e.jsx(s,{drinks:i,title:"Other/Unknown"},"OtherUnknown")]}),e.jsx(l,{to:"/drinks",className:"otherDrinksLink",children:"Other drinks"})]})};export{M as default};
