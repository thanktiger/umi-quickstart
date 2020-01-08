// component是相对于src/pages

exports.routes =  [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: 'index',
        title: '首页'
      },
      {
        path: '/orderList',
        component: 'orderList',
        title: '订单列表',
        // redirect: '/'
      },
      {
        path: '/orderDetail',
        component: 'orderDetail',
        title: '订单详情'
      },
      {
        path: '/goodsList',
        component: 'goodsList',
        title: '商品列表'
      },
      {
        path: '/goodsDetail/:id',
        component: 'goodsDetail',
        title: '商品详情'
      },
    ]
  }
];
