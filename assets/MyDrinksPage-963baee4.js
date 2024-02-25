import{o as s,p as r,q as g,s as h,b as j,f as C,r as m,j as i,t as p}from"./index-1a24e705.js";import{T as y}from"./Title-abcdd13b.js";import{S as w,D as x}from"./FavoritesPage.styled-465d50ff.js";import{N as v}from"./NotFound-3c651b22.js";import{d as L}from"./selectors-db665fa7.js";const l=s("cocktails/getAll",async(a,e)=>{try{const{data:t}=await r.get("/cocktails");return t}catch(t){return e.rejectWithValue(t.message)}}),n=s("cocktails/getFavorite",async(a,e)=>{try{const{data:t}=await r.get("/api/users/favorites");return console.log(t),t}catch(t){return e.rejectWithValue(t.message)}}),d=s("cocktails/addCocktail",async(a,e)=>{try{const{data:t}=await r.post("/cocktails",a);return t}catch(t){return e.rejectWithValue(t.message)}}),u=s("cocktails/deleteCocktail",async(a,e)=>{try{const{data:t}=await r.delete(`/cocktails/${a}`);return t}catch(t){return e.rejectWithValue(t.message)}}),k=s("cocktails/addToFavorite",async(a,e)=>{try{const{data:t}=await r.put(`/cocktails/${a.id}`,a);return t}catch(t){return e.rejectWithValue(t.message)}}),f=s("cocktails/deleteFromFavorite",async(a,e)=>{try{const{data:t}=await r.put(`/cocktails/${a.id}`,a);return t}catch(t){return e.rejectWithValue(t.message)}}),o=s("coctails/fetchOwnCoctails",async(a,e)=>{try{const{data:t}=await r.get("/drinks/own");return console.log(t),t}catch(t){return e.rejectWithValue(t.message)}}),F={cocktails:[],ownCocktails:[],favoriteCocktails:[],isLoading:!1,error:null},D=g({name:"cocktails",initialState:F,reducers:{},extraReducers:a=>a.addCase(o.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.ownCocktails=t}).addCase(l.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.cocktails=t}).addCase(n.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.favoriteCocktails=t}).addCase(d.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.cocktails=[...e.cocktails,t]}).addCase(u.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==t.id)}).addCase(k.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==t.id),e.cocktails=[...e.cocktails,t]}).addCase(f.fulfilled,(e,{payload:t})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==t.id),e.cocktails=[...e.cocktails,t]}).addMatcher(h(o.pending,l.pending,n.pending,d.pending,u.pending,k.pending,f.pending),e=>{e.isLoading=!0,e.error=null}).addMatcher(h(o.rejected,l.rejected,n.rejected,d.rejected,u.rejected,k.rejected,f.rejected),(e,{payload:t})=>{e.isLoading=!1,e.error=t})});D.reducer;const _=()=>{const a=j(),e=C(L);m.useEffect(()=>{a(o())},[a]);const t=c=>{a(p(c)).then(()=>{a(o())})};return i.jsxs("main",{className:"container",children:[i.jsx(y,{text:"My drinks"}),e.length===0?i.jsxs(w,{children:[i.jsx(v,{}),i.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):i.jsx(x,{children:e.drinks.map(c=>i.jsxs("div",{children:[i.jsx("p",{children:c.drink}),i.jsx("button",{onClick:()=>t(c._id),children:"Delete"})]},c._id))})]})};export{_ as default};
