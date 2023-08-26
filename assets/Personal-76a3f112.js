import{U as D,P as N}from"./Posts-3e838372.js";import{H as B,k as I,l as r,q as f,K as $,v as p,_ as O,S as E,L as j,e as G,x as C,s as e,M as R,N as U,F,I as T,w as z,o as V,u as n,z as P,J as X,O as M,D as q,E as H}from"./index-eef30e47.js";const J={key:0,class:"flex gap-2"},K={__name:"InfoFriend",setup(d){return B(),(a,o)=>{const u=I("Button");return r(),f("div",J,[(r(),$(u,{key:1,label:"Bạn bè"})),p(u,{label:"Nhắn tin",class:"p-button-outlined",disabled:!1})])}}};const Q={class:"w-15rem h-15rem m-auto"},W=["src"],Y={class:"relative z-"},Z=["src"],ee={key:0,style:{top:"4.5rem",left:"50%",transform:"translateX(-50%)"},class:"flex flex-column overflow-hidden border-round-lg bg-white box-shadow-2 absolute z-5"},te=["src"],ae={__name:"Avatar",props:["info","updateAvatar"],setup(d){const a=d,{onActionActivePopupMessage:o,onActionGetUserInfo:u}=E(),{onActionUpdateAvatar:k,onActionGetUserPersonalInfo:g}=B(),h=j(),m=new FormData,t=G({avatarFile:"",avatarPreview:"",displayOption:!1,displayBg:!1,popupAvatarPreview:!1,openImagePreview:!1}),b=()=>{t.displayOption=!0,t.displayBg=!0},A=()=>{t.displayOption=!1,t.displayBg=!1},w=(i,s,_)=>{t.popupAvatarPreview=!0;const c=new FileReader;c.readAsDataURL(i.target.files[0]),c.onload=l=>{t[`${s}`]=l.target.result},t[`${_}`]=i.target.files[0]},x=(i,s)=>{t[`${i}`]="",t[`${s}`]="",t.popupAvatarPreview=!1},y=async()=>{o(null,"Đang cập nhật..."),t.popupAvatarPreview=!1,m.set("user_id",a.info.user_id),m.set("avatar_user",t.avatarFile),await k(m)&&await u(a.info.account_id),g(h.params.username),o(1,"Cập nhật ảnh đại diện thành công!")};return(i,s)=>{const _=I("Button"),c=I("Dialog");return r(),f(F,null,[p(c,{visible:t.popupAvatarPreview,"onUpdate:visible":s[0]||(s[0]=l=>t.popupAvatarPreview=l),modal:"",header:"Xem trước ảnh đại diện",class:"w-25rem"},{footer:C(()=>[p(_,{label:"Bỏ qua",class:"p-button-outlined",onClick:x}),p(_,{label:"Lưu",onClick:y})]),default:C(()=>[e("div",Q,[e("img",{class:"w-full h-full border-circle object-fit-cover border-dashed border-1 text-main-color",src:t.avatarPreview,alt:""},null,8,W)])]),_:1},8,["visible"]),e("div",Y,[e("div",null,[e("img",{onClick:b,style:{transform:"translate(-50%, 50%)",left:"50%",bottom:"0",border:"3px solid #fff"},class:"avatar-1 bg-white w-11rem h-11rem border-circle on-click absolute box-shadow-1 cursor-pointer",src:a!=null&&a.info.avatar?a==null?void 0:a.info.avatar:"https://trinhvantuyen.com/wp-content/uploads/2022/03/avatar-nam.jpg",alt:""},null,8,Z)]),t.displayOption?(r(),f("div",ee,[e("span",{onClick:s[1]||(s[1]=()=>{t.openImagePreview=!0,t.displayOption=!1,t.displayBg=!1}),class:"option-avatar cursor-pointer p-3 on-click unselectable"},"Xem ảnh đại diện"),a.updateAvatar?(r(),f("span",{key:0,onClick:A,class:"option-avatar relative cursor-pointer p-3 on-click unselectable"},[R(" Thay đổi ảnh đại diện "),e("input",{type:"file",accept:"image/*",class:"absolute left-0 top-0 right-0 bottom-0 opacity-0",onChange:s[2]||(s[2]=l=>w(l,"avatarPreview","avatarFile"))},null,32)])):U("",!0)])):U("",!0)]),t.displayBg?(r(),f("div",{key:0,class:"fixed top-0 left-0 right-0 bottom-0 bg-black-alpha-30 z-4",onClick:A})):U("",!0),p(c,{visible:t.openImagePreview,"onUpdate:visible":s[3]||(s[3]=l=>t.openImagePreview=l),modal:"",header:"Xem ảnh",class:"w-30rem"},{default:C(()=>[e("img",{class:"w-full h-20rem object-fit-cover box-shadow-2 mt-1",src:a.info.avatar?a.info.avatar:"https://trinhvantuyen.com/wp-content/uploads/2022/03/avatar-nam.jpg",alt:""},null,8,te)]),_:1},8,["visible"])],64)}}},se=O(ae,[["__scopeId","data-v-166c59f9"]]);const v=d=>(q("data-v-bee14b01"),d=d(),H(),d),ne={class:"ab container-personal pt-8 px-8"},oe={class:"w-full z-5"},le=["src"],ie=v(()=>e("div",{class:"block-1 w-full h-6rem"},null,-1)),re={class:"w-full flex flex-column align-items-center gap-3"},ce={class:"flex flex-column gap-2 align-items-center"},pe={class:"text-2xl font-bold mt-2"},de={class:"container-body bg-light-blue w-full flex gap-3 mt-5 md:mt-0"},ue={class:"col-5 card flex flex-column gap-3 p-3"},_e=v(()=>e("span",{class:"font-bold"},"Thông tin",-1)),fe={class:"container-info flex flex-column gap-2"},me={class:"flex align-content-center gap-2 justify-content-between"},ve=v(()=>e("span",null,"Ngày sinh:",-1)),he={class:"flex align-content-center gap-2 justify-content-between"},be=v(()=>e("span",null,"Giới tính:",-1)),ge=v(()=>e("label",{class:"flex align-content-center gap-2 justify-content-between"},[e("span",null,"Tình trạng:"),e("span",null,"Chưa cập nhật")],-1)),we=v(()=>e("label",{class:"flex align-content-center gap-2 justify-content-between"},[e("span",null,"Số lượt theo dõi:"),e("span",null,"100000")],-1)),xe={style:{"min-width":"25rem"},class:"container-posts flex-1 flex flex-column gap-3 align-items-center"},ye={__name:"Personal",setup(d){const a=j(),{onGetterUserPersonalInfo:o,onActionGetPostsUser:u,onGetterListPostsUser:k,onActionGetUserPersonalInfo:g}=B(),{user_info:h,account_id:m}=T(),t=()=>{u(h.user_id)};return z(()=>a.params.username,b=>{b&&g(b)}),V(()=>{u(h.user_id),g(a.params.username)}),(b,A)=>{var w,x,y,i,s,_,c,l;return r(),f("div",ne,[e("div",oe,[e("img",{class:"banner w-full h-20rem object-fit-cover cursor-pointer box-shadow-1",src:(w=n(o))!=null&&w.banner_user?(x=n(o))==null?void 0:x.banner_user:"https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-cartoon-banner-seascape-viewskybluecoconut-treeoceanblue-sky-image_56390.jpg",alt:""},null,8,le),p(se,{info:{account_id:n(m),user_id:n(h).user_id,avatar:(y=n(o))==null?void 0:y.avatar_user},updateAvatar:n(o).account_id===n(m)},null,8,["info","updateAvatar"])]),ie,e("div",re,[e("div",ce,[e("span",pe,P((i=n(o))==null?void 0:i.full_name),1),e("span",null,P((s=n(o))!=null&&s.marital_status?(_=n(o))==null?void 0:_.marital_status:"Chào mừng bạn đến với trang của tôi!"),1)]),p(K),e("div",de,[e("div",ue,[_e,e("div",fe,[e("label",me,[ve,e("span",null,P(n(M)((c=n(o))==null?void 0:c.birth_date)),1)]),e("label",he,[be,e("span",null,P((l=n(o))==null?void 0:l.gender),1)]),ge,we])]),e("div",xe,[p(D,{onOnEmitUpdateListPosts:t}),(r(!0),f(F,null,X(n(k),(L,S)=>(r(),$(N,{key:S,postsContentInfo:L,onOnEmitUpdateListPosts:t},null,8,["postsContentInfo"]))),128))])])])])}}},Ae=O(ye,[["__scopeId","data-v-bee14b01"]]);export{Ae as default};
