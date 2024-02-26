import{a as m,j as e,N as v,d as g,u as S,b as l,c as k,r as d,e as y,L as P}from"./index-d75126a6.js";import{T as C}from"./Title-ac4d64fe.js";import{S as w,a as F,b as D,c as L,d as N,e as E,f as z,g as W,D as b}from"./DrinkCard.styled-fd6528f1.js";import{s as I,a as T,b as M}from"./selectors-339aa893.js";import{N as B}from"./NotFound-46c3d573.js";import{P as R}from"./Pagination-1b927f01.js";const _=({name:i,description:n,alcoholic:c,imgUrl:a,id:r})=>{const h=m(),o=t=>{h(g(t))};return e.jsxs(w,{children:[e.jsx(F,{src:a,alt:i}),e.jsxs("div",{children:[e.jsx(D,{children:i}),e.jsx(L,{children:c})]}),e.jsx(N,{children:n}),e.jsxs(E,{children:[e.jsx(v,{to:`/drink/${r}`,children:e.jsx(z,{children:"See more"})}),e.jsx(W,{onClick:()=>o(r),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})},A=S.div`
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
`,J=()=>{const i=m(),n=l(I),c=l(T),a=l(M),[r,h]=k(),o=r.get("page")||1,[t,j]=d.useState(8);d.useEffect(()=>{i(y())},[i]),d.useEffect(()=>{const s=()=>{const p=window.innerWidth>=1200?9:8;p!==t&&j(p)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[t,o]);const u=Math.ceil(a/t),x=(o-1)*t,f=Math.min(x+t,a);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(C,{text:"Favorites"}),n.length===0?e.jsxs(A,{children:[e.jsx(B,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[a!==null&&e.jsx(b,{children:n.slice(x,f).map(s=>e.jsx(_,{name:s.drink,imgUrl:s.drinkThumb,description:s.description,alcoholic:s.alcoholic,id:s._id,handleDelete:g},s._id))}),e.jsx(R,{pageQuan:u})]})]})};export{J as default};
