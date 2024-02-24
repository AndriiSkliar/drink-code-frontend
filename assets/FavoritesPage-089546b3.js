import{u as r,j as i,b as o,N as h,c as s,i as a,d as p,r as x}from"./index-924862a7.js";const f=r.h1`
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
`,g=({text:t})=>i.jsx(f,{children:t}),m=r.ul`
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
`,u=({children:t})=>i.jsx(m,{children:t}),w=r.li`
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
`,k=r.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,y=r.p`
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
`,j=r.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: #f3f3f3;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`,v=r.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: rgba(243, 243, 243, 0.5);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,b=r.button`
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
`,C=r.button`
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
`,S=r.div`
  display: flex;
  gap: 8px;
`,z=({name:t,description:n,alcoholic:e,imgUrl:c,handleDelete:d,cocktailLink:l})=>(o(),i.jsxs(w,{children:[i.jsx(k,{src:c,alt:t}),i.jsxs("div",{children:[i.jsx(j,{children:t}),i.jsx(v,{children:e})]}),i.jsx(y,{children:n}),i.jsxs(S,{children:[i.jsx(h,{to:l,children:i.jsx(b,{children:"See more"})}),i.jsx(C,{onClick:d,children:i.jsx("svg",{children:i.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})),F=r.div`
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
`;s("cocktails/getAll",async(t,n)=>{try{const{data:e}=await a.get("/drinks");return e}catch(e){return n.rejectWithValue(e.message)}});const W=s("cocktails/getFavorite",async(t,n)=>{try{const{data:e}=await a.get("/drinks/favorites");return console.log(e),e.drinks}catch(e){return n.rejectWithValue(e.message)}});s("cocktails/addCocktail",async(t,n)=>{try{const{data:e}=await a.post("/drinks/own/add",t);return e}catch(e){return n.rejectWithValue(e.message)}});s("cocktails/deleteOwnCocktail",async(t,n)=>{try{const{data:e}=await a.delete(`/drinks/own/remove/${t}`);return e}catch(e){return n.rejectWithValue(e.message)}});s("cocktails/addToFavorite",async(t,n)=>{try{const{data:e}=await a.post(`/drinks/favorites/add/${t.id}`,t);return e}catch(e){return n.rejectWithValue(e.message)}});s("cocktails/deleteFromFavorites",async(t,n)=>{try{const{data:e}=await a.delete(`/drinks/favorites/remove/${t.id}`,t);return e}catch(e){return n.rejectWithValue(e.message)}});const D=t=>t.cocktails.favoriteCocktails,N="/drink-code-frontend/assets/404Cocktail2x-edf5c5fe.png",V=()=>i.jsx("img",{src:N,alt:"cocktail",width:"198",height:"247"}),L=()=>{const t=o(),n=p(D);return x.useEffect(()=>{t(W())},[t]),i.jsxs("main",{className:"container",children:[i.jsx(g,{text:"Favorites"}),n.length===0?i.jsxs(F,{children:[i.jsx(V,{}),i.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):i.jsx(u,{children:n.map(e=>i.jsx(z,{name:e.drink,imgUrl:e.drinkThumb,description:e.description,alcoholic:e.alcoholic,cocktailLink:e._id},e._id))})]})};export{L as default};
