import{u as w,a as g,j as e,N as y,s as S,x as j,y as u,b as d,c as C,r as h,L as P}from"./index-edeae60b.js";import{T as v}from"./Title-28a1743f.js";import{S as D,D as L,P as N}from"./Pagination-a0337004.js";import{N as E}from"./NotFound-607c8d6b.js";import{h as O,a as z,i as I}from"./selectors-dad3d6eb.js";import{S as M,a as W,b as T,c as b,d as F,e as B,f as R,g as _}from"./DrinkCard.styled-1eed4b6c.js";const $=w.div`
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
`,A=({name:n,description:r,alcoholic:c,imgUrl:i,id:o})=>{const l=g(),a=s=>{l(j(s)).then(()=>{l(u())})};return e.jsxs(M,{children:[e.jsx(D,{children:e.jsx(W,{src:i,alt:n})}),e.jsxs("div",{children:[e.jsx(T,{children:n}),e.jsx(b,{children:c})]}),e.jsx(F,{children:r}),e.jsxs(B,{children:[e.jsx(y,{to:`/drink/${o}`,children:e.jsx(R,{children:"See more"})}),e.jsx(_,{onClick:()=>a(o),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},K=()=>{const n=g(),r=d(O),c=d(z),i=d(I),[o,l]=C(),a=o.get("page")||1,[s,f]=h.useState(8);h.useEffect(()=>{n(u())},[n,a]),h.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&f(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,a]);const x=Math.ceil(i/s),p=(a-1)*s,k=Math.min(p+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(v,{text:"My drinks"}),r.length===0?e.jsxs($,{children:[e.jsx(E,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(L,{children:r.slice(p,k).map(t=>e.jsx(A,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(N,{pageQuan:x})]})]})};export{K as default};
