import{r as a,u as l,j as e,b as c,N as C,a as L,c as D,p as f,L as F}from"./index-39f8cb3b.js";import{a as P,S as B,b as I,c as N,d as z,e as T,D as E,P as A}from"./Pagination-0e4a05e2.js";import{f as M,g as W,h as q,i as O}from"./drinks.selectors-d61694b4.js";import{T as V}from"./Title-ecfe899d.js";import{N as R}from"./NotFound-672df24a.js";const U=t=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),_=l(U)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,$=l.button`
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
`,G=l.div`
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
    background-color: transparent;
    opacity: 0;
    padding: 18px;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }

  .SearchForm-button-label {
    position: absolute;
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
`,H=({setDrink:t})=>{const n=i=>{i.preventDefault();const r=i.currentTarget.elements.searchLetter.value.trim();t(r)};return e.jsx(G,{children:e.jsx("div",{children:e.jsxs("form",{className:"SearchForm",onSubmit:n,children:[e.jsx("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the text",name:"searchLetter",min:"1",max:"20"}),e.jsx($,{type:"submit",children:e.jsx(_,{})})]})})})},j=l.div`
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
  }
  .select-styled {
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
`,Q=({setCategory:t})=>{const n=c(M),i=r=>{r.preventDefault();const o=r.target.value;o!=="hide"&&t(o)};return e.jsx(j,{children:e.jsxs("select",{id:"categories",name:"category",value:n,className:"select select-styled",onChange:i,children:[e.jsx("option",{value:"hide",children:"All categories"}),e.jsx("option",{value:"ordinary drink",children:"Ordinary Drink"}),e.jsx("option",{value:"cocktail",children:"Cocktail"}),e.jsx("option",{value:"shake",children:"Shake"}),e.jsx("option",{value:"other",children:"Other/Unknown"}),e.jsx("option",{value:"cocoa",children:"Cocoa"}),e.jsx("option",{value:"shot",children:"Shot"}),e.jsx("option",{value:"coffee tea",children:"Coffee / Tea"}),e.jsx("option",{value:"homemade liqueur",children:"Homemade Liqueur"}),e.jsx("option",{value:"punch",children:"Punch / Party Drink"}),e.jsx("option",{value:"beer",children:"Beer"}),e.jsx("option",{value:"soft drink",children:"Soft Drink"})]})})},Z=({setIngredient:t})=>{const n=c(W),i=r=>{const o=r.target.value;o!=="hide"&&t(o)};return e.jsx(j,{children:e.jsxs("select",{id:"ingredients",name:"ingredients",value:n,className:"select select-styled",onChange:i,children:[e.jsx("option",{value:"hide",children:"Ingredients"}),e.jsx("option",{value:"Light rum",children:"Light rum"}),e.jsx("option",{value:"Applejack",children:"Applejack"}),e.jsx("option",{value:"gin",children:"Gin"}),e.jsx("option",{value:"Dark rum",children:"Dark rum"}),e.jsx("option",{value:"Sweet Vermouth",children:"Sweet Vermouth"}),e.jsx("option",{value:"Strawberry",children:"Strawberry Schnapps"}),e.jsx("option",{value:"Scotch",children:"Scotch"}),e.jsx("option",{value:"Apricot brandy",children:"Apricot brandy"}),e.jsx("option",{value:"Triple sec",children:"Triple sec"}),e.jsx("option",{value:"Southern Comfort",children:"Southern Comfort"}),e.jsx("option",{value:"Orange bitters",children:"Orange bitters"}),e.jsx("option",{value:"Brandy",children:"Brandy"}),e.jsx("option",{value:"Lemon vodka",children:"Lemon vodka"}),e.jsx("option",{value:"Blended whiskey",children:"Blended whiskey"}),e.jsx("option",{value:"Dry Vermouth",children:"Dry Vermouth"}),e.jsx("option",{value:"Amaretto",children:"Amaretto"}),e.jsx("option",{value:"Tea",children:"Tea"}),e.jsx("option",{value:"Champagne",children:"Champagne"}),e.jsx("option",{value:"Coffee liqueur",children:"Coffee liqueur"}),e.jsx("option",{value:"Bourbon",children:"Bourbon"})]})})},J=({id:t,name:n,img:i})=>e.jsxs(P,{children:[e.jsx(B,{children:e.jsx(I,{src:i,alt:n})}),e.jsxs(N,{children:[e.jsx(z,{children:n}),e.jsx(C,{to:`/drink/${t}`,children:e.jsx(T,{children:"See more"})})]})]});l.div`
  margin-top: 80px;
  margin-bottom: 80px;

  @media (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }

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

  @media (min-width: 768px) {
    .drinksTitle {
      font-size: 56px;
      line-height: 1.1;

      margin-bottom: 60px;
    }
  }

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

  @media (min-width: 768px) {
    .searchingContainer {
      flex-direction: row;
      row-gap: 0;
      column-gap: 8px;
    }
  }
`;const K=l.div`
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
`,X=l.div`
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
`,ie=()=>{const t=L(),[n,i]=a.useState(1),r=c(q),o=c(O),[v]=D(),x=v.get("page")||1,[d,k]=a.useState(""),[p,y]=a.useState(""),[h,S]=a.useState(""),w=new URLSearchParams({drink:d,category:p,ingredient:h});a.useEffect(()=>{t(f())},[t]),a.useEffect(()=>{d===""&&p===""&&h===""||t(f(w))},[p,h,d,t]),a.useEffect(()=>{const s=()=>{const g=window.innerWidth;g>=1280?i(9):g>=768?i(8):i(10)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[n,x,r]);const m=Math.ceil(r.length/n),u=(x-1)*n,b=Math.min(u+n,r.length);return e.jsxs("main",{className:"container",children:[e.jsx(V,{text:"Drinks"}),e.jsxs(K,{children:[e.jsx(H,{setDrink:k}),e.jsx(Q,{setCategory:y}),e.jsx(Z,{setIngredient:S})]}),e.jsxs("div",{className:"categoryListsContainer",children:[o&&e.jsx(F,{}),!o&&r.length<1&&e.jsxs(X,{children:[e.jsx(R,{}),e.jsx("p",{children:"We haven't found any cocktails. Please try another filters."})]}),!o&&r.length>0&&e.jsx(E,{children:r.slice(u,b).map(s=>e.jsx(J,{className:"drinksListItem",id:s._id,name:s.drink,img:s.drinkThumb},s._id))})]}),!o&&m>1&&e.jsx(A,{pageQuan:m})]})};export{ie as default};
