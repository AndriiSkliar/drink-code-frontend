import{u as k,a as m,j as e,N as y,v as g,w as j,b as d,c as S,r as h,L as C}from"./index-c29e38d2.js";import{T as v}from"./Title-7d1d8d34.js";import{D as P,P as D}from"./Pagination-eb38013a.js";import{N as L}from"./NotFound-4bc28b36.js";import{g as N,a as E,h as O}from"./selectors-339aa893.js";import{S as z,a as M,b as W,c as I,d as T,e as b,f as F,g as B}from"./DrinkCard.styled-ca2f16c0.js";const R=k.div`
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
`,_=({name:n,description:r,alcoholic:c,imgUrl:i,id:o})=>{const l=m(),a=t=>{l(g(t)).then(()=>{l(j())})};return e.jsxs(z,{children:[e.jsx(M,{src:i,alt:n}),e.jsxs("div",{children:[e.jsx(W,{children:n}),e.jsx(I,{children:c})]}),e.jsx(T,{children:r}),e.jsxs(b,{children:[e.jsx(y,{to:`/drink/${o}`,children:e.jsx(F,{children:"See more"})}),e.jsx(B,{onClick:()=>a(o),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})},G=()=>{const n=m(),r=d(N),c=d(E),i=d(O),[o,l]=S(),a=o.get("page")||1,[t,u]=h.useState(8);h.useEffect(()=>{n(j())},[n,a]),h.useEffect(()=>{const s=()=>{const p=window.innerWidth>=1200?9:8;p!==t&&u(p)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[t,a]);const f=Math.ceil(i/t),x=(a-1)*t,w=Math.min(x+t,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(C,{}),e.jsx(v,{text:"My drinks"}),r.length===0?e.jsxs(R,{children:[e.jsx(L,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(P,{children:r.slice(x,w).map(s=>e.jsx(_,{name:s.drink,imgUrl:s.drinkThumb,description:s.description,alcoholic:s.alcoholic,id:s._id,handleDelete:g},s._id))}),e.jsx(D,{pageQuan:f})]})]})};export{G as default};
