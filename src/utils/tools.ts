// // 
// interface Storage {
//     [proppName:string]:any;
// }
// interface SessionStorage {
//     [proppName:string]:any;
// }
// // 储存storage
// export function setStorage(path:string, key:string, val:string){
// 	let content:interface = window.localStorage[path],
// 	if(content){
// 		Storage = JSON.parse(content);
// 		Storage[key] = val;
// 	}else{
// 		Storage[key] = val;
// 	}
// 	window.localStorage[path] = JSON.stringify(Storage);
// }
// // 获取storage
// export function getStorage(path:string, key:string){
// 	let content = window.localStorage[path];
// 	if(!content){
// 		return false
// 	}
// 	let obj = JSON.parse(content);
// 	return obj[key]
// }
// // 储存sessionStorage
// export function setSessionStorage(path:string, key:string, val:string){
//     let content = window.sessionStorage[path],
     
//     enum obj {}
// 	if(content){
// 		obj = JSON.parse(content);
// 		obj[key] = val;
// 	}else{
// 		obj[key] = val;
// 	}
// 	window.sessionStorage[path] = JSON.stringify(obj);
// }
// // 获取sessionStorage
// export function getSessionStorage(path:string, key:string){
// 	let content = window.sessionStorage[path];
// 	if(!content){
// 		return false
// 	}
// 	let obj = JSON.parse(content);
// 	return obj[key]
// }
// // 正则截取参数
// export function queryString( url:string, key:string ){

// 	let qr = url.split('?');

// 	if(qr.length === 1){
// 		return false
// 	}

// 	let json = {},
// 	queryArr = qr[1].split('&');
// 	for(let arg of queryArr){
// 		let old = arg.split('=');
// 		let key = old[0],
// 		val = old[1];
// 		json[key]:String = val;
// 	}

// 	return json[key]

// }
// // 设置token
// export function setStorageToken(){
// 	let url = window.location.href;
// 	let token = queryString(url, 'token');
// 	if(token && token.length === 32){
// 		window.localStorage['token'] = token;
// 	}
// }
// // 获取token
// export function getStorageToken(){
// 	let storage = window.localStorage['token'];
// 	return (storage && storage.length === 32 ) ? storage : false;
// }

// // 判断测试地址与正式地址
// export function getCursorUrl(){
// 	if(process.env.NODE_ENV === 'development'){
// 		return 'http://localhost'
// 	}
// 	return 'https://coachline.xjy.cn'
// }