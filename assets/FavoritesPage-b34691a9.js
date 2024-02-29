import{a as g,j as e,N as v,s as S,d as j,u as k,b as l,c as y,r as d,e as C,L as P}from"./index-39f8cb3b.js";import{T as w}from"./Title-ecfe899d.js";import{S as F,D,P as L}from"./Pagination-0e4a05e2.js";import{S as N,a as E,b as z,c as I,d as W,e as T,f as b,g as M}from"./DrinkCard.styled-71f072be.js";import{N as B}from"./NotFound-672df24a.js";import{c as R,a as _,d as $}from"./drinks.selectors-d61694b4.js";const A=({name:a,description:n,alcoholic:c,imgUrl:i,id:r})=>{const h=g(),o=s=>{h(j(s))};return e.jsxs(N,{children:[e.jsx(F,{children:e.jsx(E,{src:i,alt:a})}),e.jsxs("div",{children:[e.jsx(z,{children:a}),e.jsx(I,{children:c})]}),e.jsx(W,{children:n}),e.jsxs(T,{children:[e.jsx(v,{to:`/drink/${r}`,children:e.jsx(b,{children:"See more"})}),e.jsx(M,{onClick:()=>o(r),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:`${S}#icon-trash`})})})]})]})},H=k.div`
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
`,O=()=>{const a=g(),n=l(R),c=l(_),i=l($),[r,h]=y(),o=r.get("page")||1,[s,u]=d.useState(8);d.useEffect(()=>{a(C())},[a]),d.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&u(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,o]);const x=Math.ceil(i/s),p=(o-1)*s,f=Math.min(p+s,i);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(P,{}),e.jsx(w,{text:"Favorites"}),n.length===0?e.jsxs(H,{children:[e.jsx(B,{}),e.jsx("p",{children:"You haven`t added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[i!==null&&e.jsx(D,{children:n.slice(p,f).map(t=>e.jsx(A,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:j},t._id))}),x>1&&e.jsx(L,{pageQuan:x})]})]})};export{O as default};
