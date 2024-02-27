import{u,a as v,b as s,z as w,r as y,e as _,A as N,j as e,Q as z,L as D,B as p,C as F,d as T}from"./index-2c43f712.js";import{T as C}from"./Title-5246a4be.js";import{d as c}from"./drinkSelectors-5b86cb2e.js";import{a as S,s as E}from"./selectors-dad3d6eb.js";import P from"./ErrorPage-e327551e.js";import"./NotFound-e75bc1b0.js";const A=u.div`
  .container-page {
    margin: 0 auto;
    max-width: 375px;
    padding: 80px 20px;
  }

  .desc-glass-alco {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.16667;
    color: var(--secondary-text-color);
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
    color: var(--link-text);
    border-radius: 42px;
    border: none;

    padding-top: 14px;
    padding-bottom: 14px;

    width: 222px;
    height: 46px;
    background: var(--link-bg);
    margin-top: 40px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .btn-add-rem-fav:hover,
  .btn-add-rem-fav:focus {
    color: var(--link-bg-hover);
    background: var(--link-text);
  }

  .img-drink {
    object-fit: cover;
    object-position: top;
    border-radius: 8px;
    width: 335px;
    height: 400px;
    margin-top: 80px;
  }

  .title-sect-ingred {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.25;
    color: var(--secondary-text-color);
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
    align-items: center;
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
    color: var(--secondary-text-color);
  }

  .ingred-item {
    width: 157px;
    height: 183px;
  }

  .img-container {
    width: 157px;
    height: 157px;
    padding: 25px;
    background: var(--ingredient-bg);
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
    .container-page {
      max-width: 768px;
      padding: 140px 32px;
    }

    .img-drink {
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
    .container-page {
      max-width: 1280px;
      padding: 158px 100px 140px 100px;
    }

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
      min-width: 631px;
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
`,L="/drink-code-frontend/assets/drinks_mobile-b94d9f31.jpg",R="/drink-code-frontend/assets/drinks_mobile@2x-cfc7bd4d.jpg",q="/drink-code-frontend/assets/drinks_tablet-ce0a3bb4.jpg",B="/drink-code-frontend/assets/drinks_tablet@2x-2ec4efe3.jpg",I="/drink-code-frontend/assets/drinks_desktop-0dda4d57.jpg",Q="/drink-code-frontend/assets/drinks_desktop@2x-eb8bc799.jpg",d={drinks_mobile:L,drinks_mobile_2x:R,drinks_tablet:q,drinks_tablet_2x:B,drinks_desktop:I,drinks_desktop_2x:Q},x="/drink-code-frontend/assets/dummyDrinkThumb-bcfa1519.png",O=()=>{const n=v(),i=s(c.drinkDetails),l=s(c.selectError),g=s(S),h=s(E),{id:r}=w(),o=h.some(t=>t._id===r);y.useEffect(()=>{n(_()),n(N(r))},[n,o]);const m=()=>{p("Drink added to favorites",{position:"top-right",autoClose:2e3})},k=()=>{p("Drink removed from favorites",{position:"top-right",autoClose:2e3})},f=t=>{n(F(t))},b=t=>{n(T(t))};return e.jsxs(A,{children:[e.jsx(z,{}),e.jsx("div",{className:"container-page",children:l!==null?e.jsx(P,{}):e.jsxs("div",{children:[g===!0&&e.jsx(D,{}),i!==null&&e.jsxs("div",{children:[e.jsxs("div",{className:"drink-container",children:[e.jsxs("div",{children:[e.jsx(C,{text:i.drink}),e.jsxs("div",{className:"desc-glass-alco",children:[e.jsx("span",{children:i.glass}),e.jsx("span",{children:" / "}),e.jsx("span",{children:i.alcoholic})]}),e.jsx("p",{className:"desc-drink",children:i.description}),o?e.jsx("button",{className:"btn-add-rem-fav",onClick:()=>{b(r),k()},children:"Remove from favorites"}):e.jsx("button",{className:"btn-add-rem-fav",onClick:()=>{f(r),m()},children:"Add to favorite drinks"})]}),e.jsx("img",{className:"img-drink",src:i.drinkThumb?`${i.drinkThumb}`:x,alt:i.drink})]}),e.jsx("h2",{className:"title-sect-ingred",children:"Ingredients"}),e.jsx("ul",{className:"ingred-list",children:i.ingredients.map(({ingredientId:t,title:a,measure:j})=>e.jsxs("li",{className:"ingred-item",children:[e.jsx("div",{className:"img-container",children:e.jsx("img",{className:"img-ingred",src:t&&t.ingredientThumb?t.ingredientThumb:x,alt:a})}),e.jsxs("div",{className:"ingred-descr",children:[e.jsx("span",{className:"ingred-name",children:a}),e.jsx("span",{className:"ingred-quantity",children:j})]})]},a))}),e.jsx("h2",{className:"descr-drink-title",children:"Recipe Preparation"}),e.jsxs("div",{className:"recipe-container",children:[e.jsx("p",{className:"recipe-text",children:i.instructions}),e.jsxs("picture",{children:[e.jsx("source",{srcSet:d.drinks_desktop,type:"image/jpg",media:"(min-width:1200px)",width:"631px",height:"480px"}),e.jsx("source",{srcSet:d.drinks_tablet,type:"image/jpg",media:"(min-width:768px)",width:"704px",height:"430px"}),e.jsx("source",{srcSet:d.drinks_mobile,type:"image/jpg",media:"(min-width:280px)",width:"335px",height:"430px"}),e.jsx("img",{src:d.drinks_mobile,alt:"three drinks",className:"img-three-drinks"})]})]})]})]})})]})};export{O as default};
