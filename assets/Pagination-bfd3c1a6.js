import{u as c,j as a,k as P,c as j,r as d}from"./index-419dca2d.js";const w=c.ul`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    row-gap: 80px;
    column-gap: 20px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 62px;
    width: auto;
  }
`,N=({children:u})=>a.jsx(w,{children:u}),k=c.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 24px;
`,f=c.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 25px;
`,C=c.button`
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
`,I=c.div`
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`,S=({pageQuan:u})=>{const p=P(),[h]=j(),[$,m]=d.useState(1),n=[];for(let t=1;t<=u;t++)n.push(t);const[e,r]=d.useState(1),[o,b]=d.useState([]);d.useEffect(()=>{let t=[...o],l="...",i="... ",x=" ...";if(n.length<9)t=n;else if(e>=1&&e<=3)t=[1,2,3,4,5,l,n.length];else if(e===4)t=[...n.slice(0,5),l,n.length];else if(e>4&&e<n.length-2){const g=n.slice(e-2,e),y=n.slice(e,e+1);t=[1,i,...g,...y,x,n.length]}else if(e>n.length-3){const g=n.slice(n.length-5);t=[1,i,...g]}else e===l?r(o[o.length-3]+1):e===x?r(o[3]+2):e===i&&r(o[3]-2);b(t),m(e)},[e]);const s=h.get("page")??"1";return a.jsx(a.Fragment,{children:a.jsxs(I,{children:[a.jsx(f,{type:"button",className:`${e===1?"disabled":""}`,onClick:()=>{parseInt(s)>1&&(p(`?page=${parseInt(s)-1}`),r(t=>t<=1?t:t-1))},disabled:parseInt(s)<=1,children:"<"}),a.jsx(k,{children:o.map((t,l)=>a.jsx(C,{type:"button","data-pagination-value":t,className:`${parseInt(s)===t?"active":""}`,onClick:i=>{r(t),i.target.dataset.paginationValue!==" ..."&&i.target.dataset.paginationValue!=="... "&&i.target.dataset.paginationValue!=="..."?p(`?page=${t}`):p(`?page=${s}`)},children:t},l))}),a.jsx(f,{type:"button",className:`${e===n.length?"disabled":""}`,onClick:()=>{p(`?page=${parseInt(s)+1}`),r(t=>t>=n.length?t:t+1)},disabled:parseInt(s)>=n.length,children:">"})]})})};export{N as D,S as P};
