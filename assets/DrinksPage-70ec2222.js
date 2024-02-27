import{r as c,u as i,a as p,j as e,o as j,b as l,p as b,q as v,t as h,v as x,N as S,c as C,L}from"./index-aaef294e.js";import{D,P as B}from"./Pagination-ee7b55b5.js";import{d as z,e as F,f as I,g as P}from"./selectors-dad3d6eb.js";import{T}from"./Title-94462df9.js";const N=r=>c.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r},c.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),E=i(N)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,W=i.button`
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
`,A=i.div`
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
`,V=()=>{const r=p(),n=t=>{t.preventDefault();const a=t.currentTarget.elements.searchLetter.value;r(j(a)).unwrap().then(()=>t.target.reset())};return e.jsx(A,{children:e.jsx("div",{children:e.jsxs("form",{className:"SearchForm",onSubmit:n,children:[e.jsx("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the text",name:"searchLetter",min:"1",max:"20"}),e.jsx(W,{type:"submit",children:e.jsx(E,{})})]})})})},w=i.div`
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
`,M=()=>{const r=l(z),n=p(),t=a=>{const d=a.target.value;n(b(d))};return e.jsx(w,{children:e.jsxs("select",{id:"categories",name:"category",value:r,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"All categories"}),e.jsx("option",{value:"ordinary drink",children:"Ordinary Drink"}),e.jsx("option",{value:"cocktail",children:"Cocktail"}),e.jsx("option",{value:"shake",children:"Shake"}),e.jsx("option",{value:"other",children:"Other/Unknown"}),e.jsx("option",{value:"cocoa",children:"Cocoa"}),e.jsx("option",{value:"shot",children:"Shot"}),e.jsx("option",{value:"coffee tea",children:"Coffee / Tea"}),e.jsx("option",{value:"homemade liqueur",children:"Homemade Liqueur"}),e.jsx("option",{value:"punch",children:"Punch / Party Drink"}),e.jsx("option",{value:"beer",children:"Beer"}),e.jsx("option",{value:"soft drink",children:"Soft Drink"})]})})},q=()=>{const r=l(F),n=p(),t=a=>{const d=a.target.value;n(v(d))};return e.jsx(w,{children:e.jsxs("select",{id:"ingredients",name:"ingredients",value:r,className:"select select-styled",onChange:t,children:[e.jsx("option",{value:"hide",children:"Ingredients"}),e.jsx("option",{value:"Light rum",children:"Light rum"}),e.jsx("option",{value:"Applejack",children:"Applejack"}),e.jsx("option",{value:"gin",children:"Gin"}),e.jsx("option",{value:"Dark rum",children:"Dark rum"}),e.jsx("option",{value:"Sweet Vermouth",children:"Sweet Vermouth"}),e.jsx("option",{value:"Strawberry",children:"Strawberry Schnapps"}),e.jsx("option",{value:"Scotch",children:"Scotch"}),e.jsx("option",{value:"Apricot brandy",children:"Apricot brandy"}),e.jsx("option",{value:"Triple sec",children:"Triple sec"}),e.jsx("option",{value:"Southern Comfort",children:"Southern Comfort"}),e.jsx("option",{value:"Orange bitters",children:"Orange bitters"}),e.jsx("option",{value:"Brandy",children:"Brandy"}),e.jsx("option",{value:"Lemon vodka",children:"Lemon vodka"}),e.jsx("option",{value:"Blended whiskey",children:"Blended whiskey"}),e.jsx("option",{value:"Dry Vermouth",children:"Dry Vermouth"}),e.jsx("option",{value:"Amaretto",children:"Amaretto"}),e.jsx("option",{value:"Tea",children:"Tea"}),e.jsx("option",{value:"Champagne",children:"Champagne"}),e.jsx("option",{value:"Coffee liqueur",children:"Coffee liqueur"}),e.jsx("option",{value:"Bourbon",children:"Bourbon"})]})})};i.div`
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
`;const O=i.div`
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
`,_=h("drinks/getAll",async(r,n)=>{try{const{data:t}=await x.get("/drinks");return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByLetter",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search",r);return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByCategory",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search/category",r);return t}catch(t){return n.rejectWithValue(t.message)}});h("drinks/getByIngredient",async(r,n)=>{try{const{data:t}=await x.get("/drinks/search/ingredients",r);return t}catch(t){return n.rejectWithValue(t.message)}});const R=i.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    row-gap: 14px;
    width: 342px;
    margin-bottom: 0;

  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,$=i.div`
        position: relative;

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
    `,G=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,H=i.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;  }
`,Q=i.p`
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
`,U=i.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2px);

  @media screen and (min-width: 768px) {
    width: 342px;
  }

@media screen and (min-width: 1280px) {
 width: 400px;
   }

  /* svg {
    width: 24px;
     height: 24px;
     stroke: #f3f3f3;
   } */
 `,Z=({id:r,name:n,img:t})=>e.jsxs(R,{children:[e.jsx($,{children:e.jsx(G,{src:t,alt:n})}),e.jsxs(U,{children:[e.jsx(H,{children:n}),e.jsx(S,{to:`/drink/${r}`,children:e.jsx(Q,{children:"See more"})})]})]}),te=()=>{const r=p(),[n,t]=c.useState(8),[a,d]=C(),s=l(I),u=l(P),g=a.get("page")||1,m=Math.ceil(s.length/n),f=(g-1)*n,k=Math.min(f+n,s.length);return c.useEffect(()=>{r(_())},[r]),c.useEffect(()=>{const o=()=>{const y=window.innerWidth>=1200?9:8;y!==n&&t(y)};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[n,g,s]),e.jsxs("main",{className:"container",children:[e.jsx(T,{text:"Drinks"}),e.jsxs(O,{children:[e.jsx(V,{}),e.jsx(M,{}),e.jsx(q,{})]}),e.jsxs("div",{className:"categoryListsContainer",children:[u&&e.jsx(L,{}),!u&&s.length<1&&e.jsx("p",{children:"Not gound drink for your request"}),!u&&s.length>0&&e.jsx(D,{children:s.slice(f,k).map(o=>e.jsx(Z,{className:"drinksListItem",id:o._id,name:o.drink,img:o.drinkThumb},o._id))})]}),m>1&&e.jsx(B,{pageQuan:m})]})};export{te as default};
