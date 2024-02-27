import{u as i,j as a,k as y,c as k,r as g}from"./index-a3f8adbe.js";const C=i.ul`
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
`,z=({children:x})=>a.jsx(C,{children:x}),$=i.li`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 335px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    row-gap: 14px;
    width: 342px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`,N=i.div`
  position: relative;

  /* Градиент для затемнения на фото коктейля */
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    height: 200px;
    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.03) 2.37%,
      rgba(10, 10, 17, 0.96) 95.31%
    );
    z-index: 1;
  }
`,B=i.img`
  border-radius: 8px;
  height: 360px;

  @media screen and (min-width: 1280px) {
    height: 400px;
  }
`,L=i.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;
  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
  }
`,O=i.p`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  text-align: right;
  color: var(--secondary-text-color);

  &:hover {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`,D=i.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 2px);

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }

  /* svg {
    width: 24px;
     height: 24px;
     stroke: #f3f3f3;
   } */
`,P=i.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 24px;
`,u=i.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 25px;
`,j=i.button`
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
`,S=i.div`
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`,E=({pageQuan:x})=>{const d=y(),[m]=k(),[v,f]=g.useState(1),n=[];for(let t=1;t<=x;t++)n.push(t);const[e,s]=g.useState(1),[l,b]=g.useState([]);g.useEffect(()=>{let t=[...l],c="...",r="... ",h=" ...";if(n.length<9)t=n;else if(e>=1&&e<=3)t=[1,2,3,4,5,c,n.length];else if(e===4)t=[...n.slice(0,5),c,n.length];else if(e>4&&e<n.length-2){const p=n.slice(e-2,e),w=n.slice(e,e+1);t=[1,r,...p,...w,h,n.length]}else if(e>n.length-3){const p=n.slice(n.length-5);t=[1,r,...p]}else e===c?s(l[l.length-3]+1):e===h?s(l[3]+2):e===r&&s(l[3]-2);b(t),f(e)},[e]);const o=m.get("page")??"1";return a.jsx(a.Fragment,{children:a.jsxs(S,{children:[a.jsx(u,{type:"button",className:`${e===1?"disabled":""}`,onClick:()=>{parseInt(o)>1&&(d(`?page=${parseInt(o)-1}`),s(t=>t<=1?t:t-1))},disabled:parseInt(o)<=1,children:"<"}),a.jsx(P,{children:l.map((t,c)=>a.jsx(j,{type:"button","data-pagination-value":t,className:`${parseInt(o)===t?"active":""}`,onClick:r=>{s(t),r.target.dataset.paginationValue!==" ..."&&r.target.dataset.paginationValue!=="... "&&r.target.dataset.paginationValue!=="..."?d(`?page=${t}`):d(`?page=${o}`)},children:t},c))}),a.jsx(u,{type:"button",className:`${e===n.length?"disabled":""}`,onClick:()=>{d(`?page=${parseInt(o)+1}`),s(t=>t>=n.length?t:t+1)},disabled:parseInt(o)>=n.length,children:">"})]})})};export{z as D,E as P,N as S,$ as a,B as b,D as c,L as d,O as e};
