(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,a,t){e.exports=t.p+"static/media/capybara.e9a7e3dd.jpg"},241:function(e,a,t){e.exports=t(406)},406:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(53),c=t.n(r),o=t(419),i=t(45),m=function(){return l.a.createElement(o.a,null,l.a.createElement(i.b,{to:"/"},l.a.createElement(o.a.Item,null,"Home")),l.a.createElement(i.b,{to:"/about"},l.a.createElement(o.a.Item,null,"About")),l.a.createElement(i.b,{to:"/play"},l.a.createElement(o.a.Item,null,"See FlashCards")),l.a.createElement(i.b,{to:"/sdfdf"},l.a.createElement(o.a.Item,null,"Click here if you dare")))},u=function(){return l.a.createElement("div",null,l.a.createElement("h1",null," Home"),l.a.createElement("h3",null,"Put content here"))},s=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement("h3",null,"Put some useful things here"))},d=t(142),p=t(231),E=t(27),b=t(415),f=function(e){var a=Object(n.useState)(""),t=Object(E.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),i=Object(E.a)(o,2),m=i[0],u=i[1],s=Object(n.useState)(""),d=Object(E.a)(s,2),p=d[0],f=d[1],h=Object(n.useState)(""),g=Object(E.a)(h,2),v=g[0],w=g[1];return Object(n.useEffect)(function(){e.id&&(c(e.animalName),u(e.image),f(e.description),w(e.location))},[e.animalName,e.description,e.id,e.image,e.location]),l.a.createElement(b.a,{onSubmit:function(a){a.preventDefault(),e.id?e.edit({id:e.id,animalName:r,image:m,description:p,location:v}):e.add({animalName:r,image:m,description:p,location:v}),c(""),u(""),f(""),w("")}},l.a.createElement(b.a.Group,{widths:"equal"},l.a.createElement(b.a.Input,{fluid:!0,label:"Animal Name",placeholder:"Animal Name",name:"animalName",value:r,onChange:function(e){return c(e.target.value)}}),l.a.createElement(b.a.Input,{fluid:!0,label:"Location",placeholder:"Location",name:"location",value:v,onChange:function(e){return w(e.target.value)}})),l.a.createElement(b.a.Group,{widths:"equal"},l.a.createElement(b.a.Input,{fluid:!0,label:"Description",placeholder:"Description",name:"description",value:p,onChange:function(e){return f(e.target.value)}}),l.a.createElement(b.a.Input,{fluid:!0,label:"Image URL",placeholder:"Image URL",name:"image",value:m,onChange:function(e){return u(e.target.value)}})),l.a.createElement(b.a.Button,null,e.id?" Edit Animal":"Add Animal"))},h=t(418),g=function(e){var a=Object(n.useState)(0),t=Object(E.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(0),i=Object(E.a)(o,2),m=i[0],u=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{onClick:function(){return c(r+1)},color:"green",size:"tiny",content:"Right!",icon:"thumbs up",label:{as:"a",basic:!0,color:"green",pointing:"left",content:r}}),l.a.createElement(h.a,{onClick:function(){return u(m+1)},color:"red",size:"tiny",content:"Wrong!",icon:"thumbs down",label:{as:"a",basic:!0,color:"red",pointing:"left",content:m}}))},v=t(417),w=t(416),j=t(230),C=t(421),O=function(e){var a=Object(n.useState)(!0),t=Object(E.a)(a,2),r=t[0],c=t[1],o=e.image,i=e.description,m=e.animalName,u=e.location,s=e.id,d=e.remove,p=e.edit,b=e.moreInfo;return l.a.createElement(v.a,null,l.a.createElement(w.a,{trigger:l.a.createElement(j.a,{src:o,wrapped:!0,ui:!1})},l.a.createElement(j.a,{size:"huge",src:o})),l.a.createElement("p",{style:{fontSize:"10px"}},"Click photo to enlarge"),l.a.createElement(v.a.Content,null,l.a.createElement("br",null),r&&l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(v.a.Content,null,"Lives in: ",u),l.a.createElement("br",null),l.a.createElement(v.a.Description,null,"Factoid:   ",i),l.a.createElement("br",null),l.a.createElement("br",null)),!r&&l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a.Header,null,m),l.a.createElement("br",null),l.a.createElement("a",{href:b,target:"new"},"Click here to learn more")),l.a.createElement("div",{style:r?{display:"none"}:null},l.a.createElement(v.a.Content,null,l.a.createElement("div",{className:"ui two buttons"},l.a.createElement(h.a,{basic:!0,color:"red",size:"tiny",onClick:function(){return d(s)}},"Delete"),l.a.createElement(w.a,{trigger:l.a.createElement(h.a,{basic:!0,color:"yellow",size:"tiny"},"Edit"),closeIcon:!0},l.a.createElement(C.a,null,"Edit This FlashCard"),l.a.createElement(w.a.Content,null,l.a.createElement(f,Object.assign({},e,{edit:p})))))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g,null)),l.a.createElement(h.a,{onClick:function(){c(!r)},basic:!0,color:"blue"},"Flip")))},k=function(e){var a=e.cards,t=e.remove,n=e.edit;return l.a.createElement(v.a.Group,null,a.map(function(e){return l.a.createElement(O,Object.assign({key:e.id},e,{remove:t,edit:n}))}))},y=t(229),_=t.n(y),I=t(413),S=t(414),A=function(){var e=Object(n.useState)([{id:1,animalName:"Capybara",image:_.a,description:"rodent of unusual size",location:"South America",moreInfo:"http://www.softschools.com/facts/animals/capybara_facts/48/"},{id:2,animalName:"Caiman",image:"https://a-z-animals.com/media/animals/images/original/caiman4.jpg",description:"like an alligator",location:"South America",moreInfo:"http://www.softschools.com/facts/animals/caiman_facts/482/"},{id:3,animalName:"Andean Cock of the Rock",image:"https://upload.wikimedia.org/wikipedia/commons/3/3d/Rupicola_peruviana_%28male%29_-San_Diego_Zoo-8a.jpg",description:"National Bird of Peru",location:"South America",moreInfo:"https://nhpbs.org/wild/andeancockoftheRock.asp"},{id:4,animalName:"Bush Dog",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Speothos_venaticus_Zoo_Praha_2011-5_%28cropped%29.jpg/440px-Speothos_venaticus_Zoo_Praha_2011-5_%28cropped%29.jpg",description:"Has partially webbed feet to help swimming and diving",location:"Central/South America",moreInfo:"http://www.softschools.com/facts/animals/bush_dog_facts/1107/"}]),a=Object(E.a)(e,2),t=a[0],r=a[1];return l.a.createElement(I.a,{style:{padding:"25px"}},l.a.createElement(C.a,{as:"h1"},"Animal Flash Cards"),l.a.createElement(S.a,null),l.a.createElement(k,{cards:t,remove:function(e){var a=t.filter(function(a){if(a.id!==e)return a});r(Object(d.a)(a))},edit:function(e){var a=t.map(function(a){return a.id===e.id?e:a});r(a)}}),l.a.createElement("br",null),l.a.createElement(S.a,null),l.a.createElement(w.a,{trigger:l.a.createElement(h.a,{color:"blue",size:"tiny"},"Add a FlashCard"),closeIcon:!0},l.a.createElement(C.a,null,"Add A FlashCard"),l.a.createElement(w.a.Content,null,l.a.createElement(f,{add:function(e){console.log(e);var a=Object(p.a)({id:Math.floor(1e4*(1+Math.random()))},e);r([].concat(Object(d.a)(t),[a]))}}))))},N=function(){return l.a.createElement(j.a,{src:"https://blog.hubspot.com/hubfs/404-error-page-examples.jpeg"})},F=t(46),x=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(I.a,null,l.a.createElement(F.c,null,l.a.createElement(F.a,{exact:!0,path:"/",component:u}),l.a.createElement(F.a,{exact:!0,path:"/about",component:s}),l.a.createElement(F.a,{exact:!0,path:"/play",component:A}),l.a.createElement(F.a,{component:N}))))};t(405);c.a.render(l.a.createElement(i.a,null,l.a.createElement(x,null)),document.getElementById("root"))}},[[241,1,2]]]);
//# sourceMappingURL=main.d741e83c.chunk.js.map