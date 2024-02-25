import{u as o,a as k,j as e,N as C,d as j,c as S,e as y,r as h,b as w,g as z,L as F}from"./index-2f979c0e.js";import{T as N}from"./Title-110e3d78.js";import{S as I,D as L}from"./FavoritesPage.styled-41032580.js";import{s as D,a as $,b as B}from"./selectors-db665fa7.js";import{N as E}from"./NotFound-9fa7af04.js";const W=o.li`
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
`,O=o.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,T=o.p`
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
`,A=o.h2`
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
`,M=o.p`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,R=o.button`
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
`,V=o.button`
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
`,_=o.div`
  display: flex;
  gap: 8px;
`,H=({name:p,description:l,alcoholic:u,imgUrl:x,id:g})=>{const i=k(),n=a=>{i(j(a))};return e.jsxs(W,{children:[e.jsx(O,{src:x,alt:p}),e.jsxs("div",{children:[e.jsx(A,{children:p}),e.jsx(M,{children:u})]}),e.jsx(T,{children:l}),e.jsxs(_,{children:[e.jsx(C,{to:`/drink/${g}`,children:e.jsx(R,{children:"See more"})}),e.jsx(V,{onClick:()=>n(g),children:e.jsx("svg",{children:e.jsx("use",{xlinkHref:"/src/assets/icons/icons.svg#icon-trash"})})})]})]})},Q=o.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 24px;
`,v=o.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 25px;
`,U=o.button`
  background-color: transparent;
  border: none;
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  &.active {
    width: 27px;
    height: 27px;
    color: var(--primary-text-color-footer);
    background-color: var(--pagination-color);
    border-radius: 100%;
  }
`,Y=o.div`
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=({pageQuan:p})=>{const l=S(),[u]=y(),[x,g]=h.useState(1),i=[];for(let t=1;t<=p;t++)i.push(t);const[n,a]=h.useState(1),[c,b]=h.useState([]);h.useEffect(()=>{let t=[...c],s="...",d="... ",f=" ...";if(i.length<9)t=i;else if(n>=1&&n<=3)t=[1,2,3,4,5,s,i.length];else if(n===4)t=[...i.slice(0,5),s,i.length];else if(n>4&&n<i.length-2){const m=i.slice(n-2,n),P=i.slice(n,n+1);t=[1,d,...m,...P,f,i.length]}else if(n>i.length-3){const m=i.slice(i.length-5);t=[1,d,...m]}else n===s?a(c[c.length-3]+1):n===f?a(c[3]+2):n===d&&a(c[3]-2);b(t),g(n)},[n]);const r=u.get("page")??"1";return e.jsx(e.Fragment,{children:e.jsxs(Y,{children:[e.jsx(v,{type:"button",className:`${n===1?"disabled":""}`,onClick:()=>{parseInt(r)>1&&(l(`?page=${parseInt(r)-1}`),a(t=>t<=1?t:t-1))},disabled:parseInt(r)<=1,children:"<"}),e.jsx(Q,{children:c.map((t,s)=>e.jsx(U,{type:"button","data-pagination-value":t,className:`${parseInt(r)===t?"active":""}`,onClick:d=>{a(t),d.target.dataset.paginationValue!==" ..."&&d.target.dataset.paginationValue!=="... "&&d.target.dataset.paginationValue!=="..."?l(`?page=${t}`):l(`?page=${r}`)},children:t},s))}),e.jsx(v,{type:"button",className:`${n===i.length?"disabled":""}`,onClick:()=>{l(`?page=${parseInt(r)+1}`),a(t=>t>=i.length?t:t+1)},disabled:parseInt(r)>=i.length,children:">"})]})})},ee=()=>{const p=k(),l=w(D),u=w($),x=w(B),[g,i]=y(),n=g.get("page")||1,[a,c]=h.useState(8);h.useEffect(()=>{p(z())},[p]),h.useEffect(()=>{const s=()=>{const f=window.innerWidth>=1200?9:8;f!==a&&c(f)};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s)}},[a,n]);const b=Math.ceil(x/a),r=(n-1)*a,t=Math.min(r+a,x);return e.jsxs("main",{className:"container",children:[u===!0&&e.jsx(F,{}),e.jsx(N,{text:"Favorites"}),l.length===0?e.jsxs(I,{children:[e.jsx(E,{}),e.jsx("p",{children:"You haven't added any favorite cocktails yet"})]}):e.jsxs(e.Fragment,{children:[x!==null&&e.jsx(L,{children:l.slice(r,t).map(s=>e.jsx(H,{name:s.drink,imgUrl:s.drinkThumb,description:s.description,alcoholic:s.alcoholic,id:s._id,handleDelete:j},s._id))}),e.jsx(q,{pageQuan:b})]})]})};export{ee as default};
