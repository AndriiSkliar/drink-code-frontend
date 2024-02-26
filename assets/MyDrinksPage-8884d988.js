import{u as k,a as m,j as e,N as y,t as g,v as j,b as d,c as S,r as h,L as C}from"./index-ac8f8fa7.js";import{T as v}from"./Title-724aa802.js";import{S as P,a as D,b as L,c as N,d as E,e as O,f as z,g as M,D as W}from"./DrinkCard.styled-dd2c2334.js";import{N as I}from"./NotFound-37123acf.js";import{g as T,a as b,h as F}from"./selectors-339aa893.js";import{P as B}from"./Pagination-b45a55fe.js";const R=k.div`
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
`,_=({name:n,description:r,alcoholic:c,imgUrl:i,id:o})=>{const l=m(),a=t=>{l(g(t)).then(()=>{l(j())})};return e.jsxs(P,{children:[e.jsx(D,{src:i,alt:n}),e.jsxs("div",{children:[e.jsx(L,{children:n}),e.jsx(N,{children:c})]}),e.jsx(E,{children:r}),e.jsxs(O,{children:[e.jsx(y,{to:`/drink/${o}`,children:e.jsx(z,{children:"See more"})}),e.jsx(M,{onClick:()=>a(o),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})},G=()=>{const n=m(),r=d(T),c=d(b),i=d(F),[o,l]=S(),a=o.get("page")||1,[t,u]=h.useState(8);h.useEffect(()=>{n(j())},[n,a]),h.useEffect(()=>{const s=()=>{const p=window.innerWidth>=1200?9:8;p!==t&&u(p)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[t,a]);const f=Math.ceil(i/t),x=(a-1)*t,w=Math.min(x+t,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(C,{}),e.jsx(v,{text:"My drinks"}),r.length===0?e.jsxs(R,{children:[e.jsx(I,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(W,{children:r.slice(x,w).map(s=>e.jsx(_,{name:s.drink,imgUrl:s.drinkThumb,description:s.description,alcoholic:s.alcoholic,id:s._id,handleDelete:g},s._id))}),e.jsx(B,{pageQuan:f})]})]})};export{G as default};
