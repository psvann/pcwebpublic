<script> 
    export let posts;
</script> 

<div>
    <ul>
        {posts.map(post => <li>{post.frontmatter.title}</li>)}
    </ul>
</div>