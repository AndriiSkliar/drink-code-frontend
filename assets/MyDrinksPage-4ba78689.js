import{u as w,a as j,b as o,c as P,r,t as h,j as t,L as v,v as y}from"./index-f01e9f46.js";import{T as C}from"./Title-4e321e20.js";import{D,a as k}from"./DrinkCard-e41d2379.js";import{N as L}from"./NotFound-a474b446.js";import{g as E,a as z,h as O}from"./selectors-339aa893.js";import{P as S}from"./Pagination-991d7fdd.js";const M=w.div`
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
`,Q=()=>{const n=j(),c=o(E),m=o(z),a=o(O),[p,N]=P(),i=p.get("page")||1,[s,x]=r.useState(8);r.useEffect(()=>{n(h())},[n,i]),r.useEffect(()=>{const e=()=>{const l=window.innerWidth>=1200?9:8;l!==s&&x(l)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[s,i]);const g=e=>{n(y(e)).then(()=>{console.log(e),n(h())})},u=Math.ceil(a/s),d=(i-1)*s,f=Math.min(d+s,a);return t.jsxs("main",{className:"container",children:[m===!0&&t.jsx(v,{}),t.jsx(C,{text:"My drinks"}),c.length===0?t.jsxs(M,{children:[t.jsx(L,{}),t.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):t.jsxs(t.Fragment,{children:[a!==null&&t.jsx(D,{children:c.slice(d,f).map(e=>t.jsx(k,{name:e.drink,imgUrl:e.drinkThumb,description:e.description,alcoholic:e.alcoholic,id:e._id,handleDelete:()=>g(e._id)},e._id))}),t.jsx(S,{pageQuan:u})]})]})};export{Q as default};
