import{u as i,j as e,b as o,N as a,c as l,r as p,f as x}from"./index-d956bc24.js";import{s as h}from"./selectors-a8ab154e.js";const f=i.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 56px;
    line-height: 1.07143;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 1.0625;
  }
`,g=({text:t})=>e.jsx(f,{children:t}),m=i.ul`
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
`,w=({children:t})=>e.jsx(m,{children:t}),u=i.li`
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
`,j=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,k=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;
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
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,b=i.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,v=i.button`
  border-radius: 42px;
  border: none;
  padding: 14px 40px;
  background: #161f37;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28571;
  color: #f3f3f3;

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
  background: #161f37;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    width: 56px;
    height: 54px;
  }
`,z=i.div`
  display: flex;
  gap: 8px;
`,C=({name:t,description:s,alcoholic:n,imgUrl:r,handleDelete:d,cocktailLink:c})=>(o(),e.jsxs(u,{children:[e.jsx(j,{src:r,alt:t}),e.jsxs("div",{children:[e.jsx(y,{children:t}),e.jsx(b,{children:n})]}),e.jsx(k,{children:s}),e.jsxs(z,{children:[e.jsx(a,{to:c,children:e.jsx(v,{children:"See more"})}),e.jsx(S,{onClick:d,children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})),D=i.div`
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
    color: #f3f3f3;

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
`,F="/drink-code-frontend/assets/404Cocktail2x-edf5c5fe.png",N=()=>e.jsx("img",{src:F,alt:"cocktail",width:"198",height:"247"}),T=()=>{const t=o(),s=l(h);return p.useEffect(()=>{t(x())},[t]),e.jsxs("main",{className:"container",children:[e.jsx(g,{text:"Favorites"}),s.length===0?e.jsxs(D,{children:[e.jsx(N,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsx(w,{children:s.map(n=>e.jsx(C,{name:n.drink,imgUrl:n.drinkThumb,description:n.description,alcoholic:n.alcoholic,cocktailLink:n._id},n._id))})]})};export{T as default};
