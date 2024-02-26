import{u as i,j as e,a as l,N as c,e as x}from"./index-f01e9f46.js";const h=i.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    row-gap: 80px;
    column-gap: 20px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 62px;
    width: auto;
  }
`,j=({children:t})=>e.jsx(h,{children:t}),m=i.li`
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
`,w=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,g=i.p`
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
`,f=i.h2`
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
`,k=i.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,u=i.button`
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
`,b=i.button`
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
`,v=i.div`
  display: flex;
  gap: 8px;
`,S=({name:t,description:o,alcoholic:r,imgUrl:a,id:n})=>{const s=l(),d=p=>{s(x(p))};return e.jsxs(m,{children:[e.jsx(w,{src:a,alt:t}),e.jsxs("div",{children:[e.jsx(f,{children:t}),e.jsx(k,{children:r})]}),e.jsx(g,{children:o}),e.jsxs(v,{children:[e.jsx(c,{to:`/drink/${n}`,children:e.jsx(u,{children:"See more"})}),e.jsx(b,{onClick:()=>d(n),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})};export{j as D,S as a};
