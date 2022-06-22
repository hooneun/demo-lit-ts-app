import './main'; // Adding the lit-app component here for better performance

export const routes = [
  {
    path: '/',
    component: 'lit-app',
    children: [
      {
        path: 'blog',
        component: 'lit-blog',
        action: async () => {
          await import('./blog/blog');
        },
        children: [
          {
            path: '',
            redirect: '/blog/posts',
          },
          {
            path: 'posts',
            component: 'lit-blog-posts',
            action: async () => {
              await import('./blog/blog-posts');
            },
          },
          {
            path: 'posts/:id',
            component: 'lit-blog-post',
            action: async () => {
              await import('./blog/blog-post');
            },
          },
        ]
      },
    //   {
    //     path: 'about',
    //     component: 'lit-about',
    //     action: async () => {
    //       await import('./about/about');
    //     },
    //   },
    ]
  },
];