import{k as s,l as r,m as g,o as h,b as j,c as C,r as m,j as i,p}from"./index-4fa3fb4b.js";import{T as y,S as w,N as x,D as v}from"./NotFound-1ae7f950.js";import{b as L}from"./selectors-5d6c5d01.js";const o=s("cocktails/getAll",async(t,e)=>{try{const{data:a}=await r.get("/cocktails");return a}catch(a){return e.rejectWithValue(a.message)}}),n=s("cocktails/getFavorite",async(t,e)=>{try{const{data:a}=await r.get("/api/users/favorites");return console.log(a),a}catch(a){return e.rejectWithValue(a.message)}}),d=s("cocktails/addCocktail",async(t,e)=>{try{const{data:a}=await r.post("/cocktails",t);return a}catch(a){return e.rejectWithValue(a.message)}}),k=s("cocktails/deleteCocktail",async(t,e)=>{try{const{data:a}=await r.delete(`/cocktails/${t}`);return a}catch(a){return e.rejectWithValue(a.message)}}),u=s("cocktails/addToFavorite",async(t,e)=>{try{const{data:a}=await r.put(`/cocktails/${t.id}`,t);return a}catch(a){return e.rejectWithValue(a.message)}}),f=s("cocktails/deleteFromFavorite",async(t,e)=>{try{const{data:a}=await r.put(`/cocktails/${t.id}`,t);return a}catch(a){return e.rejectWithValue(a.message)}}),l=s("coctails/fetchOwnCoctails",async(t,e)=>{try{const{data:a}=await r.get("/drinks/own");return console.log(a),a}catch(a){return e.rejectWithValue(a.message)}}),F={cocktails:[],ownCocktails:[],favoriteCocktails:[],isLoading:!1,error:null},D=g({name:"cocktails",initialState:F,reducers:{},extraReducers:t=>t.addCase(l.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.ownCocktails=a}).addCase(o.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.cocktails=a}).addCase(n.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.favoriteCocktails=a}).addCase(d.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.cocktails=[...e.cocktails,a]}).addCase(k.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==a.id)}).addCase(u.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==a.id),e.cocktails=[...e.cocktails,a]}).addCase(f.fulfilled,(e,{payload:a})=>{e.isLoading=!1,e.cocktails=e.cocktails.filter(c=>c.id!==a.id),e.cocktails=[...e.cocktails,a]}).addMatcher(h(l.pending,o.pending,n.pending,d.pending,k.pending,u.pending,f.pending),e=>{e.isLoading=!0,e.error=null}).addMatcher(h(l.rejected,o.rejected,n.rejected,d.rejected,k.rejected,u.rejected,f.rejected),(e,{payload:a})=>{e.isLoading=!1,e.error=a})});D.reducer;const O=()=>{const t=j(),e=C(L);m.useEffect(()=>{t(l())},[t]);const a=c=>{t(p(c)).then(()=>{t(l())})};return i.jsxs("main",{className:"container",children:[i.jsx(y,{text:"My drinks"}),e.length===0?i.jsxs(w,{children:[i.jsx(x,{}),i.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):i.jsx(v,{children:e.drinks.map(c=>i.jsxs("div",{children:[i.jsx("p",{children:c.drink}),i.jsx("button",{onClick:()=>a(c._id),children:"Delete"})]},c._id))})]})};export{O as default};