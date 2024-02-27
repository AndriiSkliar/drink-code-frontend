import{a as g,j as e,N as v,s as S,d as j,u as k,b as l,c as y,r as d,e as P,L as C}from"./index-aaef294e.js";import{T as w}from"./Title-94462df9.js";import{D as F,P as D}from"./Pagination-ee7b55b5.js";import{S as L,a as N,b as E,c as z,d as W,e as b,f as I,g as T}from"./DrinkCard.styled-c9d173fa.js";import{s as M,a as B,b as R}from"./selectors-dad3d6eb.js";import{N as _}from"./NotFound-53b28eb1.js";const $=({name:a,description:i,alcoholic:c,imgUrl:n,id:r})=>{const h=g(),o=s=>{h(j(s))};return e.jsxs(L,{children:[e.jsx(N,{src:n,alt:a}),e.jsxs("div",{children:[e.jsx(E,{children:a}),e.jsx(z,{children:c})]}),e.jsx(W,{children:i}),e.jsxs(b,{children:[e.jsx(v,{to:`/drink/${r}`,children:e.jsx(I,{children:"See more"})}),e.jsx(T,{onClick:()=>o(r),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},A=k.div`
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
`,K=()=>{const a=g(),i=l(M),c=l(B),n=l(R),[r,h]=y(),o=r.get("page")||1,[s,u]=d.useState(8);d.useEffect(()=>{a(P()),console.log(i)},[a]),d.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&u(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,o]);const x=Math.ceil(n/s),p=(o-1)*s,f=Math.min(p+s,n);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(C,{}),e.jsx(w,{text:"Favorites"}),i.length===0?e.jsxs(A,{children:[e.jsx(_,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[n!==null&&e.jsx(F,{children:i.slice(p,f).map(t=>e.jsx($,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(D,{pageQuan:x})]})]})};export{K as default};
