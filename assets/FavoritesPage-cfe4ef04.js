import{u as t,j as e,N as d,b as c,c as l,r as p,f as x}from"./index-c4692de3.js";import{T as h}from"./Title-f233d8e5.js";import{S as m,N as f,D as g}from"./NotFound-53bed4c5.js";import{s as w}from"./selectors-5d6c5d01.js";const k=t.li`
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
`,u=t.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,v=t.p`
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
`,b=t.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: pre-wrap;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,j=t.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,y=t.button`
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
`,S=t.button`
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
`,C=t.div`
  display: flex;
  gap: 8px;
`,z=({name:o,description:r,alcoholic:i,imgUrl:n,handleDelete:s,id:a})=>e.jsxs(k,{children:[e.jsx(u,{src:n,alt:o}),e.jsxs("div",{children:[e.jsx(b,{children:o}),e.jsx(j,{children:i})]}),e.jsx(v,{children:r}),e.jsxs(C,{children:[e.jsx(d,{to:`/drink/${a}`,children:e.jsx(y,{children:"See more"})}),e.jsx(S,{onClick:s,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]}),T=()=>{const o=c(),r=l(w);return p.useEffect(()=>{o(x())},[o]),e.jsxs("main",{className:"container",children:[e.jsx(h,{text:"Favorites"}),r.length===0?e.jsxs(m,{children:[e.jsx(f,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsx(g,{children:r.map(i=>e.jsx(z,{name:i.drink,imgUrl:i.drinkThumb,description:i.description,alcoholic:i.alcoholic,id:i._id},i._id))})]})};export{T as default};
