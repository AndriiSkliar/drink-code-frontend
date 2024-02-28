import{a as g,j as e,N as w,s as S,q as j,t as u,u as y,b as d,c as C,r as h,L as P}from"./index-1665dc1d.js";import{T as v}from"./Title-a0acee72.js";import{S as D,D as L,P as N}from"./Pagination-120514df.js";import{N as E}from"./NotFound-5a27a328.js";import{S as O,a as z,b as I,c as M,d as W,e as T,f as b,g as F}from"./DrinkCard.styled-03cfde74.js";import{j as B,a as R,k as _}from"./drinks.selectors-3548c9f3.js";const $=({name:n,description:r,alcoholic:c,imgUrl:i,id:o})=>{const l=g(),a=s=>{l(j(s)).then(()=>{l(u())})};return e.jsxs(O,{children:[e.jsx(D,{children:e.jsx(z,{src:i,alt:n})}),e.jsxs("div",{children:[e.jsx(I,{children:n}),e.jsx(M,{children:c})]}),e.jsx(W,{children:r}),e.jsxs(T,{children:[e.jsx(w,{to:`/drink/${o}`,children:e.jsx(b,{children:"See more"})}),e.jsx(F,{onClick:()=>a(o),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},q=y.div`
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
`,K=()=>{const n=g(),r=d(B),c=d(R),i=d(_),[o,l]=C(),a=o.get("page")||1,[s,f]=h.useState(8);h.useEffect(()=>{n(u())},[n,a]),h.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&f(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,a]);const x=Math.ceil(i/s),p=(a-1)*s,k=Math.min(p+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(v,{text:"My drinks"}),r.length===0?e.jsxs(q,{children:[e.jsx(E,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(L,{children:r.slice(p,k).map(t=>e.jsx($,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(N,{pageQuan:x})]})]})};export{K as default};
