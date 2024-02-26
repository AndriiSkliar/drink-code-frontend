import{u,a as f,b as i,c as v,r as n,d as j,j as e,L as P,e as w}from"./index-f9d8ab13.js";import{T as F}from"./Title-7ba98360.js";import{D as L,a as y}from"./DrinkCard-a98c7243.js";import{s as D,a as E,b as k}from"./selectors-339aa893.js";import{N as z}from"./NotFound-4ddb8526.js";import{P as C}from"./Pagination-c31b7e41.js";const S=u.div`
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
`,Q=()=>{const r=f(),o=i(D),m=i(E),a=i(k),[h,N]=v(),c=h.get("page")||1,[s,p]=n.useState(8);n.useEffect(()=>{r(j())},[r]),n.useEffect(()=>{const t=()=>{const l=window.innerWidth>=1200?9:8;l!==s&&p(l)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,c]);const x=Math.ceil(a/s),d=(c-1)*s,g=Math.min(d+s,a);return e.jsxs("main",{className:"container",children:[m===!0&&e.jsx(P,{}),e.jsx(F,{text:"Favorites"}),o.length===0?e.jsxs(S,{children:[e.jsx(z,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[a!==null&&e.jsx(L,{children:o.slice(d,g).map(t=>e.jsx(y,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:w},t._id))}),e.jsx(C,{pageQuan:x})]})]})};export{Q as default};
