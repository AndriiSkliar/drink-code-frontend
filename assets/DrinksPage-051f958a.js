import{r as c,u as a,a as p,j as e,p as v,b as l,q as w,t as b,v as h,w as x,N as S,c as C,L}from"./index-a3f8adbe.js";import{a as D,S as B,b as F,c as P,d as I,e as z,D as N,P as T}from"./Pagination-dd6a9647.js";import{d as W,e as E,f as A,g as V}from"./selectors-dad3d6eb.js";import{T as M}from"./Title-db40fada.js";import{N as q}from"./NotFound-a5bb6964.js";const O=r=>c.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},c.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),_=a(O)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,R=a.button`
  border: none;
  width: 28px;
  height: 28px;
  background: transparent;
  color: #f3f3f3;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,$=a.div`
  .SearchForm {
    display: flex;
    padding: 18px;
    align-items: center;
    width: 100%;
    max-width: 335px;
    height: 56px;
    background-color: transparent;
    border: 1px solid #f3f3f3;
    border-radius: 30px;
    overflow: hidden;
  }

  .SearchForm-button {
    // position: absolute;
    // top: 100px;
    // left: 50 px;
    // display: inline-block;
    // width: 48px;
    // height: 48px;
    background-color: transparent;
    opacity: 0;
    padding: 18px;
    // transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    // cursor: pointer;
    // outline: none;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
    // width: 1px;
    // height: 1px;
    // padding: 0;
    // overflow: hidden;
    // clip: rect(0, 0, 0, 0);
    // white-space: nowrap;
    // clip-path: inset(50%);
    // border: 0;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    color: #f3f3f3;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    background-color: transparent;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }

  @media (min-width: 768px) {
    .SearchForm {
      max-width: 264px;
    }
  }
`,G=()=>{const r=p(),n=t=>{t.preventDefault();const o=t.currentTarget.elements.searchLetter.value;r(v(o)).unwrap().then(()=>t.target.reset())};return e.jsx($,{children:e.jsx("div",{children:e.jsxs("form",{className:"SearchForm",onSubmit:n,children:[e.jsx("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the text",name:"searchLetter",min:"1",max:"20"}),e.jsx(R,{type:"submit",children:e.jsx(_,{})})]})})})},j=a.div`
  .select {
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-family: Manrope;
    font-weight: regular;
    font-size: 17px;
    color: #f3f3f3;
    width: 335px;
    height: 56px;
    border: 1px solid transparent;
    border-radius: 30px;
    role: listbox;
  }
  .select-styled {
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    background-color: #161f37;
    border: 2px solid transparent;
    border-radius: 30px;
    padding: 10px;
    @include transition(all 0.2s ease-in);
    &:after {
      content: '';
      width: 0;
      height: 0;
      border-color: #f3f3f3 transparent transparent transparent;
      position: absolute;
      top: 16px;
      right: 10px;
    }
    &:hover {
      background-color: darken(#4070cd, 2);
      border-color: transparent transparent #4070cd transparent;
    }
    &:active,
    &.active {
      background-color: darken(#4070cd, 5);
      boreder: 1px solid;
      border-radius: 20px;
      &:after {
        top: 9px;
        border-color: transparent transparent #4070cd transparent;
      }
    }
  }

  .select-options {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 999;
    margin: 0;
    padding: 0;
    list-style: none;
    color: #f3f3f3;
    background-color: darken(#161f37, 5);
    boreder: 1px solid;
    border-radius: 20px;
    li {
      font-family: Manrope;
      margin: 0;
      padding: 16px 0;
      text-indent: 20px;
      border-top: 4px solid darken(#161f37, 10);

      @include transition(all 0.15s ease-in);
      &:hover,
      &.is-selected {
        color: #f3f3f3;
        background: $select-color;
      }
      &[rel='hide'] {
        display: none;
      }
    }
  }

  @media (min-width: 768px) {
    .select {
      width: 199px;
      height: 56px;
    }
  }

  @media (min-width: 1280px) {
    .select {
      width: 199px;
      height: 56px;
    }
  }
`,H=()=>{const r=l(W),n=p(),t=o=>{const d=o.target.value;n(w(d))};return e.jsx(j,{children:e.jsxs("select",{id:"categories",name:"category",value:r,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"All categories"}),e.jsx("option",{value:"ordinary drink",children:"Ordinary Drink"}),e.jsx("option",{value:"cocktail",children:"Cocktail"}),e.jsx("option",{value:"shake",children:"Shake"}),e.jsx("option",{value:"other",children:"Other/Unknown"}),e.jsx("option",{value:"cocoa",children:"Cocoa"}),e.jsx("option",{value:"shot",children:"Shot"}),e.jsx("option",{value:"coffee tea",children:"Coffee / Tea"}),e.jsx("option",{value:"homemade liqueur",children:"Homemade Liqueur"}),e.jsx("option",{value:"punch",children:"Punch / Party Drink"}),e.jsx("option",{value:"beer",children:"Beer"}),e.jsx("option",{value:"soft drink",children:"Soft Drink"})]})})},Q=()=>{const r=l(E),n=p(),t=o=>{const d=o.target.value;n(b(d))};return e.jsx(j,{children:e.jsxs("select",{id:"ingredients",name:"ingredients",value:r,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"Ingredients"}),e.jsx("option",{value:"Light rum",children:"Light rum"}),e.jsx("option",{value:"Applejack",children:"Applejack"}),e.jsx("option",{value:"gin",children:"Gin"}),e.jsx("option",{value:"Dark rum",children:"Dark rum"}),e.jsx("option",{value:"Sweet Vermouth",children:"Sweet Vermouth"}),e.jsx("option",{value:"Strawberry",children:"Strawberry Schnapps"}),e.jsx("option",{value:"Scotch",children:"Scotch"}),e.jsx("option",{value:"Apricot brandy",children:"Apricot brandy"}),e.jsx("option",{value:"Triple sec",children:"Triple sec"}),e.jsx("option",{value:"Southern Comfort",children:"Southern Comfort"}),e.jsx("option",{value:"Orange bitters",children:"Orange bitters"}),e.jsx("option",{value:"Brandy",children:"Brandy"}),e.jsx("option",{value:"Lemon vodka",children:"Lemon vodka"}),e.jsx("option",{value:"Blended whiskey",children:"Blended whiskey"}),e.jsx("option",{value:"Dry Vermouth",children:"Dry Vermouth"}),e.jsx("option",{value:"Amaretto",children:"Amaretto"}),e.jsx("option",{value:"Tea",children:"Tea"}),e.jsx("option",{value:"Champagne",children:"Champagne"}),e.jsx("option",{value:"Coffee liqueur",children:"Coffee liqueur"}),e.jsx("option",{value:"Bourbon",children:"Bourbon"})]})})};a.div`
  margin-top: 80px;
  margin-bottom: 80px;

  /* Планшетная версия  */
  @media (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  /* Десктопная версия  */
  @media (min-width: 1280px) {
    margin-top: 80px;
  }

  .drinksTitle {
    font-weight: 600;
    font-size: 32px;
    line-height: 1.1875;
    color: var(--primary-text-color);

    margin-bottom: 40px;
  }

  /* Стили для планшетной версии */
  @media (min-width: 768px) {
    .drinksTitle {
      font-size: 56px;
      line-height: 1.1;

      margin-bottom: 60px;
    }
  }

  /* Десктопная версия  */
  @media (min-width: 1280px) {
    .drinksTitle {
      font-size: 64px;

      margin-bottom: 80px;
    }
  }

  .searchingContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 20px;
  }

  /* Стили для планшетной версии */
  @media (min-width: 768px) {
    .searchingContainer {
      flex-direction: row;
      row-gap: 0;
      column-gap: 8px;
    }
  }
`;const U=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 62px;
  }
`,Z=a.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: center;
    color: var(--primary-text-color);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.375;
    }
  }

  img {
    @media screen and (min-width: 768px) {
      width: 261px;
      height: 326px;
    }
  }
`,J=h("drinks/getAll",async(r,n)=>{try{const{data:t}=await x.get("/drinks");return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByLetter",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search",r);return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByCategory",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search/category",r);return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByIngredient",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search/ingredients",r);return t}catch(t){return n.rejectWithValue(t.message)}});const K=({id:r,name:n,img:t})=>e.jsxs(D,{children:[e.jsx(B,{children:e.jsx(F,{src:t,alt:n})}),e.jsxs(P,{children:[e.jsx(I,{children:n}),e.jsx(S,{to:`/drink/${r}`,children:e.jsx(z,{children:"See more"})})]})]}),ie=()=>{const r=p(),[n,t]=c.useState(8),[o,d]=C(),s=l(A),u=l(V),g=o.get("page")||1,m=Math.ceil(s.length/n),f=(g-1)*n,k=Math.min(f+n,s.length);return c.useEffect(()=>{r(J())},[r]),c.useEffect(()=>{const i=()=>{const y=window.innerWidth>=1200?9:8;y!==n&&t(y)};return window.addEventListener("resize",i),i(),()=>{window.removeEventListener("resize",i)}},[n,g,s]),e.jsxs("main",{className:"container",children:[e.jsx(M,{text:"Drinks"}),e.jsxs(U,{children:[e.jsx(G,{}),e.jsx(H,{}),e.jsx(Q,{})]}),e.jsxs("div",{className:"categoryListsContainer",children:[u&&e.jsx(L,{}),!u&&s.length<1&&e.jsxs(Z,{children:[e.jsx(q,{}),e.jsx("p",{children:"We haven't found any cocktails. Please try another filters."})]}),!u&&s.length>0&&e.jsx(N,{children:s.slice(f,k).map(i=>e.jsx(K,{className:"drinksListItem",id:i._id,name:i.drink,img:i.drinkThumb},i._id))})]}),m>1&&e.jsx(T,{pageQuan:m})]})};export{ie as default};
