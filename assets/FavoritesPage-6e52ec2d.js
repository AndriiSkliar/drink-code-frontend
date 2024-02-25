import{u as i,j as e,N as c,b as d,c as l,r as p,f as x}from"./index-d62e7a3c.js";import{s as h}from"./selectors-a8ab154e.js";const m=i.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: var(--primary-text-color);
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`,f=({text:t})=>e.jsx(m,{children:t}),g=i.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 80px;
    justify-content: flex-start;
  }
`,w=({children:t})=>e.jsx(g,{children:t}),u=i.li`
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
`,k=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,v=i.p`
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
`,y=i.h2`
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
`,j=i.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,b=i.button`
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
`,S=i.button`
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
`,z=i.div`
  display: flex;
  gap: 8px;
`,C=({name:t,description:o,alcoholic:n,imgUrl:r,handleDelete:s,id:a})=>e.jsxs(u,{children:[e.jsx(k,{src:r,alt:t}),e.jsxs("div",{children:[e.jsx(y,{children:t}),e.jsx(j,{children:n})]}),e.jsx(v,{children:o}),e.jsxs(z,{children:[e.jsx(c,{to:`/drink/${a}`,children:e.jsx(b,{children:"See more"})}),e.jsx(S,{onClick:s,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]}),D=i.div`
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
`,F="/drink-code-frontend/assets/404Cocktail2x-edf5c5fe.png",N="/drink-code-frontend/assets/404Cocktail-5c1fb6aa.png",E=()=>e.jsx("img",{srcSet:N,src:F,alt:"cocktail",width:"198",height:"247"}),B=()=>{const t=d(),o=l(h);return p.useEffect(()=>{t(x())},[t]),e.jsxs("main",{className:"container",children:[e.jsx(f,{text:"Favorites"}),o.length===0?e.jsxs(D,{children:[e.jsx(E,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsx(w,{children:o.map(n=>e.jsx(C,{name:n.drink,imgUrl:n.drinkThumb,description:n.description,alcoholic:n.alcoholic,id:n._id},n._id))})]})};export{B as default};
