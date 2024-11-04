// [slug] is a way to catch the slug after /blogpost/ in URL in Next Js 
export default function Page({ params }) {
    // fetch your blog post by its slug
    let languages = ["python", "javascript", "java", "cpp", "cs"]

    // if above languages are not present in the array then it will return post not found
    if(languages.includes(params.slug)){
        return <div>My Post: {params.slug}</div>
    }
    else{
        return <div>Post not found</div>
    }

    // by default it will return My Post: {params.slug} [if above conditions were not mentioned]
    return <div>My Post: {params.slug}</div>
  }