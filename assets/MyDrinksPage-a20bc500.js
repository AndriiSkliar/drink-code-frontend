import{u as k,a as g,j as e,N as y,s as S,w as j,x as u,b as d,c as C,r as h,L as P}from"./index-63edf22f.js";import{T as v}from"./Title-8b846cf6.js";import{D,P as L}from"./Pagination-8863ae5d.js";import{N}from"./NotFound-48f8f561.js";import{g as E,a as O,h as z}from"./selectors-339aa893.js";import{S as M,a as W,b as I,c as T,d as b,e as F,f as B,g as R}from"./DrinkCard.styled-c89c8043.js";const _=k.div`
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
`,$=({name:n,description:r,alcoholic:c,imgUrl:i,id:o})=>{const l=g(),a=s=>{l(j(s)).then(()=>{l(u())})};return e.jsxs(M,{children:[e.jsx(W,{src:i,alt:n}),e.jsxs("div",{children:[e.jsx(I,{children:n}),e.jsx(T,{children:c})]}),e.jsx(b,{children:r}),e.jsxs(F,{children:[e.jsx(y,{to:`/drink/${o}`,children:e.jsx(B,{children:"See more"})}),e.jsx(R,{onClick:()=>a(o),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},J=()=>{const n=g(),r=d(E),c=d(O),i=d(z),[o,l]=C(),a=o.get("page")||1,[s,f]=h.useState(8);h.useEffect(()=>{n(u())},[n,a]),h.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&f(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,a]);const x=Math.ceil(i/s),p=(a-1)*s,w=Math.min(p+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(v,{text:"My drinks"}),r.length===0?e.jsxs(_,{children:[e.jsx(N,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(D,{children:r.slice(p,w).map(t=>e.jsx($,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(L,{pageQuan:x})]})]})};export{J as default};
