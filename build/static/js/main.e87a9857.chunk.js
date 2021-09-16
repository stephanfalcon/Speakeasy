(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(52)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=a(3),o=a(4),i=a(6),d=a(5);function m(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}a(25);var u=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.searchMount()}},{key:"render",value:function(){return r.a.createElement("div",{className:"backgroundRow"},r.a.createElement("div",{className:"container my-4"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("form",null,r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button",placeholder:"Search",onChange:this.props.handleInputChange,value:this.props.search}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("select",{className:"custom-select",onChange:this.props.handleSelectChange},r.a.createElement("option",{value:"searchByName"},"Search Drink by Name"),r.a.createElement("option",{value:"searchByIngredient"},"Search by Ingredient"),r.a.createElement("option",{value:"random"},"Random"),r.a.createElement("option",{value:"favorites"},"Favorites")))),r.a.createElement("button",{type:"submit",className:"btn btn-md btn-block srchBtn",onClick:this.props.handleFormSubmit},"Search"))))))}}]),a}(n.Component),h=(a(26),a(1)),p=a.n(h),g=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addFav=function(e){p.a.post("/favorite",{drink:e})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props.searchedInfo;return r.a.createElement("div",{className:"modal-dialog modal-xl "},r.a.createElement("div",{className:"modal-content p-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center"},this.props.searchedInfo.title))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 d-flex justify-content-center"},r.a.createElement("img",{src:this.props.searchedInfo.img,alt:this.props.searchedInfo.title})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",{className:"text-center"},r.a.createElement("u",null,"Ingredients")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("div",{id:"ingredientsList"},t&&t.ingredientsArr.map(function(e,t){return""===e?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"text-center",key:t}," ",e)}))))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",null,r.a.createElement("u",null,"Measurements")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("div",{id:"measureList"},t&&t.measureArr.map(function(e,t){return" "===e?r.a.createElement(r.a.Fragment,null):"\u21b5"===e?r.a.createElement(r.a.Fragment,null):""===e?r.a.createElement(r.a.Fragment,null):r.a.createElement("div",{className:"text-center",key:t},e)}))))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("h4",null,r.a.createElement("u",null,"Instuctions")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("p",{className:"text-center"},this.props.searchedInfo.instructions))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-11"}),r.a.createElement("div",{className:"col-md-1"},r.a.createElement("button",{style:{margin:"10px",borderRadius:"50px"},className:"btn btn-dark",onClick:function(){return e.addFav(e.props.searchedInfo)}},r.a.createElement("i",{class:"fas fa-heart"})))))))))}}]),a}(n.Component),f=(a(44),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).addFav=function(e){p.a.post("/favorite",{drink:e})},e}return Object(o.a)(a,[{key:"render",value:function(){var e={backgroundImage:"linear-gradient(transparent,transparent,red),url(".concat(this.props.drink.img,")"),backgroundPosition:"center",backgroundColor:"red"};return r.a.createElement("div",{className:"col-lg-3 col-md-5 col-sm-12 py-4 m-4 drinkDiv bg drink-hover",id:this.props.drink.id,key:this.props.drink.id},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("img",{className:"img drink-hover",style:e,src:this.props.drink.img,"data-title":this.props.drink.title,alt:" ",onClick:this.props.handleData,"data-toggle":"modal","data-target":".modal-".concat(this.props.drink.id)}),r.a.createElement("div",{className:"modal fade modal-".concat(this.props.drink.id),tabIndex:"-1",role:"dialog","aria-labelledby":"myExtraLargeModalLabel","aria-hidden":"true"},r.a.createElement(g,{searchedInfo:this.props.searchedInfo,key:this.props.searchedInfo.id}))),r.a.createElement("h4",{className:"text-center"},this.props.drink.title))}}]),a}(n.Component)),v=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getFavs",value:function(){p.a.get("/favorite").then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;switch(console.log(this.props.drinks),this.props.searchBy){case"searchByName":case"searchByIngredient":return r.a.createElement("div",{className:"row d-flex justify-content-center",id:"results"},this.props.drinks.map(function(t,a){return r.a.createElement(f,{handleData:e.props.handleData,searchedInfo:e.props.searchedInfo,drink:t,key:a})}));case"searchIngredientByName":return r.a.createElement("div",{className:"row"},this.props.drinks.map(function(e,t){return r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 p-3",id:e.id,key:t},r.a.createElement("h4",{className:"text-center"},e.title),r.a.createElement("p",null,e.description))}));case"random":case"favorites":return r.a.createElement("div",{className:"row d-flex justify-content-center",id:"results"},this.props.drinks.map(function(t,a){return r.a.createElement(f,{handleData:e.props.handleData,searchedInfo:e.props.searchedInfo,drink:t,key:a})}));default:return r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",null,"Search for some Great Drinks!"))}}}]),a}(n.Component),E={searchByName:function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s="+e)},modalSearchByName:function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?s="+e)},searchIngredientByName:function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/search.php?i="+e)},searchByIngredient:function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/filter.php?i="+e)},random:function(){return p.a.get("https://www.thecocktaildb.com/api/json/v2/8673533/random.php")},favorites:function(e){return p.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+e)}},k=a(9),b=(a(45),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).logOut=function(e){e.preventDefault(),p.a.get("/logout").then(function(e,t){window.location.reload()}).catch(function(e){console.log(e)})},n.componentDidMount=function(e){n.checkState()},n.checkState=function(e){p.a.get("/logged").then(function(e,t){""!==e.data?(console.log("State should change"),console.log(e.data),n.setState({logged:"hidden",logOut:""})):console.log("not logged")}).catch(function(e){console.log(e)})},n.state={logged:"",logOut:"hidden"},n.checkState=n.checkState.bind(Object(k.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav-container"},r.a.createElement("h1",{className:"title"},"SpeakEasy1"),r.a.createElement("ul",{className:"nav-button"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{type:"button",hidden:this.state.logged,className:"btn text-body mr-3","data-toggle":"modal","data-target":"#loginModal"},"Log In"),r.a.createElement("button",{type:"button",onClick:this.logOut,hidden:this.state.logOut,id:"logout",className:"btn text-body mr-3"},"log out"),r.a.createElement("button",{type:"button",hidden:this.state.logged,className:"btn text-body mr-3","data-toggle":"modal","data-target":"#createModal"},"Create Login"),r.a.createElement("div",{className:"modal fade",id:"createModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Create Login"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{action:"/create",method:"POST"},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Create Login"})))),r.a.createElement("div",{className:"modal-footer"})))),r.a.createElement("div",{className:"modal fade",id:"loginModal",tabindex:"-1",role:"dialog","aria-labelledby":"loginModal","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Login"),r.a.createElement("button",{type:"button","data-dismiss":"modal",className:"close","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("form",{action:"/login",method:"post"},r.a.createElement("div",null,r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password"})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",value:"Log In"})))),r.a.createElement("div",{className:"modal-footer"})))))))}}]),a}(r.a.Component));a(46);var y=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid p-5"},r.a.createElement("h1",{className:"display-1"},r.a.createElement("b",null,"SpeakEasy")),r.a.createElement("p",{className:"lead"},"A cocktail app to look up and try new drinks! You can search by name or ingredient! click on the drink to get all the ingredients, measurements, and instructions"))};a(47);var N=function(e){return r.a.createElement("div",{className:"footer p-3"},r.a.createElement("h2",{className:"text-center display-4 mb-3"},"Developer"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h5",{className:"text-center"},"Stephan Falcon"),r.a.createElement("p",{className:"text-center"},"stephanmfalcon@gmail.com"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 d-flex justify-content-center"},r.a.createElement("a",{href:"https://github.com/stephanfalcon",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fab fa-github-square"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/stephan-falcon-23033514a/",target:"_blank",rel:"noopener noreferrer",className:"mx-3 fab fa-linkedin-square"}))))))},w=a(8),I=function(){return Object(n.useEffect)(function(){w.a.initialize("UA-205859239-1"),w.a.pageview("/")},[]),r.a.createElement(r.a.Fragment,null)};a(50),a(51);w.a.initialize("UA-205859239-1"),w.a.pageview("/");var j=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",searchBy:"",drinkArray:[],searchedDrink:"",searchedInfo:"",error:""},e.returnFavOb=function(e,t){var a=[];e.map(function(e,n){E.favorites(e).then(function(e){if("error"===e.data.drinks)throw new Error(e.data.drinks);a.push(e.data.drinks[0])}).then(function(){t(a)})})},e.handleData=function(t){e.setState({searchedDrink:t.target.dataset.title}),console.log(e.state.searchedDrink,t.target.dataset.title),t.preventDefault(),E.modalSearchByName(t.target.dataset.title).then(function(t){if("error"===t.data.drinks)throw new Error(t.data.drinks);var a=t.data.drinks[0],n={id:a.idDrink,title:a.strDrink,img:a.strDrinkThumb,instructions:a.strInstructions,ingredientsArr:[a.strIngredient1,a.strIngredient2,a.strIngredient3,a.strIngredient4,a.strIngredient5,a.strIngredient6,a.strIngredient7,a.strIngredient8,a.strIngredient9,a.strIngredient10],measureArr:[a.strMeasure1,a.strMeasure2,a.strMeasure3,a.strMeasure4,a.strMeasure5,a.strMeasure6,a.strMeasure7,a.strMeasure8,a.strMeasure9,a.strIngredient10]};console.log(a,n),e.setState({searchedInfo:n,error:""})}).catch(function(t){return e.setState({error:t.items})})},e.isLoggedIn=function(){p.a.get("/isLogged").then(function(e,t){console.log("============="),null!==e.user?(this.setState({isLoggedIn:!0}),console.log(this.state.isLoggedIn)):this.setState({isLoggedIn:!1}),console.log(this.state.isLoggedIn)}).catch(function(e){console.log(e)})},e.handleInputChange=function(t){e.setState({search:t.target.value})},e.handleSelectChange=function(t){e.setState({searchBy:t.target.value,drinkArray:[]})},e.searchMount=function(){e.setState({searchBy:"searchByName",drinkArray:[]})},e.handleFormSubmit=function(t){var a;t.preventDefault(),function(){switch(e.state.searchBy){case"searchByName":t.preventDefault(),E.searchByName(e.state.search).then(function(t){if(console.log(t),"error"===t.data.drinks)throw new Error(t.data.drinks);var a=t.data.drinks;a=a.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),e.setState({drinkArray:a,error:""})}).catch(function(t){return e.setState({error:t.items})}),console.log(e.state.drinkArray);break;case"searchIngredientByName":t.preventDefault(),E.searchIngredientByName(e.state.search).then(function(t){if(console.log(t),"error"===t.data.ingredients)throw new Error(t.data.ingredients);var a=t.data.ingredients;a=a.map(function(e){return e={key:e.idIngredient,id:e.idIngredient,title:e.strIngredient,description:e.strDescription}}),e.setState({drinkArray:a,error:""})}).catch(function(t){return e.setState({error:t.items})}),console.log(e.state.drinkArray);break;case"searchByIngredient":t.preventDefault(),E.searchByIngredient(e.state.search).then(function(t){if(console.log(t),"error"===t.data.drinks)throw new Error(t.data.drinks);var a=t.data.drinks;a=a.map(function(e){return e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}}),e.setState({drinkArray:a,error:""})}).catch(function(t){return e.setState({error:t.items})}),console.log(e.state.drinkArray);break;case"random":t.preventDefault();var n=[];for(a=0;a<15;a++)E.random().then(function(t){if(console.log(t),"error"===t.data.drinks)throw new Error(t.data.drinks);var a=t.data.drinks;a=a.map(function(e){e={id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb},n.push(e)}),console.log("poop"),console.log(n),e.setState({drinkArray:n,error:""})});break;case"favorites":t.preventDefault(),e.getFavs()}}()},e}return Object(o.a)(a,[{key:"getFavs",value:function(){var e=this;p.a.get("/favorite").then(function(t){e.returnFavOb(t.data,function(t){var a=t.map(function(e){return{id:e.idDrink,title:e.strDrink,img:e.strDrinkThumb}});console.log(a),e.setState({drinkArray:a,error:""}),console.log(e.state.drinkArray)})}),console.log(this.state.drinkArray)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"main-container"},r.a.createElement(I,null),r.a.createElement(b,null),r.a.createElement(m,null,r.a.createElement(y,null)),r.a.createElement(m,null,r.a.createElement(u,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange,handleSelectChange:this.handleSelectChange,searchMount:this.searchMount})),r.a.createElement(m,null,r.a.createElement(v,{drinks:this.state.drinkArray,searchBy:this.state.searchBy,handleData:this.handleData,searchedInfo:this.state.searchedInfo,user:this.state.user}))),r.a.createElement(N,null))}}]),a}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.e87a9857.chunk.js.map