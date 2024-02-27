import{a as g,j as e,N as v,s as S,d as j,u as k,b as l,c as y,r as d,e as P,L as C}from"./index-571eafcf.js";import{T as w}from"./Title-07d83730.js";import{D as F,P as D}from"./Pagination-4790534c.js";import{S as L,a as N,b as E,c as z,d as W,e as b,f as I,g as T}from"./DrinkCard.styled-659eabc2.js";import{s as M,a as B,b as R}from"./selectors-339aa893.js";import{N as _}from"./NotFound-e3e11cd0.js";const $=({name:a,description:n,alcoholic:c,imgUrl:i,id:r})=>{const h=g(),o=s=>{h(j(s))};return e.jsxs(L,{children:[e.jsx(N,{src:i,alt:a}),e.jsxs("div",{children:[e.jsx(E,{children:a}),e.jsx(z,{children:c})]}),e.jsx(W,{children:n}),e.jsxs(b,{children:[e.jsx(v,{to:`/drink/${r}`,children:e.jsx(I,{children:"See more"})}),e.jsx(T,{onClick:()=>o(r),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},A=k.div`
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
`,K=()=>{const a=g(),n=l(M),c=l(B),i=l(R),[r,h]=y(),o=r.get("page")||1,[s,u]=d.useState(8);d.useEffect(()=>{a(P())},[a]),d.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&u(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,o]);const x=Math.ceil(i/s),p=(o-1)*s,f=Math.min(p+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(C,{}),e.jsx(w,{text:"Favorites"}),n.length===0?e.jsxs(A,{children:[e.jsx(_,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(F,{children:n.slice(p,f).map(t=>e.jsx($,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(D,{pageQuan:x})]})]})};export{K as default};
