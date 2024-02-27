import{a as g,j as e,N as v,s as S,d as j,u as k,b as l,c as y,r as d,e as C,L as P}from"./index-419dca2d.js";import{T as w}from"./Title-78efff1f.js";import{D as F,P as D}from"./Pagination-bfd3c1a6.js";import{S as L,a as N,b as E,c as z,d as I,e as W,f as b,g as T}from"./DrinkCard.styled-3bdbd207.js";import{S as M}from"./DrinksItem.styled-142f2572.js";import{s as B,a as R,b as _}from"./selectors-dad3d6eb.js";import{N as $}from"./NotFound-12825023.js";const A=({name:a,description:n,alcoholic:c,imgUrl:i,id:r})=>{const h=g(),o=s=>{h(j(s))};return e.jsxs(L,{children:[e.jsx(M,{children:e.jsx(N,{src:i,alt:a})}),e.jsxs("div",{children:[e.jsx(E,{children:a}),e.jsx(z,{children:c})]}),e.jsx(I,{children:n}),e.jsxs(W,{children:[e.jsx(v,{to:`/drink/${r}`,children:e.jsx(b,{children:"See more"})}),e.jsx(T,{onClick:()=>o(r),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},H=k.div`
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
`,V=()=>{const a=g(),n=l(B),c=l(R),i=l(_),[r,h]=y(),o=r.get("page")||1,[s,u]=d.useState(8);d.useEffect(()=>{a(C())},[a]),d.useEffect(()=>{const t=()=>{const p=window.innerWidth>=1200?9:8;p!==s&&u(p)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,o]);const x=Math.ceil(i/s),m=(o-1)*s,f=Math.min(m+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(w,{text:"Favorites"}),n.length===0?e.jsxs(H,{children:[e.jsx($,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(F,{children:n.slice(m,f).map(t=>e.jsx(A,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(D,{pageQuan:x})]})]})};export{V as default};
