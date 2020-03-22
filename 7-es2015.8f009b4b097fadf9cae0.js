(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9Zvb":function(t,n,e){"use strict";e.r(n);var i=e("3Pt+"),o=e("tk/3"),a=e("tyNb"),r=e("fXoL");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-root"]],decls:1,vars:0,template:function(t,n){1&t&&r.Rb(0,"router-outlet")},directives:[a.g],styles:[""]}),t})();var s=e("lJxs"),l=e("6oFh");const g="https://movies-store-54267.firebaseio.com";let p=(()=>{class t{constructor(t,n){this.http=t,this.authService=n,this.indexOfactorToManipulate=1,this.indexOfManipulatorUpdate=new r.o;let e=this.authService.getToken();this.http.get(g+"/movies.json?auth="+e).subscribe(t=>{this.movies=t})}fetchMovies(){let t=this.authService.getToken();return this.http.get(g+"/movies.json?auth="+t).pipe(Object(s.a)(t=>t))}setIndexOfMovieToManipulate(t){this.indexOfactorToManipulate=t,this.indexOfManipulatorUpdate.emit(t)}getIndexOfMovieToManipulate(){return this.indexOfactorToManipulate}findMovieByName(t){for(let n of this.movies)if(t==n.title)return n}getMoviesByCateg(t){if("All"==t)return this.movies;let n=[];for(let e of this.movies)-1!=e.category.indexOf(t)&&n.push(e);return n}getMoviesByName(t){let n=[];for(let e of this.movies)-1!=e.title.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())&&n.push(e);return n}getNumberByCateg(t){if("All"==t)return this.movies.length;let n=0;for(let e of this.movies)t==e.category&&(n+=1);return n}getMovieRatesStars(t){return t.rating}getMovieNonRatesStars(t){return 5-t.rating}}return t.\u0275fac=function(n){return new(n||t)(r.ac(o.a),r.ac(l.a))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac}),t})();var d=e("U5Sr"),m=e("ofXK");const b=function(t){return["../movies",t]};let h=(()=>{class t{constructor(t){this.catalogService=t,this.rateStars=[],this.nonrateStars=[]}ngOnInit(){for(let t=1;t<=this.getMovieRatesStars();t++)this.rateStars.push("star_rate");for(let t=1;t<=5-this.getMovieRatesStars();t++)this.nonrateStars.push("star_rate")}getMovieRatesStars(){return this.catalogService.getMovieRatesStars(this.movie)}getMovieNonRatesStars(){return this.catalogService.getMovieNonRatesStars(this.movie)}}return t.\u0275fac=function(n){return new(n||t)(r.Qb(p))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-item"]],inputs:{movie:"movie"},decls:14,vars:9,consts:[[1,"movie-card"],[1,"media-card","lazy","lazzed","thumbnail",3,"routerLink"],["width","100%","src","assets/background-transparent-portrait.png"],[1,"d-flex","flex-column","justify-content-between","media-overlay"],[1,"media-overlay-header","d-flex","justify-content-between"],[1,"media-overlay-footer"],[1,"categ"]],template:function(t,n){1&t&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Rb(2,"img",2),r.Wb(3,"div",3),r.Wb(4,"div",4),r.Wb(5,"strong"),r.Fc(6),r.Vb(),r.Wb(7,"strong"),r.Fc(8),r.Vb(),r.Vb(),r.Wb(9,"div",5),r.Wb(10,"h5"),r.Fc(11),r.Vb(),r.Wb(12,"h5",6),r.Fc(13),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Cb(1),r.Cc("background-image","url("+n.movie.imagePath+")",r.Jb),r.nc("routerLink",r.rc(7,b,n.movie.title)),r.Cb(5),r.Hc("",n.movie.price,"$"),r.Cb(2),r.Gc(n.movie.releaseDate),r.Cb(3),r.Gc(n.movie.title),r.Cb(2),r.Gc(n.movie.category))},directives:[a.c],styles:[".media-card[_ngcontent-%COMP%]\n{\n\t-o-transition: all 0.2s ease-out;\n\t-ms-transition: all 0.2s ease-out;\n\t-moz-transition: all 0.2s ease-out;\n\t-webkit-transition: all 0.2s ease-out;\n\ttransition: all 0.2s ease-out;\n\tposition:relative;\n\tbackground-image: url(http://www.zupmage.eu/i/sIsbSc7Zcn.jpg);\n\tbackground-size:cover;\n\tbackground-position: center;\n\twidth:170px;\n\tmax-height: 200px;\n\tmin-height: 200px;\n  margin:10px;\n  cursor: pointer;\n  padding: .25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: .25rem;\n  transform: scale(1.02);\n  outline : none;\n}\n.media-card[_ngcontent-%COMP%]:hover   .media-overlay[_ngcontent-%COMP%]  {\n  opacity: 1 !important;\n}\n  .media-card[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]\n{\n\tcolor:white;\n\ttext-shadow: 0px 0px 5px #000 !important;\n}\n.media-card[_ngcontent-%COMP%]:hover\n{\n    -o-transform: scale(1.05);\n\t-ms-transform: scale(1.05);\n    -moz-transform: scale(1.05);\n    -webkit-transform: scale(1.05);\n    transform: scale(1.05);\n    z-index: 10;\n}\n  .media-overlay[_ngcontent-%COMP%]\n{\n  opacity: 0;\n\tposition: absolute;\n\theight:100%;\n\twidth:100%;\n\ttop:0px;\n\tleft:0px;\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#001e5799', endColorstr='#b3000000',GradientType=1 );\n}\n.media-overlay.ramadan[_ngcontent-%COMP%]\n{\n\topacity:1 !important;\n}\n.media-overlay-header[_ngcontent-%COMP%]\n{\n\twidth:100%;\n\tpadding: 5px;\n}\n.media-overlay-footer[_ngcontent-%COMP%]\n{\n\tpadding:5px;\n}\n.media-overlay-footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .media-overlay-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]\n{\n\ttext-align:center;\n}\n.categ[_ngcontent-%COMP%]\n{\n\tdisplay: block;\n\tfont-size:14px;\n\tfont-weight:300;\n\ttext-align:center;\n}\n.media-overlay-body[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]{\n  font-size: 2.6em;\n  color: white !important;\n  text-shadow: 0px 0px 20px white !important;\n}\n\n.media-overlay-body[_ngcontent-%COMP%]   .trailer[_ngcontent-%COMP%]\n{\n\twidth:100%;\n\ttext-align: center;\n\tmargin-top: 60px;\n}\n\n.media-overlay-body[_ngcontent-%COMP%]   .trailer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\n\tcolor:#ff7e00 !important;\n\tfont-size: 1em;\n\tmargin: 0 5px;\n}\n  .movie-title[_ngcontent-%COMP%] {\n    color: #263238;\n    font-size: 14px;\n    font-weight: 600;\n    display: block;\n    margin-top: 10px;\n  }"]}),t})();var v=e("Xa2L");function u(t,n){if(1&t&&(r.Wb(0,"option",14),r.Fc(1),r.Vb()),2&t){const t=n.$implicit;r.oc("value",t),r.Cb(1),r.Gc(t)}}function f(t,n){1&t&&r.Rb(0,"app-movie-item",15),2&t&&r.nc("movie",n.$implicit)}function M(t,n){if(1&t){const t=r.Xb();r.Wb(0,"div",2),r.Wb(1,"div",3),r.Wb(2,"div",4),r.Wb(3,"div",5),r.Rb(4,"span",6),r.Wb(5,"input",7),r.ec("input",(function(n){return r.wc(t),r.ic().onSearchChange(n.target.value)})),r.Vb(),r.Vb(),r.Vb(),r.Wb(6,"div",8),r.Wb(7,"select",9),r.ec("change",(function(n){return r.wc(t),r.ic().getMoviesByCateg(n.target.value)})),r.Wb(8,"option",10),r.Fc(9,"-- Category --"),r.Vb(),r.Dc(10,u,2,2,"option",11),r.Vb(),r.Vb(),r.Vb(),r.Wb(11,"div",12),r.Dc(12,f,1,1,"app-movie-item",13),r.Vb(),r.Vb()}if(2&t){const t=r.ic();r.Cb(10),r.nc("ngForOf",t.categories),r.Cb(2),r.nc("ngForOf",t.movies)}}function C(t,n){1&t&&r.Rb(0,"mat-progress-spinner",16),2&t&&r.nc("diameter",50)}let x=(()=>{class t{constructor(t,n){this.catalogService=t,this.categoriesService=n,this.loading=!0,this.selectedCateg=0}ngOnInit(){this.catalogService.fetchMovies().subscribe(t=>{this.loading=!1,this.movies=t}),this.selectedCateg=0,this.categories=this.categoriesService.getCategories()}getMoviesByCateg(t){this.movies=this.catalogService.getMoviesByCateg(t)}onSearchChange(t){this.movies=this.catalogService.getMoviesByName(t)}}return t.\u0275fac=function(n){return new(n||t)(r.Qb(p),r.Qb(d.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-list"]],decls:2,vars:2,consts:[["class","movies-container",4,"ngIf"],["class","spinner","color","primary","mode","indeterminate","strokeWidth","2","value","50",3,"diameter",4,"ngIf"],[1,"movies-container"],[1,"row","col-lg-12","search-bar"],[1,"col-6","col-md-6","pull-left"],[1,"form-group","has-search"],[1,"fa","fa-search","form-control-feedback"],["type","text","placeholder","Search for a movie ...",1,"form-control",3,"input"],[1,"col-6","col-md-6","pull-right"],["name","categories","id","custom-select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-12","col-md-12","col-sm-12",2,"display","flex !important","flex-wrap","wrap"],[3,"movie",4,"ngFor","ngForOf"],[3,"value"],[3,"movie"],["color","primary","mode","indeterminate","strokeWidth","2","value","50",1,"spinner",3,"diameter"]],template:function(t,n){1&t&&(r.Dc(0,M,13,2,"div",0),r.Dc(1,C,1,1,"mat-progress-spinner",1)),2&t&&(r.nc("ngIf",n.movies),r.Cb(1),r.nc("ngIf",n.loading))},directives:[m.k,i.m,i.q,m.j,h,v.a],styles:[".pull-left[_ngcontent-%COMP%] {\n    padding-left: 26px;\n}\n.pull-right[_ngcontent-%COMP%] {\n    padding-right: 0px;\n    text-align: right;\n}\nselect[_ngcontent-%COMP%]:not([multiple]) {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-position: right 50%;\n    background-repeat: no-repeat;\n    padding: 4px 6px;\n    padding-right: 1.5em;\n    border-radius: 1px !important;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);\n    font-size: 15px;\n    width: 250px;\n}\n#custom-select[_ngcontent-%COMP%] {\n    border-radius: 0 \n}\n.has-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 15px;\n    height: 32px;\n    border-radius: 1px;\n    line-height: 4;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n    padding-left: 2.375rem;\n}\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.1rem rgba(0,123,255,.25) !important;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n    position: absolute;\n    z-index: 2;\n    display: block;\n    line-height: 33px;\n    text-align: center;\n    pointer-events: none;\n    color: #aaa;\n    padding-left: 10px;\n}\n.search-bar[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n.has-search[_ngcontent-%COMP%] {\n    width: 50%;\n}\n.example-header[_ngcontent-%COMP%] {\n    min-height: 64px;\n    padding: 8px 24px 0;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n}\n.mat-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    max-height: 500px;\n}\n.card-container[_ngcontent-%COMP%] {\n    margin: 5px;\n    display: flex !important;\n    flex-wrap: wrap;\n}\n.example-header-image[_ngcontent-%COMP%] {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n}\n.mat-button.mat-icon-button[_ngcontent-%COMP%]{\n    line-height: 0px;\n    min-width: 10px;\n    padding: 0px;\n    width: 30px;\n    height: 30px;\n    border-radius: 0px;\n}\n.mat-card-content[_ngcontent-%COMP%], .mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n}\n.mat-card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n    margin-bottom: 2px;\n}\n.mat-card-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n}\n.list-group-item[_ngcontent-%COMP%]{\n    padding: 7px 15px;\n}\n.mat-card-header[_ngcontent-%COMP%] {\n    background: #1A237E;\n    color: white;\n}\n.list-group-item.active[_ngcontent-%COMP%], .list-group-item.active[_ngcontent-%COMP%]:focus, .list-group-item.active[_ngcontent-%COMP%]:hover {\n    border: none !important;\n    border-left: 5px solid red !important;\n}\n.categ-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n    display: flex !important;\n    padding: 8px 6px 5px 4px !important;\n    line-height: 25px !important;\n}"]}),t})();var O=e("ABwj"),y=e("Wp6s"),P=e("bTqV");function w(t,n){if(1&t&&(r.Wb(0,"i"),r.Fc(1),r.Vb()),2&t){const t=n.$implicit;r.Cb(1),r.Hc(" ",t," - ")}}const A=[{path:"",component:c,children:[{path:"list",component:x},{path:"movies/:id",component:(()=>{class t{constructor(t,n,e){this.route=t,this.catalogService=n,this.cartService=e}ngOnInit(){this.movie=this.catalogService.findMovieByName(this.route.snapshot.params.id)}handleAddToCartClick(){this.cartService.addMovieToCart(this.movie)}}return t.\u0275fac=function(n){return new(n||t)(r.Qb(a.a),r.Qb(p),r.Qb(O.a))},t.\u0275cmp=r.Kb({type:t,selectors:[["app-movie-details"]],decls:29,vars:6,consts:[[1,"panel","panel-default"],[1,"body-container"],[1,"example-card"],[1,"row","col-lg-12"],[1,"col-lg-6","col-md-6","col-sm-6","align-center"],["mat-card-image","","alt","Photo of a Shiba Inu",1,"card-image","img-responsive","img-thumbnail",3,"src"],[1,"col-lg-6","col-md-6","col-sm-6"],[1,"align-center","movie-info"],[1,"movie-title"],[4,"ngFor","ngForOf"],[1,"align-center","card-actions"],["mat-raised-button","","color","primary",3,"click"],[1,"fa","fa-cart-plus"]],template:function(t,n){1&t&&(r.Wb(0,"div",0),r.Wb(1,"div",1),r.Wb(2,"div",2),r.Wb(3,"mat-card-content"),r.Wb(4,"div",3),r.Wb(5,"div",4),r.Rb(6,"img",5),r.Vb(),r.Wb(7,"div",6),r.Wb(8,"div",7),r.Wb(9,"span",8),r.Fc(10),r.Vb(),r.Vb(),r.Wb(11,"p"),r.Wb(12,"b"),r.Fc(13," By : "),r.Vb(),r.Dc(14,w,2,1,"i",9),r.Vb(),r.Wb(15,"p"),r.Wb(16,"b"),r.Fc(17,"Price : "),r.Vb(),r.Fc(18),r.Vb(),r.Wb(19,"p"),r.Wb(20,"b"),r.Fc(21,"Youtube views : "),r.Vb(),r.Fc(22),r.Vb(),r.Wb(23,"p"),r.Fc(24),r.Vb(),r.Wb(25,"div",10),r.Wb(26,"button",11),r.ec("click",(function(t){return n.handleAddToCartClick()})),r.Rb(27,"i",12),r.Fc(28," ADD TO CART"),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb(),r.Vb()),2&t&&(r.Cb(6),r.oc("src",n.movie.imagePath,r.yc),r.Cb(4),r.Gc(n.movie.title),r.Cb(4),r.nc("ngForOf",n.movie.actors),r.Cb(4),r.Hc(" ",n.movie.price," \u20ac"),r.Cb(4),r.Gc(n.movie.youtubeViews),r.Cb(2),r.Hc(" ",n.movie.description," "))},directives:[y.c,y.e,m.j,P.b],styles:[".example-card[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .align-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .movie-info[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .card-image[_ngcontent-%COMP%]{\n    height: 300px !important;\n    width: 250px !important;\n  }\n  .movie-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    font-weight: 600;\n    margin-top: 15px;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }"]}),t})()},{path:"",redirectTo:"list",pathMatch:"full"}]}];let _=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(n){return new(n||t)},imports:[[a.f.forChild(A)],a.f]}),t})();var W=e("PCNd");e.d(n,"CatalogMoviesModule",(function(){return V}));let V=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(n){return new(n||t)},providers:[p],imports:[[o.b,m.c,W.a,i.e,i.n,_],_]}),t})()}}]);