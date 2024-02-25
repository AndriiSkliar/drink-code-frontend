import{u as m,i as h,w as k,r as d,j as i}from"./index-2f979c0e.js";import{T as u}from"./Title-110e3d78.js";const l="/drink-code-frontend/assets/drinks-mobile-b94d9f31.jpg",f="/drink-code-frontend/assets/drinks-mobile@2x-cfc7bd4d.jpg",b="/drink-code-frontend/assets/drinks-tablet-ce0a3bb4.jpg",w="/drink-code-frontend/assets/drinks-tablet@2x-2ec4efe3.jpg",j="/drink-code-frontend/assets/drinks-desktop-0dda4d57.jpg",y="/drink-code-frontend/assets/drinks-desktop@2x-eb8bc799.jpg",v=m.div`
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
  }

  .img-ingred {
    background: rgba(22, 31, 55, 0.5);
    border-radius: 8px;
    width: 157px;
    height: 157px;
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
    image: url(${l});
    border-radius: 8px;
    width: 335px;
    height: 430px;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    image: url(${f});
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    .container {
      padding-top: 140px;
      padding-bottom: 140px;
    }

    .img-drink {
      width: 704px;
    }

    .img-three-drinks {
      image: url(${b});
      width: 704px;
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      image: url(${w});
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      padding-left: 100px;
      padding-right: 100px;
      padding-bottom: 140px;
      padding-top: 132px;
    }
    .img-drink {
      width: 400px;
    }

    .ingred-list {
      row-gap: 35px;
      column-gap: 35px;
    }

    .descr-drink-title {
      margin-top: 100px;
    }

    .img-three-drinks {
      image: url(${j});
      width: 631px;
      height: 480px;
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      image: url(${y});
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
      line-height: 1.125;

      padding-top: 18px;
      padding-bottom: 18px;

      width: 250px;
      height: 54px;
    }

    .img-ingred {
      background: rgba(22, 31, 55, 0.5);
      width: 220px;
      height: 220px;
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
`,I="https://drink-code-backend.onrender.com",z=async r=>{try{const s={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGIzY2ZmODgyMmYyYjAxNmExOTYwOSIsImlhdCI6MTcwODg2NzIwMCwiZXhwIjoxNzA4OTUwMDAwfQ.8k32-dm-kV8qwa9g7uaIda9eVK8c8FICKre8GGZ2ZC0"}},t=(await h.get(`${I}/api/drinks/${r}`,s)).data;return console.log("data: ",t),t}catch(e){throw console.error(e),e}},c="https://dummyimage.com/335x400",T=()=>{const{drinkId:r}=k(),[e,s]=d.useState(null),[a,t]=d.useState(null),[o,g]=d.useState(null);return d.useEffect(()=>{(async()=>{try{t(!0);const n=await z(r);s(n),console.log("data: ",n)}catch(n){s(null),g(n.message)}finally{t(!1)}})()},[r]),i.jsxs(v,{className:"container",children:[o!==null&&i.jsx("p",{children:o}),a&&i.jsx("p",{children:"Loading..."}),e!==null&&i.jsxs("div",{children:[i.jsx(u,{text:e.drink}),i.jsxs("div",{className:"desc-glass-alco",children:[i.jsx("span",{children:e.glass}),i.jsx("span",{children:" / "}),i.jsx("span",{children:e.alcoholic})]}),i.jsx("p",{className:"desc-drink",children:e.description}),i.jsx("button",{className:"btn-add-rem-fav",children:"Add to favorite drinks"}),i.jsx("img",{className:"img-drink",src:e.drinkThumb?`${e.drinkThumb}`:c,alt:e.drink}),i.jsx("h2",{className:"title-sect-ingred",children:"Ingredients"}),i.jsx("ul",{className:"ingred-list",children:e.ingredients.map(({ingredientId:p,title:n,measure:x})=>i.jsxs("li",{className:"ingred-item",children:[i.jsx("img",{className:"img-ingred",src:p.ingredientThumb||c,alt:n}),i.jsxs("div",{className:"ingred-descr",children:[i.jsx("span",{className:"ingred-name",children:n}),i.jsx("span",{className:"ingred-quantity",children:x})]})]},n))}),i.jsx("h2",{className:"descr-drink-title",children:"Recipe Preparation"}),i.jsx("p",{className:"recipe-text",children:e.instructions}),i.jsx("img",{className:"img-three-drinks",src:l,alt:"three drinks",width:"335",height:"430"})]})]})};export{T as default};
