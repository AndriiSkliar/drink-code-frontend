import{u as g,a as h,b as n,x as m,r as f,y as k,j as i,L as b}from"./index-86c131cd.js";import{T as j}from"./Title-4e689814.js";import{d}from"./drinkSelectors-5b86cb2e.js";import{a as u}from"./selectors-339aa893.js";import w from"./ErrorPage-cfb4d091.js";import"./NotFound-13cfaf91.js";const v=g.div`
  .desc-glass-alco {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    color: var(--primary-text-color-05);
    margin-top: 8px;
  }

  .desc-drink {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 20px;
  }

  .btn-add-rem-fav {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-black-color);
    border-radius: 42px;
    border: none;

    padding-top: 14px;
    padding-bottom: 14px;

    width: 222px;
    height: 46px;
    background: #f3f3f3;
    margin-top: 40px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-add-rem-fav:hover,
  .btn-add-rem-fav:focus {
    color: var(--primary-text-color);
    background: var(--primary-black-color);
  }

  .img-drink {
    object-fit: cover;
    border-radius: 8px;
    width: 335px;
    height: 400px;
    margin-top: 80px;
  }

  .title-sect-ingred {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(243, 243, 243, 0.5);
    margin-top: 18px;
  }

  .ingred-list {
    display: flex;
    row-gap: 20px;
    column-gap: 21px;
    flex-wrap: wrap;
    margin-top: 42px;
  }

  .ingred-descr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
  }

  .ingred-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
  }

  .ingred-quantity {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color-05);
  }

  .ingred-item {
    width: 157px;
    height: 183px;
  }

  .img-container {
    width: 157px;
    height: 157px;
    padding: 25px;
    background: rgba(22, 31, 55, 0.5);
    border-radius: 8px;
  }

  .img-ingred {
    width: 107px;
    height: 107px;
  }

  .descr-drink-title {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);
    margin-top: 80px;
  }

  .recipe-text {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.28571;
    color: var(--primary-text-color);
    margin-top: 40px;
  }

  .img-three-drinks {
    border-radius: 11px;
    width: 335px;
    height: 430px;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .img-drink {
      object-position: inherit;
      width: 704px;
    }

    .title-sect-ingred {
      margin-top: 80px;
    }

    .img-three-drinks {
      width: 704px;
    }
  }

  @media screen and (min-width: 1280px) {
    .drink-container {
      display: flex;
      justify-content: space-between;
    }

    .img-drink {
      width: 400px;
      margin-top: 0px;
    }

    .ingred-list {
      row-gap: 35px;
      column-gap: 35px;
    }

    .desc-drink {
      width: 600px;
    }

    .descr-drink-title {
      margin-top: 100px;
    }

    .title-sect-ingred {
      margin-top: 100px;
    }

    .recipe-container {
      display: flex;
      flex-direction: row-reverse;
      column-gap: 60px;
      justify-content: flex-end;
    }

    .img-three-drinks {
      width: 631px;
      height: 480px;
    }
  }

  @media screen and (min-width: 768px) {
    .desc-glass-alco {
      font-size: 16px;
      line-height: 1.25;
    }

    .desc-drink {
      font-size: 16px;
      line-height: 1.375;
    }

    .btn-add-rem-fav {
      font-size: 16px;
      line-height: 1.125;

      padding-top: 18px;
      padding-bottom: 18px;

      width: 250px;
      height: 54px;
    }

    .ingred-name {
      font-size: 18px;
      line-height: 1.3333;
    }

    .ingred-quantity {
      font-size: 16px;
      line-height: 1.25;
    }

    .ingred-descr {
      margin-top: 14px;
    }

    .ingred-item {
      width: 220px;
      height: 258px;
    }

    .img-container {
      width: 220px;
      height: 220px;
      padding: 22px 23px 23px 22px;
    }

    .img-ingred {
      width: 175px;
      height: 175px;
    }

    .ingred-list {
      row-gap: 22px;
      column-gap: 22px;
      margin-top: 24px;
    }

    .descr-drink-title {
      font-size: 40px;
      line-height: 1.1;
    }

    .recipe-text {
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,y="/drink-code-frontend/assets/drinks_mobile-b94d9f31.jpg",_="/drink-code-frontend/assets/drinks_mobile@2x-cfc7bd4d.jpg",N="/drink-code-frontend/assets/drinks_tablet-ce0a3bb4.jpg",z="/drink-code-frontend/assets/drinks_tablet@2x-2ec4efe3.jpg",D="/drink-code-frontend/assets/drinks_desktop-0dda4d57.jpg",S="/drink-code-frontend/assets/drinks_desktop@2x-eb8bc799.jpg",t={drinks_mobile:y,drinks_mobile_2x:_,drinks_tablet:N,drinks_tablet_2x:z,drinks_desktop:D,drinks_desktop_2x:S},a="https://dummyimage.com/335x400",R=()=>{const s=h(),e=n(d.drinkDetails),o=n(d.selectError),p=n(u),{id:c}=m();return f.useEffect(()=>{s(k(c))},[s]),i.jsx(i.Fragment,{children:o!==null?i.jsx(w,{}):i.jsxs(v,{className:"container",children:[p===!0&&i.jsx(b,{}),e!==null&&i.jsxs("div",{children:[i.jsxs("div",{className:"drink-container",children:[i.jsxs("div",{children:[i.jsx(j,{text:e.drink}),i.jsxs("div",{className:"desc-glass-alco",children:[i.jsx("span",{children:e.glass}),i.jsx("span",{children:" / "}),i.jsx("span",{children:e.alcoholic})]}),i.jsx("p",{className:"desc-drink",children:e.description}),i.jsx("button",{className:"btn-add-rem-fav",children:"Add to favorite drinks"})]}),i.jsx("img",{className:"img-drink",src:e.drinkThumb?`${e.drinkThumb}`:a,alt:e.drink})]}),i.jsx("h2",{className:"title-sect-ingred",children:"Ingredients"}),i.jsx("ul",{className:"ingred-list",children:e.ingredients.map(({ingredientId:x,title:r,measure:l})=>i.jsxs("li",{className:"ingred-item",children:[i.jsx("div",{className:"img-container",children:i.jsx("img",{className:"img-ingred",src:x.ingredientThumb||a,alt:r})}),i.jsxs("div",{className:"ingred-descr",children:[i.jsx("span",{className:"ingred-name",children:r}),i.jsx("span",{className:"ingred-quantity",children:l})]})]},r))}),i.jsx("h2",{className:"descr-drink-title",children:"Recipe Preparation"}),i.jsxs("div",{className:"recipe-container",children:[i.jsx("p",{className:"recipe-text",children:e.instructions}),i.jsxs("picture",{children:[i.jsx("source",{srcSet:t.drinks_mobile,type:"image/jpg",media:"(min-width:280px)",width:"335px",height:"430px"}),i.jsx("source",{srcSet:t.drinks_tablet,type:"image/jpg",media:"(min-width:768px)",width:"704px",height:"430px"}),i.jsx("source",{srcSet:t.drinks_desktop,type:"image/jpg",media:"(min-width:1200px)",width:"631px",height:"480px"}),i.jsx("img",{src:t.drinks_mobile,alt:"three drinks",className:"img-three-drinks"})]})]})]})]})})};export{R as default};
