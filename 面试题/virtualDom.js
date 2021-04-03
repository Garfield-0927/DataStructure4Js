/**
 * requirement: 
 * render virtual dom to real dom
 * let domNode = {
		  tagName: 'ul',
		  props: { class: 'list' },
		  children: [{
		    tagName: 'li',
		    children: ['toutiao']
		  }, {
		    tagName: 'li',
		    children: ['douyin']
		  }]
		};
		// 构建一个 render 函数，将 domNode 对象渲染为 以下 dom
		<ul class="list">
		    <li>toutiao</li>
		    <li>douyin</li>
		</ul>
function render(){ // 补全代码 }
 * 
 */



function render(parentNode, childNode){
	if(childNode == null){
		return;
	}
	let ele = document.createElement(childNode.tagName);
	childNode.props!=null && Object.keys(childNode.props).forEach(key=>{
		ele.setAttribute(key, childNode.props[key]);
	});
	if (typeof(childNode.children[0])==='string'){
		ele.innerHTML = childNode.children[0];
	} else {
		for (const item of childNode.children) {
			render(ele, item)
		}
	}
	parentNode.appendChild(ele);
}


let domNode = {
	tagName: 'ul',
	props: { class: 'list', id: 'list' },
	children: [{
		tagName: 'li',
		children: ['toutiao']
	}, {
		tagName: 'li',
		children: ['douyin']
	}]
};

render(document.body, domNode);