import{u as d,w as y,c as j,r as p,j as r}from"./index-ac8f8fa7.js";const C=d.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 24px;
`,x=d.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 25px;
`,k=d.button`
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
`,I=d.div`
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`,B=({pageQuan:f})=>{const c=y(),[h]=j(),[$,m]=p.useState(1),n=[];for(let t=1;t<=f;t++)n.push(t);const[e,o]=p.useState(1),[i,b]=p.useState([]);p.useEffect(()=>{let t=[...i],l="...",s="... ",u=" ...";if(n.length<9)t=n;else if(e>=1&&e<=3)t=[1,2,3,4,5,l,n.length];else if(e===4)t=[...n.slice(0,5),l,n.length];else if(e>4&&e<n.length-2){const g=n.slice(e-2,e),P=n.slice(e,e+1);t=[1,s,...g,...P,u,n.length]}else if(e>n.length-3){const g=n.slice(n.length-5);t=[1,s,...g]}else e===l?o(i[i.length-3]+1):e===u?o(i[3]+2):e===s&&o(i[3]-2);b(t),m(e)},[e]);const a=h.get("page")??"1";return r.jsx(r.Fragment,{children:r.jsxs(I,{children:[r.jsx(x,{type:"button",className:`${e===1?"disabled":""}`,onClick:()=>{parseInt(a)>1&&(c(`?page=${parseInt(a)-1}`),o(t=>t<=1?t:t-1))},disabled:parseInt(a)<=1,children:"<"}),r.jsx(C,{children:i.map((t,l)=>r.jsx(k,{type:"button","data-pagination-value":t,className:`${parseInt(a)===t?"active":""}`,onClick:s=>{o(t),s.target.dataset.paginationValue!==" ..."&&s.target.dataset.paginationValue!=="... "&&s.target.dataset.paginationValue!=="..."?c(`?page=${t}`):c(`?page=${a}`)},children:t},l))}),r.jsx(x,{type:"button",className:`${e===n.length?"disabled":""}`,onClick:()=>{c(`?page=${parseInt(a)+1}`),o(t=>t>=n.length?t:t+1)},disabled:parseInt(a)>=n.length,children:">"})]})})};export{B as P};
