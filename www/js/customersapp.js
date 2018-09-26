// Dom7
var $$ = Dom7;

// Framework7 App main instance
var customerapp  = new Framework7({
  root: '#customerapp', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Super8', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        },
      // Demo customers for Catalog section
      customers: [
        {
          id: '1',
          title: 'Haagen-Dazs',
          subtitle: 'per pint',
          price: '1400',
          productimg: 'haagen-dazs.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
        },
        {
          id: '2',
          title: 'Coca-Cola',
          subtitle: '1.75ml 6s',
          price: '300',
          productimg: 'coke.jpg',
          description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
        },
        {
          id: '3',
          title: 'Chicken Wings',
          subtitle: 'per kilo',
          price: '200',
          productimg: 'chickenwings.jpg',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {
          id: '4',
          title: 'Sinandomeng Rice',
          subtitle: 'Per Sock',
          price: '2500',
          productimg: 'sinandomeng.jpg',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {
          id: '5',
          title: 'Palmolive Shampoo',
          subtitle: '420 ml',
          price: '200',
          productimg: 'palmolive.jpg',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        },
        {
          id: '6',
          title: 'Ghee Butter',
          subtitle: '420 ml',
          price: '756',
          productimg: 'ghee.jpg',
          description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
        }
      ]
    };
  },
  
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});


