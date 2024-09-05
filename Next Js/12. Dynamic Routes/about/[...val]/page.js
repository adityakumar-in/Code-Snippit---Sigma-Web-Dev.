// [...val] catches all your slugs and display like an Array
// eg - /about/home/next/nextjs will be displayed like {val: ['home', 'next', 'nextjs']}
export default function Page({ params }) { // catching [...val] in params
    console.log(params)
    // fetch your blog post by its slug
    return <div>I am about page check console</div>
  }