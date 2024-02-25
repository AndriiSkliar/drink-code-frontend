import{u as i,a as g,j as e,N as k,d as f,b as l,c as b,r as p,e as j,L as y}from"./index-58b0adbb.js";import{T as S}from"./Title-06b5731d.js";import{S as P,D as C}from"./FavoritesPage.styled-c1a1d44d.js";import{s as z,a as F,b as D}from"./selectors-d3804845.js";import{N as L}from"./NotFound-3753ed77.js";import{P as N}from"./Pagination-1852039d.js";const E=i.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }

  svg {
    width: 24px;
    height: 24px;
    stroke: #f3f3f3;
  }
`,W=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,I=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--primary-text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  white-space: pre-wrap;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`,T=i.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: pre-wrap;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,M=i.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,B=i.button`
  border-radius: 42px;
  border: none;
  padding: 14px 40px;
  background: var(--primary-black-color);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;

  &:hover {
    background: #050e24;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.125;
  }
`,R=i.button`
  border-radius: 40px;
  border: none;
  width: 46px;
  height: 46px;
  background: var(--primary-black-color);
  color: #f3f3f3;

  &:hover {
    background: #050e24;
  }

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 54px;
  }
`,_=i.div`
  display: flex;
  gap: 8px;
`,A=({name:n,description:r,alcoholic:c,imgUrl:o,id:a})=>{const h=g(),d=s=>{h(f(s))};return e.jsxs(E,{children:[e.jsx(W,{src:o,alt:n}),e.jsxs("div",{children:[e.jsx(T,{children:n}),e.jsx(M,{children:c})]}),e.jsx(I,{children:r}),e.jsxs(_,{children:[e.jsx(k,{to:`/drink/${a}`,children:e.jsx(B,{children:"See more"})}),e.jsx(R,{onClick:()=>d(a),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})},J=()=>{const n=g(),r=l(z),c=l(F),o=l(D),[a,h]=b(),d=a.get("page")||1,[s,w]=p.useState(8);p.useEffect(()=>{n(j())},[n]),p.useEffect(()=>{const t=()=>{const m=window.innerWidth>=1200?9:8;m!==s&&w(m)};return window.addEventListener("resize",t),t(),()=>{window.removeEventListener("resize",t)}},[s,d]);const u=Math.ceil(o/s),x=(d-1)*s,v=Math.min(x+s,o);return e.jsxs("main",{className:"container",children:[c===!0&&e.jsx(y,{}),e.jsx(S,{text:"Favorites"}),r.length===0?e.jsxs(P,{children:[e.jsx(L,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[o!==null&&e.jsx(C,{children:r.slice(x,v).map(t=>e.jsx(A,{name:t.drink,imgUrl:t.drinkThumb,description:t.description,alcoholic:t.alcoholic,id:t._id,handleDelete:f},t._id))}),e.jsx(N,{pageQuan:u})]})]})};export{J as default};
