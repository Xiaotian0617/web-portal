!window.$yhsd && (window.$yhsd = {});
window.$yhsd.route = {
  path: window.location.pathname,
  init: function (oConf) {
    var self = this;
    //
    if (oConf) {
      //
      var oConfAll = self.pathRegexp;
      // 添加自定义路由
      $.each(oConf, function (key) {
        if (!oConfAll[key]) {
          var aRegExp = key.split('/');
          aRegExp.shift();
          aRegExp.pop();
          oConfAll[key] = new RegExp(aRegExp.join('/'));
        }
      });
      // 运行匹配的controller
      $.each(oConfAll, function (key, rPath) {
        var aPath = self.path.match(rPath);
        if (aPath && aPath.length === 1) {
          oConf[key] && oConf[key](aPath[0]);
        }
      });
    }
  },
  pathRegexp: {
    all: /.*/, // 所有页面
    index: /^\/$/, //首页
    cart: /^\/cart\/?$/, //购物车
    accountIndex: /^\/account\/?$/, // 个人信息
    accountLogin: /^\/account\/login\/?$/, // 登录
    accountRegister: /^\/account\/register\/?$/, // 注册
    accountRegisterWithEmail: /^\/account\/register_with_email\/?$/, // 注册 - 邮箱
    accountRegisterWithUsername: /^\/account\/register_with_user_name\/?$/, // 注册 - 用户名
    accountRegisterWithMobile: /^\/account\/register_with_mobile\/?$/, // 注册 - 手机号码
    accountChangePassword: /^\/account\/change_password\/?$/, // 修改密码
    accountForgetPassword: /^\/account\/forget_password\/?$/, // 忘记密码
    accountResetPasswordWithEmail: /^\/account\/reset_password_with_email\/?$/, // 忘记密码 - 邮箱
    accountResetPasswordWithMobile: /^\/account\/reset_password_with_mobile\/?$/, // 忘记密码 - 手机号码
    accountReset: /^\/account\/reset\/.+\/?$/, // 重设密码
    accountValidateEmail: /^\/account\/reset\/.+\/?$/, // 邮箱注册成功 - 验证邮箱
    accountSocialBind: /^\/account\/social\/bind$/, // 社交绑定
    orderCreate: /^\/account\/create_order\/?$/, // 创建订单
    orderAll: /^\/account\/orders\/?$/, // 订单列表
    orderDetail: /^\/account\/orders\/.+\/?$/, // 订单详情
    productAll: /^\/products\/?$/, //所有商品
    productDetail: /^\/products\/.+\/?$/, //商品详情
    discounts: /^\/discounts\/.+\/?$/, // 参加某个优惠活动的商品列表
    types: /^\/types\/.+\/?$/, // 拥有某个分类的商品列表
    vendors: /^\/vendors\/.+\/?$/, // 拥有某个品牌的商品列表
    search: /^\/search\/?$/, // 搜索结果
    page: /^\/pages\/.+\/?$/, // 所有自定义页面
    blogAll: /^\/blogs\/?$/, //所有博客
    blogDetail: /^\/blogs\/.+\/?$/, //博客详情
    postAll: /^\/posts\/?$/, //所有博客
    postDetail: /^\/posts\/.+\/?$/ //文章详情
  }
};

