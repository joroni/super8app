// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
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
      // Demo products for Catalog section
      products: [
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

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
});
var catalogView = app.views.create('#view-catalog', {
  url: '/catalog/'
});


var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});



if (!localStorage.getItem("usr") && !localStorage.getItem("pass")){
  app.loginScreen.open('#my-login-screen');
  console.log("no user");
}else{
  app.loginScreen.close('#my-login-screen');
  console.log("has user");
}

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');
  localStorage.setItem("usr", username);
  localStorage.setItem("pass", password);
  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});



// Login Screen Demo
$$('.logout-button').on('click', function () {
  app.loginScreen.open('#my-login-screen');
  console.log("no user");
  localStorage.removeItem("usr");
  localStorage.removeItem("pass");

});

var swiper = app.swiper.get('.swiper-container');

swiper.slideNext();

