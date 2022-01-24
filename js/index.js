(function() {
	var fn = {
		//轮播图
		"slider": function() {
			var timer = null;
			var num = 0;
			var setIntSlider = null;
			var allLi = document.getElementsByClassName("sliderButton")[0].children;
			var allCont = document.getElementsByClassName("sliderPic")[0].children;
			allCont[0].style.opacity = 1;
			var colorArr = ['#f15c5a', '#f5a52c', '#f9a916', '#f64b3a', '#283042', '#0096ee', '#2b409b'];
			var bg = document.getElementsByClassName("sliderPosition")[0];
			for (var i = 0; i < allLi.length; i++) {
				allLi[i].index = i;

				allLi[i].onmouseover = function() {
					clearInterval(timer);
					timer = setTimeout(function() {
						move(this);
						auto();

					}.bind(this), 300);
				}

			}

			function move(_this) {
				num = _this.index;
				for (var i = 0; i < allLi.length; i++) {
					allCont[i].className = '';
					allCont[i].style.opacity = 0;
					if (allLi[i].className.indexOf('first') != -1) {
						allLi[i].className = 'first';
					} else {
						allLi[i].className = '';
					}
				}
				allCont[_this.index].className = 'active';
				_this.className += ' active';
				setTimeout(function() {
					allCont[this.index].style.opacity = 1;
					bg.style.backgroundColor = colorArr[this.index];
				}.bind(_this), 0);
			}

			auto();

			function auto() {
				clearInterval(setIntSlider);
				setIntSlider = setInterval(function() {
					num++;
					if (num == allLi.length) num = 0;
					for (var i = 0; i < allLi.length; i++) {
						allCont[i].className = '';
						allCont[i].style.opacity = 0;
						if (allLi[i].className.indexOf('first') != -1) {
							allLi[i].className = 'first';
						} else {
							allLi[i].className = '';
						}
					}
					allCont[num].className = 'active';
					allLi[num].className += ' active';
					setTimeout(function() {
						allCont[num].style.opacity = 1;
						bg.style.backgroundColor = colorArr[num];
					}, 0);
				}, 4000);
			}

		},
		
		//公开课
		"openClass": function(){
			var leftBtn = document.getElementsByClassName("previous")[0];
			var rightBtn = document.getElementsByClassName("next")[0];
			var sliderCont = document.getElementsByClassName("openSliderContent")[0];
			rightBtn.style.display = "none";
			
			leftBtn.onclick = function(){
				leftBtn.style.display = "none";
				sliderCont.style.left = "-366px";
				rightBtn.style.display = "block";
			}
			rightBtn.onclick = function(){
				rightBtn.style.display = "none";
				sliderCont.style.left = "10px";
				leftBtn.style.display = "block";
			}
		},
		
		//搜索框
		"search": function(){
			var context = {
				'k':['摄影','产品可视化','AI必学-Tensorflow','产品经理','AE'],
				'w':['城市','滨州医学院','51','edufancy','北京理工大学']
			};
			var leftBtn = document.getElementsByClassName("searchNodeLeft")[0];
			var leftUl = document.getElementsByClassName("searchNodeLeftUl")[0];
			var leftUlList = leftUl.children;
			var searchOl = document.getElementsByClassName("searchNodeOl")[0];
			var input = document.getElementsByClassName("searchNodeInput")[0];
			var searchText = document.getElementsByClassName("searchNodeLeftText")[0];
			var searchOlList = searchOl.children;
			
			window.onclick = function(){
				searchOl.style.display = "none";
			}
			
			ToOlContent('k');
			function ToOlContent(text){
				searchOlList.innerHTML = "<li class='first'>热门搜索</li>"
				searchOlList[0].onclick = function(){
					event.cancelBubble = true;
				};
				for(var i = 0;i < context[text].length;i++){
					var oLi = document.createElement('li');
					oLi.innerHTML = '<a href="#">'+context[text][i]+'</a>';
					searchOl.appendChild(oLi);
				}
				for(var i = 1;i < searchOlList.length;i++){
					searchOlList[i].onclick = function(){
						event.cancelBubble = true;
						searchOl.style.display = 'none';
					}
				}
			}
			
			for(var i = 0;i < leftUlList.length;i++){
				leftUlList[i].onclick = function(){
					event.cancelBubble = true;
					for(var i =0;i < leftUlList.length;i++){
						leftUlList[i].className = '';
					};
					searchText.innerHTML = this.innerHTML;
					this.className = 'active';
					leftUl.style.display = 'none';
					OlShow();
			
					if(this.innerHTML=='网校'){
						input.placeholder = '搜索网校';
						ToOlContent('w');
					}
					else{
						input.placeholder = '零基础学JavaScript';
						ToOlContent('k');
					}
				};
			};
			
			function OlShow(){
				searchOl.style.opacity = '0';
				searchOl.style.display = 'block';
				setTimeout(function(){
					searchOl.style.opacity = '1';
				},0);
			}
			
			leftBtn.onmouseover = function(){
				//console.log(event.target.nodeName);
				if(event.target.nodeName == 'DIV' || event.target.nodeName == 'SPAN'){
					leftBtn.className = 'searchNodeLeft active';
				}
				else{
					leftBtn.className = 'searchNodeLeft';
				}
			};
			leftBtn.onmouseout = function(){
				leftBtn.className = 'searchNodeLeft';
			}
			input.onclick = function(){
				event.cancelBubble = true;
				OlShow();
			}
			leftBtn.onmouseenter = function(){
				leftUl.style.display = 'block';
				searchOl.style.display = 'none';
			};
			
			leftBtn.onmouseleave = function(){
				leftUl.style.display = 'none';
			};
		},
		
		//用户头像
		"userTouch": function(){
			var img = document.getElementsByClassName("userImg")[0];
			var ul = document.getElementsByClassName("userUl")[0];
			var timer = null;
			
			img.onmouseenter = function(){
				clearTimeout(timer);
				if(ul.style.display == 'block')return;
				ul.style.transform = "scale(0.9)"
				ul.style.display = "block";
				timer = setTimeout(function(){
					ul.style.transform = "scale(1)";
				},0)
			}
			
			img.onmouseleave = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					ul.style.display = "none";
				},300)
			}
			
			ul.onmouseover = function(){
				clearTimeout(timer);
			}
			
			ul.onmouseout = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					ul.style.display = "none";
				},300)
			}
			
		},
		
		//我的学习
		"myClass": function(){
			var myClass = document.getElementsByClassName("myClass")[0];
			var myCont = document.getElementsByClassName("myClassCont")[0];
			var timer = null;
			
			myClass.onmouseover = function(){
				clearTimeout(timer);
				if(myCont.style.display == 'block')return;
				myCont.style.transform = "scale(0.9)";
				timer = setTimeout(function(){
					myCont.style.transform = "scale(1)";
				},0)
				myCont.style.display = "block";
			}
			myClass.onmouseout = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					myCont.style.display = "none";
				},300)
			}
			myCont.onmouseover = function(){
				clearTimeout(timer);
			}
			myCont.onmouseout = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					myCont.style.display = "none";
				},300)
			}
		},
		
		//下载APP
		"download": function(){
			var downBtn = document.getElementsByClassName("downloadApp")[0];
			var downShow = document.getElementsByClassName("downloadAppShow")[0];
			var timer = null;
			
			
			downBtn.onmouseover = function(){
				clearTimeout(timer);
				if(downShow.style.display == 'block')return;
				downShow.style.transform = "scale(0.9)";
				timer = setTimeout(function(){
					downShow.style.transform = "scale(1)";
				},0)
				downShow.style.display = "block";
			}
			downBtn.onmouseout = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					downShow.style.display = "none";
				},0)
			}
			downShow.onmouseover = function(){
				clearTimeout(timer);
			}
			downShow.onmouseout = function(){
				clearTimeout(timer);
				timer = setTimeout(function(){
					downShow.style.display = "none";
				},0)
			}
		},
		
		//滚动
		"scroll": function(){
			var topNode = document.getElementsByClassName("topNode")[0];
			var windowR = document.getElementsByClassName("windowRight")[0];
			var backTop = document.getElementsByClassName("windowBottom3")[0];
			var timer = null;
			
			window.onscroll = function(){
				if(document.documentElement.scrollTop >= 550){
					topNode.style.position = 'fixed';
				}
				else{
					topNode.style.position = '';
				}
			
				if(document.documentElement.scrollTop == 0){
					windowR.style.display = 'none';
				}
				else{
					windowR.style.display = 'block';
				}
			}
			backTop.onclick = function(){
				clearInterval(timer);
				timer = setInterval(function(){
					if(document.documentElement.scrollTop<=0){
						clearInterval(timer);
						return;
					}
					document.documentElement.scrollTop = document.documentElement.scrollTop - 100 <0 ? 0 : document.documentElement.scrollTop - 100;
				},0);
			}
		},
		
		//秒杀
		"seckill": function(){
			var tabBtn = document.getElementsByClassName("topTab")[0].children;
			var cont = document.getElementsByClassName("tabContent")[0].children;
			
			for(var i=0;i<tabBtn.length;i++){
				tabBtn[i].index = i;
				tabBtn[i].onmouseover = function(){
					for(var j=0;j<tabBtn.length;j++){
						tabBtn[j].className = '';
						cont[j].className = 'tabContentUl';
					}
					this.className = 'active';
					
					cont[this.index].className += ' show';
				}
			}
		},
		
		//更改兴趣
		"change": function(){
			var altBtn = document.getElementsByClassName("change")[0];
			var msk = document.getElementsByClassName("mask")[0];
			var alt = document.getElementsByClassName("habitAlt")[0];
			var bgcls = document.getElementsByClassName("bgclose")[0];
			var optLi = document.getElementsByClassName("optionsAlt")[0].children;
			var contLi = document.getElementsByClassName("optionsContent");
			var allLi = document.getElementsByClassName("optionsCont")[0].getElementsByTagName("li");
			var ol = document.getElementsByClassName("chosen")[0];
			var cNum = document.getElementById("cNum");
			var ok = document.getElementsByClassName("chosenOk")[0];
			msk.style.transition = '.5s';
			alt.style.transition = '.5s';
			msk.style.opacity = 0;
			alt.style.opacity = 0;
			
			altBtn.onclick = function(){
				msk.style.display = 'block';
				alt.style.display = 'block';
				setTimeout(function(){
					msk.style.opacity = 1;
					alt.style.opacity = 1;
				},0);
				setTimeout(function(){
					msk.style.transition = '0s';
					alt.style.transition = '0s';
				},500);
			};
			for(var i=0;i<optLi.length;i++){
				optLi[i].index = i;
				optLi[i].onclick = function(){
					for(var j=0;j<optLi.length;j++){
						optLi[j].className = '';
						contLi[j].className = 'optionsContent';
					}
					this.className = 'active';
					contLi[this.index].className += " show";
				}
			};
			ol.onclick = function(){
				if(event.target.nodeName == 'IMG'){
					for(var i=0;i<allLi.length;i++){
						if(allLi[i].innerText == event.target.parentNode.title){
							allLi[i].className = '';
							break;
						}
					}
					ol.removeChild(event.target.parentNode);
					cNum.innerText = ol.children.length-1;
					alt.style.marginTop = -alt.offsetHeight/2 + 'px';
				}
			};
			
			for(var i=0;i<allLi.length;i++){
				allLi[i].onclick = function(){
					if(this.className == 'active'){
						this.className = '';
						for(var j=0;j<ol.children.length;j++){
							if(this.innerText == ol.children[j].title){
								ol.removeChild(ol.children[j]);
								break;
							}
						};
					}// bug
					else{
						this.className = 'active';
						var oli = document.createElement("li");
						oli.title = this.innerText;
						oli.innerHTML = this.innerText + '<img src="image/close.gif">';
						ol.appendChild(oli);
					}
					cNum.innerText = ol.children.length-1;
				}
				allLi[i].onmousedown = function(){
					return false;
				}
			};
			
			ok.onclick = bgcls.onclick = function(){
				msk.style.transition = '0.5s';
				alt.style.transition='0.5s';
				setTimeout(function(){
					msk.style.opacity = '0';
					alt.style.opacity = '0';
				},0);
				setTimeout(function(){
					msk.style.display='none';
					alt.style.display='none';
				},700);
			}
		}
		
	};
	fn.myClass();
	fn.slider();
	fn.openClass();
	fn.search();
	fn.userTouch();
	fn.download();
	fn.scroll();
	fn.seckill();
	fn.change();
})()
