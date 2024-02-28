import{u as d,j as e,N as h,r as p,a as g,b as l,f as b,L as f}from"./index-4f9b7f0d.js";import{s as u,a as k,b as w}from"./drinks.selectors-2774a1f2.js";const _=d.li`
  margin-bottom: 40px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-bottom: 80px;
    width: calc(150% - 20px);
  }

  @media (min-width: 1280px) {
    width: calc(100% - 40px);
  }

  .imgContainer {
    margin-bottom: 14px;
    background: transparent;
    position: relative;
  }

  .imgContainer:hover {
    border-radius: 8px;
    position: relative;
    background: linear-gradient(0deg, #000, #272727);
    transition: background cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s;
  }

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
    animation-name: steam;
    animation-duration: 16s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

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

  .imgContainer:after {
    filter: blur(20px);
    transition: filter cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s;
  }

  .drinkImgWrapper {
    position: relative;
    overflow: hidden;
    width: 335px;
    height: 360px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    @media (min-width: 768px) {
      width: 342px;
      height: 360px;
    }

    @media (min-width: 1280px) {
      width: 400px;
      height: 400px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      height: 200px;
      border-radius: 8px;
      background: linear-gradient(
        180deg,
        rgba(10, 10, 17, 0.03) 2.37%,
        rgba(10, 10, 17, 0.96) 95.31%
      );
      z-index: 1;
    }
  }

  .drinkImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
`,v=({id:n,drinkName:t,img:r})=>e.jsxs(_,{children:[e.jsx("div",{className:"imgContainer",children:e.jsx("div",{className:"drinkImgWrapper",children:e.jsx("img",{src:`${r}`,alt:t,className:"drinkImg"})})}),e.jsxs("div",{className:"contentContainer",children:[e.jsx("h3",{className:"drinkName",children:t}),e.jsx(h,{to:`/drink/${n}`,className:"seeMoreLink",children:"See more"})]})]}),j=d.div`
  .drinksList {
    list-style: none;
    padding: 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: nowrap;
      column-gap: 20px;
      justify-content: space-between;
    }
  }

  .drinksListTitle {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);

    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    .drinksListTitle {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 40px;
    }
  }

  @media (min-width: 1280px) {
    .drinksListTitle {
      line-height: 1.1;
    }
  }
`,a=({title:n,drinks:t})=>{const r=t.filter(i=>i.category===n),[s,c]=p.useState(1);p.useEffect(()=>{const i=()=>{const x=window.innerWidth;x>=1280?c(3):x>=768?c(2):c(1)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[]);const m=r.slice(0,s);return e.jsxs(j,{children:[e.jsx("h2",{className:"drinksListTitle",children:n}),e.jsx("ul",{className:"drinksList",children:m.map(i=>e.jsx(v,{id:i._id,className:"drinksListItem",drinkName:i.drink,img:i.drinkThumb},i._id))})]})},y=d.div`
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-top: 40px;
    margin-bottom: 54px;
  }
  @media (min-width: 1280px) {
    flex-direction: row;

    margin-top: 8px;
    margin-bottom: 106px;
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

  @media (min-width: 768px) {
    .heroTitle {
      font-size: 56px;
      line-height: 1.07143;

      margin-bottom: 28px;
      max-width: 641px;
    }
  }

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

  @media (min-width: 768px) {
    .heroDescription {
      font-size: 18px;
      line-height: 1.33333;

      max-width: 619px;
      margin-bottom: 48px;
    }
  }

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

  @media (min-width: 768px) {
    .addDrinkLink {
      padding: 18px 44px;
      width: 173px;
      height: 54px;

      font-size: 16px;
      line-height: 1.125;
    }
  }

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
    background-color: var(--link-bg-hover);
  }
`,z="/drink-code-frontend/assets/left_blur_desktop-d4c6c43c.svg",L="/drink-code-frontend/assets/right_blur_desktop-fd0baab0.svg",D="/drink-code-frontend/assets/center_blur_desktop-df6d6ec0.svg",N="/drink-code-frontend/assets/left_blur_tablet-521345fe.svg",C="/drink-code-frontend/assets/right_blur_tablet-25d28852.svg",S="/drink-code-frontend/assets/left_blur_mobile-c5ff6af9.svg",T="/drink-code-frontend/assets/right_blur_mobile-b7131396.svg",E="/drink-code-frontend/assets/blue_tea_desktop_jpg-38f4926c.jpg",I="/drink-code-frontend/assets/blue_tea_tablet-e1e8e227.png",H="/drink-code-frontend/assets/blue_tea_tablet-e1e8e227.png",M="/drink-code-frontend/assets/blue_tea_mobile-bf274514.png",o={left_blur_desktop:z,right_blur_desktop:L,center_blur_desktop:D,left_blur_tablet:N,right_blur_tablet:C,left_blur_mobile:S,right_blur_mobile:T,blue_tea_desktop_jpg:E,blue_tea_desktop:I,blue_tea_tablet:H,blue_tea_mobile:M},O=()=>e.jsxs(y,{className:"heroContainer",children:[e.jsxs("div",{className:"heroContent",children:[e.jsx("h1",{className:"heroTitle",children:"Craft Your Perfect Drink with Drink Master"}),e.jsx("p",{className:"heroDescription",children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world's finest beverages."}),e.jsx(h,{to:"/add",className:"addDrinkLink",children:"Add drink"})]}),e.jsx("div",{className:"hero-picture-wrapper",children:e.jsxs("picture",{children:[e.jsx("source",{srcSet:o.blue_tea_mobile,type:"image/png",media:"(min-width:280px)",width:"352px",height:"313px"}),e.jsx("source",{srcSet:o.blue_tea_tablet,type:"image/png",media:"(min-width:768px)",width:"359px",height:"445px"}),e.jsx("source",{srcSet:o.blue_tea_desktop,type:"image/png",media:"(min-width:1200px)",width:"359px",height:"445px"}),e.jsx("img",{src:o.blue_tea_desktop_jpg,alt:"Blue tea in a glass",className:"hero-picture",width:"359px",height:"445px"})]})})]}),P=d.div`
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
    background: var(--link-bg);

    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--link-text);

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

      margin-bottom: 60px;
    }
  }

  .otherDrinksLink:hover,
  .otherDrinksLink:focus {
    border: 2px solid rgba(64, 112, 205, 0.5);
    border-radius: 42px;
    box-shadow: 0 0 20px rgba(64, 112, 205, 0.7);
    background-color: var(--link-bg-hover);
  }
`,$=()=>{const n=g(),t=l(u),r=l(k),s=l(w);return p.useEffect(()=>{n(b())},[n]),e.jsxs(P,{className:"container",children:[e.jsx(O,{}),r&&e.jsx(f,{}),s&&e.jsxs("p",{children:["Error: ",s]}),e.jsxs("div",{className:"categoryListsContainer",children:[e.jsx(a,{drinks:t,title:"Ordinary Drink"},"OrdinaryDrink"),e.jsx(a,{drinks:t,title:"Cocktail"},"Cocktail"),e.jsx(a,{drinks:t,title:"Shake"},"Shake"),e.jsx(a,{drinks:t,title:"Other/Unknown"},"OtherUnknown")]}),e.jsx(h,{to:"/drinks",className:"otherDrinksLink",children:"Other drinks"})]})};export{$ as default};
