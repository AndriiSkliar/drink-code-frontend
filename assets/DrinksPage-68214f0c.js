import{r as a,u as d,j as e,a as j,b as p,p as D,L as y,N as F,c as P,q as k}from"./index-22cea3d6.js";import{a as I,S as E,b as N,c as z,d as B,e as T,D as M,P as W}from"./Pagination-1d28e70b.js";import{f as q,a as R,b as O,g as U,h as V}from"./drinks.selectors-106952d2.js";import{T as _}from"./Title-8479c625.js";import{N as $}from"./NotFound-a7e07f6d.js";const A=t=>a.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},a.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#F3F3F3",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})),H=d(A)`
  width: 28px;
  height: 28px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,Q=d.button`
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
`,Z=d.div`
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
`,G=({setDrink:t})=>{const n=r=>{r.preventDefault();const i=r.currentTarget.elements.searchLetter.value.trim();t(i)};return e.jsx(Z,{children:e.jsx("div",{children:e.jsxs("form",{className:"SearchForm",onSubmit:n,children:[e.jsx("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter the text",name:"searchLetter",min:"1",max:"20"}),e.jsx(Q,{type:"submit",children:e.jsx(H,{})})]})})})},w=d.div`
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
`,J=({setCategory:t})=>{const n=r=>{r.preventDefault();const i=r.target.value;i!=="hide"&&t(i),i==="hide"&&t("")};return e.jsx(w,{children:e.jsxs("select",{id:"categories",name:"category",defaultValue:"hide",className:"select select-styled",onChange:n,children:[e.jsx("option",{value:"hide",children:"All categories"}),e.jsx("option",{value:"ordinary drink",children:"Ordinary Drink"}),e.jsx("option",{value:"cocktail",children:"Cocktail"}),e.jsx("option",{value:"shake",children:"Shake"}),e.jsx("option",{value:"other",children:"Other/Unknown"}),e.jsx("option",{value:"cocoa",children:"Cocoa"}),e.jsx("option",{value:"shot",children:"Shot"}),e.jsx("option",{value:"coffee",children:"Coffee / Tea"}),e.jsx("option",{value:"homemade liqueur",children:"Homemade Liqueur"}),e.jsx("option",{value:"punch",children:"Punch / Party Drink"}),e.jsx("option",{value:"beer",children:"Beer"}),e.jsx("option",{value:"soft drink",children:"Soft Drink"})]})})},K=({setIngredient:t})=>{const n=j(),r=p(q),i=p(R),c=p(O);a.useEffect(()=>{n(D())},[n]);const h=o=>{o.preventDefault();const l=o.target.value;l!=="hide"&&t(l),l==="hide"&&t("")};return e.jsxs(w,{children:[i&&e.jsx(y,{}),c&&e.jsxs("p",{children:["Error: ",c]}),e.jsxs("select",{id:"ingredients",name:"ingredients",defaultValue:"hide",className:"select select-styled",onChange:h,children:[e.jsx("option",{value:"hide",children:"Ingredients"}),r.map(o=>e.jsx("option",{value:o.title,children:o.title},o.id))]})]})},X=({id:t,name:n,img:r})=>e.jsxs(I,{children:[e.jsx(E,{children:e.jsx(N,{src:r,alt:n})}),e.jsxs(z,{children:[e.jsx(B,{children:n}),e.jsx(F,{to:`/drink/${t}`,children:e.jsx(T,{children:"See more"})})]})]});d.div`
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
`;const Y=d.div`
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
`,ee=d.div`
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
`,oe=()=>{const t=j(),[n,r]=a.useState(1),i=p(U),c=p(V),[h]=P(),o=h.get("page")||1,[l,S]=a.useState(""),[x,b]=a.useState(""),[m,v]=a.useState(""),C=new URLSearchParams({drink:l,category:x,ingredient:m});a.useEffect(()=>{t(k())},[t]),a.useEffect(()=>{t(k(C))},[x,m,l,t]),a.useEffect(()=>{const s=()=>{const f=window.innerWidth;f>=1280?r(9):f>=768?r(8):r(10)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[n,o,i]);const g=Math.ceil(i.length/n),u=(o-1)*n,L=Math.min(u+n,i.length);return e.jsxs("main",{className:"container",children:[e.jsx(_,{text:"Drinks"}),e.jsxs(Y,{children:[e.jsx(G,{setDrink:S}),e.jsx(J,{setCategory:b}),e.jsx(K,{setIngredient:v})]}),e.jsxs("div",{className:"categoryListsContainer",children:[c&&e.jsx(y,{}),!c&&i.length<1&&e.jsxs(ee,{children:[e.jsx($,{}),e.jsx("p",{children:"We haven't found any cocktails. Please try another filters."})]}),!c&&i.length>0&&e.jsx(M,{children:i.slice(u,L).map(s=>e.jsx(X,{className:"drinksListItem",id:s._id,name:s.drink,img:s.drinkThumb},s._id))})]}),!c&&g>1&&e.jsx(W,{pageQuan:g})]})};export{oe as default};