var Index = {
  _post_count: 4,
  postTpl: '<div class="post-list-each #{is_last}">' +
  '    <a href="#{url}" class="post-list-each-pic settings-main_header_color">' +
  '        <div class="post-list-each-pic-inner"><img class="lazyload" src="//asset.ibanquan.com/common/img/blank.gif" data-src="#{cover_url}"/></div>' +
  '    </a>' +
  '    <div class="post-list-each-pic-sub settings-main_color"></div>' +
  '    <h3>' +
  '        <a href="#{url}" class="settings-main_header_color settings-main_border">#{title}</a>' +
  '    </h3>' +
  '    <p class="settings-main_header_color">#{summary}</p>' +
  '</div>',
  init: function () {
    var self = this;
    var $postList = $('#yhsd_main_list');
    var defaultPostImage = (window.assetPath + window.postImage).replace('noimage', 'noimage_w220h151gc');
    var allArticle;
    // 未选中目录时提示语
    
    yhsd.ready(function (jssdk) {
      window.Jssdk = jssdk;

            // 获取五个区域的id值
      var indexMainBox1 = $('.catalog_1').attr('href').split('=')[1] || '';
      var indexMainBox2 = $('.catalog_2').attr('href').split('=')[1] || '';
      var indexMainBox3 = $('.catalog_3').attr('href').split('=')[1] || '';
      var indexMainBox4 = $('.catalog_4').attr('href').split('=')[1] || '';
      var allDir = [], allDir_id = [];

      // 获取所有目录的id和标题值
      var indexMainBox1_name;
      var indexMainBox2_name;
      var indexMainBox3_name;
      var indexMainBox4_name;
      jssdk.post.dir(function (data){
        for(var i= 0;i <data.res.dir.length; i++) {
          if(data.res.dir[i].id == indexMainBox1){
            indexMainBox1_name = data.res.dir[i].name;
          }
 if(data.res.dir[i].id == indexMainBox2){
             indexMainBox2_name = data.res.dir[i].name;
          }
 if(data.res.dir[i].id == indexMainBox3){
            indexMainBox3_name = data.res.dir[i].name;
          }
 if(data.res.dir[i].id == indexMainBox4){
            indexMainBox4_name = data.res.dir[i].name;
          }
        }
        // 根据 indexMainBox1 - 4 for 出 对应的 name，例如 indexMainBox1_name
      });


      if (indexMainBox1 == '') {
        $('.catalog_1').html('暂未选中目录');
      }else{
        jssdk.post.get({dir_id: indexMainBox1},function(data){
        
        $('.catalog_1').html(indexMainBox1_name);
        if(data.res.code === 200 && data.res.posts.length == 0){
          $('.article_list_1').html('暂无内容');
        }else if(data.res.code === 200 && data.res.posts.length >= 1){
          var _data = data.res.posts;
          var list = $('.article_list_1')
          var tpl = '';
          for(var i =0; i<_data.length;i++){
            tpl += '<li class="article_list">'+
                      '<a href='+ _data[i].page_url +' class="article_title">' + _data[i].title + '</a>'+
                      '<span class="article_summary">' + _data[i].summary + '</span>'+
                    '</li>';
          }
          list.html(tpl);
        };
      })
      }

      
       if(indexMainBox2 == ''){
        $('.catalog_2').html('暂未选中目录');
       }else{
          jssdk.post.get({dir_id: indexMainBox2},function(data){
             $('.catalog_2').html(indexMainBox2_name) ;
            if(data.res.code === 200 && data.res.posts.length == 0){

              $('.article_list_2').html('暂无内容');
            }else if(data.res.code === 200 && data.res.posts.length >= 1){
            var _data = data.res.posts;
            var list = $('.article_list_2')
            var tpl = '';
            for(var i =0; i<_data.length;i++){
              tpl += '<li class="article_list">'+
                        '<a href='+ _data[i].page_url +' class="article_title">' + _data[i].title + '</a>'+
                        '<span class="article_summary">' + _data[i].summary + '</span>'+
                      '</li>';
            }
            list.html(tpl);
            }
            
          })
       }
      
       if(indexMainBox3 == ''){
        $('.catalog_3').html('暂未选中目录');
       }else{
        jssdk.post.get({dir_id: indexMainBox3},function(data){
          $('.catalog_3').html(indexMainBox3_name) ;
          if(data.res.code === 200 && data.res.posts.length == 0) {
            $('.article_list_3').html('暂无内容');
          }else if(data.res.code === 200 && data.res.posts.length >= 1){
          var _data = data.res.posts;
          var list = $('.article_list_3')
          var tpl = '';
          for(var i =0; i<_data.length;i++){
             tpl += '<li class="article_list">'+
                        '<a href='+ _data[i].page_url +' class="article_title">' + _data[i].title + '</a>'+
                        '<span class="article_summary">' + _data[i].summary + '</span>'+
                  '</li>';
          }
          list.html(tpl);
          }
         
       })
       }
       // 深度报道 网络安全 物联网 智能硬件
       
       if(indexMainBox4 == ''){
        $('.catalog_4').html('暂未选中目录');
       }else{
        jssdk.post.get({dir_id: indexMainBox4},function(data){
           $('.catalog_4').html(indexMainBox4_name) ;
          if(data.res.code === 200 && data.res.posts.length == 0){
            $('.article_list_4').html('暂无内容');
          }else if(data.res.code === 200 && data.res.posts.length >= 1){
           
             var _data = data.res.posts;
             var list = $('.article_list_4')
             var tpl = '';
             for(var i =0; i<_data.length;i++){
               tpl += '<li class="article_list">'+
                         '<a href='+ _data[i].page_url +' class="article_title">' + _data[i].title + '</a>'+
                         '<span class="article_summary">' + _data[i].summary + '</span>'+
                       '</li>';
             }
             list.html(tpl);
          }
         
       })

       }
       
       var indexBottomBox;
       var indexBottomBox1 = $('.bnr_item_1').attr('href');
       var indexBottomBox2 = $('.bnr_item_2').attr('href');
       var indexBottomBox3 = $('.bnr_item_3').attr('href');
       var indexBottomBox4 = $('.bnr_item_4').attr('href');

       jssdk.post.get({handle: indexBottomBox},function(data){
        for(var i=0;i<data.res.posts.length;i++){
          if (indexBottomBox1 == data.res.posts[i].page_url ){
            var tpl = '';
            $headImg = data.res.posts[i].cover_image.src ?  data.res.posts[i].cover_image.src :  "//asset.ibanquan.com/s/59658/788/cover_bg?design_theme_id=0&v=1571795918_1572787657";
            tpl = '<img src=' + $headImg + '>'+
                  '<div class="bnr_item_bottom">'+
                  '<span class="bnr_item_title">'+ data.res.posts[i].title +'</span>'+
                  '</div>';
             $('.bnr_item_1').html(tpl);     
          }
        }
       });
       jssdk.post.get({handle: indexBottomBox},function(data){
        for(var i=0;i<data.res.posts.length;i++){
          if (indexBottomBox2 == data.res.posts[i].page_url ){
            var tpl = '';
            $headImg = data.res.posts[i].cover_image.src ?  data.res.posts[i].cover_image.src :  "//asset.ibanquan.com/s/59658/788/cover_bg?design_theme_id=0&v=1571795918_1572787657";
            tpl = '<img src=' + $headImg + '>'+
                 '<div class="bnr_item_bottom">'+
                  '<span class="bnr_item_title">'+ data.res.posts[i].title +'</span>'+
                  '</div>';
             $('.bnr_item_2').html(tpl);     
          }
        }
       });

       jssdk.post.get({handle: indexBottomBox},function(data){
        for(var i=0;i<data.res.posts.length;i++){
          if (indexBottomBox3 == data.res.posts[i].page_url ){
            var tpl = '';
            $headImg = data.res.posts[i].cover_image.src ?  data.res.posts[i].cover_image.src :  "//asset.ibanquan.com/s/59658/788/cover_bg?design_theme_id=0&v=1571795918_1572787657";
            tpl = '<img src=' + $headImg + '>'+
                  '<div class="bnr_item_bottom">'+
                  '<span class="bnr_item_title">'+ data.res.posts[i].title +'</span>'+
                  '</div>';
             $('.bnr_item_3').html(tpl);     
          }
        }
       });

       jssdk.post.get({handle: indexBottomBox},function(data){
        for(var i=0;i<data.res.posts.length;i++){
          if (indexBottomBox4 == data.res.posts[i].page_url ){
            var tpl = '';
            $headImg = data.res.posts[i].cover_image.src ?  data.res.posts[i].cover_image.src :  "//asset.ibanquan.com/s/59658/788/cover_bg?design_theme_id=0&v=1571795918_1572787657";
            tpl = '<img src=' + $headImg + '>'+
                  '<div class="bnr_item_bottom">'+
                  '<span class="bnr_item_title">'+ data.res.posts[i].title +'</span>'+
                  '</div>';
             $('.bnr_item_4').html(tpl);     
          }
        }
       })
    
      jssdk.post.get({
        size: self._post_count}, function (data) {
          var listInner = '';
          var postTpl = self.postTpl;
          var currentHandle = location.pathname.slice(7);
          if (data.res.code === 200 && data.res.posts.length > 1) {
            var posts = data.res.posts,
            i,
            cover_image,
            cover_url;

            for (i = 0; i < posts.length; i++) {
              cover_image = posts[i].cover_image;
              if (!cover_image || JSON.stringify(cover_image) === '{}') {
                cover_url = defaultPostImage;
              } else {
                cover_url = jssdk.util.getImageUrl(cover_image.image_id, cover_image.image_name, 'w220h151gc', cover_image.image_epoch);
              }
              listInner += postTpl.replace(/#{url}/g, posts[i].page_url)
              .replace(/#{title}/, posts[i].title)
              .replace(/#{cover_url}/, cover_url)
              .replace(/#{summary}/, posts[i].summary)
              .replace(/#{is_last}/, (i === 3) ? 'last-child' : '');
            }
          } else {
            listInner = '<div class="post-re-list-tip settings-main_desc_color">暂无内容</div>';
          }
          $postList.html(listInner);
          if (window.lazyload && window.lazyload.init) {
            window.lazyload.init();
          }
        });
    });
  } 
}



// 移动导航
var Mobilenav = {
  navEl: $('#nav_mobile'),
  menuEl: $('#mobile_menu'),
  bgEl: $('#mobile_bg'),
  closeMbileNav: $('#closeMbileNav'),
  init: function () {
    var self = this;
    var bInMenu = false;
    var bStartMove = false;
    //
    if ($('html')[0].className.indexOf('ie') > -1) {
      return false;
    }
    //
   // $(window).on('resize', function () {
     // self.menuEl.css({
       // 'left': '-100%'
     // });
     // $('.page').css({
      //  'height': 'auto',
      //  'overflow': 'auto'
     // });
   // });
    //
    self.closeMbileNav.on('click', function () {
      $('#mobile_menu').animate({
        'right': '-100%'
      }, function () {
        $('.page').css({
          'height': 'auto',
          'overflow': 'auto'
        });
      });
      $('#side_film').css('display', 'none');
    });
    self.navEl.on('click', function () {
      //
      self.menuEl.show();
      //
      $('html,body').addClass('page');
      $('#mobile_menu').animate({
        'right': '0'
      }, function () {
        var sHeight = $(window).height() + 'px';
        $('.page').css({
          'height': sHeight,
          'overflow': 'hidden'
        });
        bInMenu = true;
      });
    });

    var touchSatrtFunc = function (evt) {
      if (!bInMenu) {
        return;
      }
      var touch = evt.touches[0]; //获取第一个触点
      var x = Number(touch.pageX); //页面触点X坐标
      self.startX = x;
      bStartMove = true;
    };

    $('.side-nav-link-has_sub a').click(function (e) {
      var _item, _itemP;
      _item = $(e.target);
      _itemP = $(e.target).parent();
      linkID = _item.data('linkid');


      /* 事件父元素 */
      if (_itemP.hasClass('active')) {
        _itemP.removeClass('active');
        _itemP.addClass('noactive');
        $('.noactive + li > .side-nav-link-sub_list').slideUp();
      } else {
        _itemP.addClass('active');
        _itemP.removeClass('noactive');
        $('.active + li > .side-nav-link-sub_list').slideDown();
      }
    });
    document.addEventListener('touchstart', touchSatrtFunc, false);
  }
};


$(document).ready(function () {
  var oRouteCustom = {};
  oRouteCustom['all'] = function (path) {
    // Nav.init();
    Mobilenav.init();
  };
  oRouteCustom['index'] = function (path) {
    Index.init();
  };
  $yhsd.route.init(oRouteCustom);
});


// 顶部搜索
var TopSearch = {
  ico: $('#yhsd-header-search'),
  ipt: $('#yhsd-header-search-ipt'),
  init: function () {
    var self = this;
    var oIpt = self.ipt.find('input');
    //
    var sWidth = "200px";
    //
    if (bIsMobile) {
      sWidth = '30%';
    }
    self.ico.on('click', function () {
      oIpt.focus();
      self.ipt.animate({
        'opacity': 1,
        'width': sWidth
      }, 200);
    });
    //
    oIpt.on('blur', function () {
      self.ipt.animate({
        'opacity': 0,
        'width': '0px'
      }, 200);
    });
  }
};

// 文章列表
var postList = {
  init: function () {
    var $dirlist = $('#post-dirs-list');
    var $arrow = $dirlist.find('.post-dir-btn');
    var clientW = document.documentElement.clientWidth;
    if (clientW < 768) {
      if ($('.post-dir-1').length > 2) {
        $('.post-dirs-list').prepend('<li class="post-dir-0 settings-main_border ">' + '<a href="javascript(0)" class="post-dir-1-box settings-text_color">' +
          '<span class="post-dir-dot"></span>目录列表</a>' +
          '<div class="post-dir-btn-0"><i class="main-ico main-ico-down"></i><i class="main-ico main-ico-up"></i></div>' +
          '</li>');
      }
    }
    var $dir1 = $('.post-dir-1');
    var $dir0 = $('.post-dir-btn-0');
    $dir0.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      $dir1.slideToggle();
      var $tar = $(e.currentTarget);
      if ($tar.hasClass('dir_off')) {
        $tar.removeClass('dir_off');
      } else {
        $tar.addClass('dir_off');
      }
    })

    $arrow.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $tar = $(e.currentTarget);
      var $next = $tar.parent().next();
      if ($tar.hasClass('dir_off')) {
        $next.slideUp();
        $tar.removeClass('dir_off');
      } else {
        $tar.addClass('dir_off');
        $next.slideDown();
      }
    });
  }
};

// 手机端页脚
var footerList = {
  init: function () {
    var $dirlist = $('.footer-nav li');
    var $arrow = $dirlist.find('.post-dir-btn');
    $arrow.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var $tar = $(e.currentTarget);
      var $next = $tar.parent().nextAll();
      if ($tar.hasClass('dir_off')) {
        $tar.removeClass('dir_off');
        $next.slideUp();
        $tar.parents('li').removeClass('border_bottom');
      } else {
        $tar.addClass('dir_off');
        $next.slideDown();
        $tar.parents('li').addClass('border_bottom');
      }
    });
  }
};
var postDetail = {
  _post_count: 5,
  rePostTpl: '<a href="/posts/#{handle}" class="post-re-each settings-main_border settings-text_color"><span class="post-re-each-dot"></span>#{title}</a>',
  init: function () {
    var self = this;
    var $recentPostList = $('#post-re-list');
    yhsd.ready(function (jssdk) {
      jssdk.post.get({
        size: self._post_count + 1
      }, function (data) {
        var listInner = '';
        var rePostTpl = self.rePostTpl;
        var currentHandle = location.pathname.slice(7);
        if (data.res.code === 200 && data.res.posts.length > 1) {
          var posts = data.res.posts,
          i;
          for (i = 0; i < posts.length; i++) {
            // 不显示当前文章
            if (posts[i].handle != currentHandle) {
              listInner += rePostTpl.replace(/#{handle}/, posts[i].handle)
              .replace(/#{title}/, posts[i].title);
            }
          }
        } else {
          listInner = '<div class="post-re-list-tip settings-desc_color">暂无内容</div>';
        }
        $recentPostList.html(listInner);
      });
    });
  }
}

postDetail.init();
footerList.init();
postList.init();

$(function () {
  // 手机端，当服务图片大于6张时，将剩余的图片隐藏
  var clientW = document.documentElement.clientWidth;
  if (clientW <= 768) {
    var $index_service_img = $('#index_service a');
    var $index_service_img_length = $('#index_service a').length;
    if ($index_service_img_length > 6) {
      for (var i = 6; i < $index_service_img_length; i++) {
        $index_service_img.eq(i).hide();
      }
    }
    // 手机端时切换导航栏的class
    var $mobiNavBackground = $('.settings-top_background');
    $mobiNavBackground.removeClass("settings-top_background").addClass("settings-nav_background");
  } else {
    var $NavBackground = $('.settings-nav_background');
    $NavBackground.removeClass("settings-nav_background").addClass("settings-top_background");
  }
})