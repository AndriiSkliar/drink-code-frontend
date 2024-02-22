import{u as s,j as e,b as n,c as a}from"./index-90686b67.js";const o=s.h1`
  font-size: 32px;
  line-height: 1.1875;
  color: #f3f3f3;
`,l=({text:t})=>e.jsx(o,{children:t}),r=s.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,d=({children:t})=>e.jsx(r,{children:t}),x=()=>{const t=useDispatch(),i=c=>{t(deleteCocktails(c))};return e.jsxs("li",{children:[e.jsxs("a",{href:"#",children:[e.jsx("img",{src:"./src/assets/example.png",alt:"Cocktail"}),e.jsx("h2",{children:"Cocktail name"}),e.jsx("p",{children:"Alcoholic"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptate eligendi, corrupti cumque incidunt error quod, officiis praesentium optio beatae est consequuntur rerum in culpa explicabo maxime! Placeat, sint a!"})]}),e.jsx("button",{children:"See more"}),e.jsx("button",{onClick:i,children:"Delete"})]})},u=s.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`,p=t=>t.cocktails.favoriteCocktails,m=()=>{n();const t=a(p);return e.jsxs("div",{className:"container",children:[e.jsx(l,{text:"Favorites"}),t.length===0?e.jsxs(u,{children:[e.jsx("img",{srcSet:"src/assets/images/404Cocktail.png, src/assets/images/404Cocktail2x.png 2x",src:"src/assets/images/404Cocktail2x.png",alt:"glass with cocktail",width:198,height:247}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsx(d,{children:e.jsx(x,{})})]})};export{m as default};
