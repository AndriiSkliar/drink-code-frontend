import{u as r,j as e,N as u,r as s,a as d,n as g,b as p,o as m,p as f,q as l,t as c}from"./index-c29e38d2.js";import{D as w,P as y}from"./Pagination-eb38013a.js";import{d as k,e as j,f as v}from"./selectors-339aa893.js";import{T as b}from"./Title-7d1d8d34.js";const S=r.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,C=r.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,L=r.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: pre-wrap;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,D=r.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  text-align: right;
  color: var(--secondary-text-color);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;r.div`
  display: flex;
  gap: 8px;
`;const B=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2px);
  @media screen and (min-width: 768px) {
    gap: 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: #f3f3f3;
  }
`,z=({id:n,name:i,img:t})=>e.jsxs(S,{children:[e.jsx(C,{src:t,alt:i}),e.jsxs(B,{children:[e.jsx(L,{children:i}),e.jsx(u,{to:`/drink/${n}`,children:e.jsx(D,{children:"See more"})})]})]});r.div`
  margin-top: 40px;
  .drinksList {
    display: grid;
    max-width: calc(100vw - 40px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;

    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // list-style: none;
    // width: calc(100% - 40px);
    // padding: 0;

    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
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
    color: var(--primary-text-color);

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
`;const F=({drinks:n})=>{const[i,t]=s.useState(1);s.useEffect(()=>{const o=()=>{const h=window.innerWidth;h>=1280?t(9):h>=768?t(8):t(10)};return window.addEventListener("resize",o),o(),console.log("drinks",n.length),()=>{window.removeEventListener("resize",o)}},[]);const a=n.slice(0,i);return e.jsx(w,{className:"drinksList",children:a.map(o=>e.jsx(z,{className:"drinksListItem",id:o._id,name:o.drink,img:o.drinkThumb},o._id))})},T=n=>s.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},s.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),N=r(T)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,I=r.button`
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
`,W=r.div`
 
  .SearchForm {
    display: flex;
    padding:18px;
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
    bacground-color: transparent;
    opacity: 0;
    padding:18px;
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
  
  }
   @media (min-width: 768px) {
     .SearchForm {
    max-width: 264px;
  }
  
  }

`,E=()=>{const n=d(),i=t=>{t.preventDefault();const a=t.currentTarget.elements.searchLetter.value;n(g(a)).unwrap().then(()=>t.target.reset())};return e.jsx(W,{children:e.jsx("div",{children:e.jsxs("form",{className:"SearchForm",onSubmit:i,children:[e.jsx("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the text",name:"searchLetter",min:"1",max:"20"}),e.jsx(I,{type:"submit",children:e.jsx(N,{})})]})})})},x=r.div`
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
`,A=()=>{const n=p(k),i=d(),t=a=>{const o=a.target.value;i(m(o))};return e.jsx(x,{children:e.jsxs("select",{id:"categories",name:"category",value:n,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"All categories"}),e.jsx("option",{value:"ordinary drink",children:"Ordinary Drink"}),e.jsx("option",{value:"cocktail",children:"Cocktail"}),e.jsx("option",{value:"shake",children:"Shake"}),e.jsx("option",{value:"other",children:"Other/Unknown"}),e.jsx("option",{value:"cocoa",children:"Cocoa"}),e.jsx("option",{value:"shot",children:"Shot"}),e.jsx("option",{value:"coffee tea",children:"Coffee / Tea"}),e.jsx("option",{value:"homemade liqueur",children:"Homemade Liqueur"}),e.jsx("option",{value:"punch",children:"Punch / Party Drink"}),e.jsx("option",{value:"beer",children:"Beer"}),e.jsx("option",{value:"soft drink",children:"Soft Drink"})]})})},V=()=>{const n=p(j),i=d(),t=a=>{const o=a.target.value;i(f(o))};return e.jsx(x,{children:e.jsxs("select",{id:"ingredients",name:"ingredients",value:n,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"Ingredients"}),e.jsx("option",{value:"Light rum",children:"Light rum"}),e.jsx("option",{value:"Applejack",children:"Applejack"}),e.jsx("option",{value:"gin",children:"Gin"}),e.jsx("option",{value:"Dark rum",children:"Dark rum"}),e.jsx("option",{value:"Sweet Vermouth",children:"Sweet Vermouth"}),e.jsx("option",{value:"Strawberry",children:"Strawberry Schnapps"}),e.jsx("option",{value:"Scotch",children:"Scotch"}),e.jsx("option",{value:"Apricot brandy",children:"Apricot brandy"}),e.jsx("option",{value:"Triple sec",children:"Triple sec"}),e.jsx("option",{value:"Southern Comfort",children:"Southern Comfort"}),e.jsx("option",{value:"Orange bitters",children:"Orange bitters"}),e.jsx("option",{value:"Brandy",children:"Brandy"}),e.jsx("option",{value:"Lemon vodka",children:"Lemon vodka"}),e.jsx("option",{value:"Blended whiskey",children:"Blended whiskey"}),e.jsx("option",{value:"Dry Vermouth",children:"Dry Vermouth"}),e.jsx("option",{value:"Amaretto",children:"Amaretto"}),e.jsx("option",{value:"Tea",children:"Tea"}),e.jsx("option",{value:"Champagne",children:"Champagne"}),e.jsx("option",{value:"Coffee liqueur",children:"Coffee liqueur"}),e.jsx("option",{value:"Bourbon",children:"Bourbon"})]})})};r.div`
  @media (min-width: 1280px) {
    padding: 0 100px;
    margin: 160px 0 140px 0;
  }

  /* Стили для мобильной версии */
  padding: 80px 20px;
  .searchingContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  .categoryListsContainer {
    margin-bottom: 60px;
  }

  .drinksTitle {
    font-weight: 600;
    font-size: 28px;
    line-height: 1.14286;
    color: var(--primary-text-color);

    margin-bottom: 80px;
  }

  /* Стили для планшетной версии (если они отличаются от мобильной) */
  @media (min-width: 768px) {
    .drinksTitle {
      font-size: 40px;
      line-height: 1.1;

      margin-bottom: 40px;
    }
    .searchingContainer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      gap: 20px;
    }
  }

  /* Стили для десктопной версии (если они отличаются от мобильной и планшетной) */
  @media (min-width: 1280px) {
    .drinksTitle {
      line-height: 1.1;
    }
    .searchingContainer {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
`;const M=r.div`
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
`,q=l("drinks/getAll",async(n,i)=>{try{const{data:t}=await c.get("/drinks");return t}catch(t){return i.rejectWithValue(t.message)}});l("drinks/getByLetter",async(n,i)=>{try{const{data:t}=await c.get("/drinks/search",n);return t}catch(t){return i.rejectWithValue(t.message)}});l("drinks/getByCategory",async(n,i)=>{try{const{data:t}=await c.get("/drinks/search/category",n);return t}catch(t){return i.rejectWithValue(t.message)}});l("drinks/getByIngredient",async(n,i)=>{try{const{data:t}=await c.get("/drinks/search/ingredients",n);return t}catch(t){return i.rejectWithValue(t.message)}});const $=()=>{const n=d();let i=1;const t=p(v);if(s.useEffect(()=>{n(q())},[n]),t.length>7){const a=window.innerWidth;a>=1280?i=Math.ceil(t.length/9):a>=768?i=Math.ceil(t.length/8):i=Math.ceil(t.length/10)}return e.jsxs("main",{className:"container",children:[e.jsx(b,{text:"Drinks"}),e.jsxs(M,{children:[e.jsx(E,{}),e.jsx(A,{}),e.jsx(V,{})]}),e.jsxs("div",{className:"categoryListsContainer",children:[t.length>0&&e.jsx(F,{drinks:t}),t.length<1&&e.jsx("alert",{children:"Not gound drink for your request"})]}),i>1&&e.jsx(y,{pageQuan:i})]})};export{$ as default};
