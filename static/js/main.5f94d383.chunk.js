(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"SpiderMan",image:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png"},{id:2,name:"Flash",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAXWOteCIkGUeW0EtFbmoMMNaILDl0FNNShJAwSXaispKui7Y7w"},{id:3,name:"Thor",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaexxUCHgmdFYATqimHSukYvPVqxVof5L_mWl-Xc7kl5b-Yj0amQ"},{id:4,name:"Hawkeye",image:"https://vignette.wikia.nocookie.net/marveldatabase/images/e/e6/Clinton_Barton_%28Earth-30847%29_from_Marvel_vs_Capcom_Infinite_0001.png/revision/latest/scale-to-width-down/700?cb=20170922194511"},{id:5,name:"Hulk",image:"https://fermi.gsfc.nasa.gov/science/constellations/pages/inc/img/hulk/Hulk_Artwork.jpg"},{id:6,name:"antman",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4eldlFBqq9n-4ptlfW_gT0vmCcTK8IO-SpHKqi3hE8ANy1_B-g"},{id:7,name:"Silver Surfer",image:"https://www.writeups.org/wp-content/uploads/Silver-Surfer-Marvel-Comics-Norrin-Radd-g.jpg"},{id:8,name:"Thanos",image:"https://i.pinimg.com/474x/24/69/f5/2469f5e21d27f5d93c71871b326d7e88.jpg"},{id:9,name:"Rocket",image:"https://vignette.wikia.nocookie.net/disney/images/8/83/GOTG2_-_Rocket_Racoon.png/revision/latest?cb=20170409114457"},{id:10,name:"groot",image:"https://ae01.alicdn.com/kf/HTB1K98obxrvK1RjSszeq6yObFXaL/new-2018-diy-Diamond-painting-100-full-cartoon-Groot-Embroidery-5D-Cross-Stitch-Mosaic-Rhinestone-Home.jpg_640x640.jpg"},{id:11,name:"iron man",image:"https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"},{id:12,name:"Captain Marvel",image:"https://i.pinimg.com/474x/4c/92/71/4c9271f6e5ebb57cfe665437a01a3c87.jpg"},{id:13,name:"Captain America",image:"https://i.pinimg.com/originals/2a/55/e7/2a55e73c9419ceb8ccf9aa9dc98c4e74.png"},{id:14,name:"Black Widow",image:"https://progameguides.com/wp-content/uploads/2019/04/fortnite-black-widow-outfit-featured.png"},{id:15,name:"Star Lord",image:"https://progameguides.com/wp-content/uploads/2019/04/fortnite-outfit-star-lord-outfit.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),o=(a(15),a(2)),l=a(3),s=a(5),m=a(4),u=a(6),d=a(1);a(16);var g=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:"navStyle"},i.a.createElement("li",null,i.a.createElement("span",{className:"logo"},"Get Clicky!")),i.a.createElement("li",null,"Current Score : ",i.a.createElement("span",{className:"nums"},e.currentScore)),i.a.createElement("li",null,"High Score : ",i.a.createElement("span",{className:"nums"},e.highScore))))};a(17);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},h=(a(18),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"footStyle"},i.a.createElement("ul",null,i.a.createElement("li",null,"Hero Clicky by Blake M Dito"),i.a.createElement("li",null,"check out my linked in Page!"),i.a.createElement("li",null,"check out my github!"))))}}]),t}(n.Component));a(19),a(20);var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"card",onClick:function(){return e.clickedHero(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.id,src:e.image}))))};function k(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return console.log("array shuffled"),e}var S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={characters:d,notClicked:d,currentScore:0,highScore:0},a.clickedHero=function(e){if(void 0===a.state.notClicked.find(function(t){return t.id===e}))console.log("failed!"),a.setState({currentScore:0,notClicked:d}),a.state.currentScore>a.state.highScore&&(a.setState({highScore:a.state.currentScore}),console.log("highschore",a.state.highScore));else{console.log("success");var t=a.state.notClicked.filter(function(t){return t.id!==e});a.setState({notClicked:t,currentScore:a.state.currentScore+1,characters:k(d)}),console.log("current score",a.state.currentScore),console.log(a.state.notClicked)}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{currentScore:this.state.currentScore,highScore:this.state.highScore}),i.a.createElement(p,null,this.state.characters.map(function(t){return i.a.createElement(f,{key:t.id,id:t.id,image:t.image,clickedHero:e.clickedHero})})),i.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.5f94d383.chunk.js.map