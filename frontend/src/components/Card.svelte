<script>
    export let post = {"imglink": "images/rick.gif",
        "headline": "Test Headline",
        "description" : "Some description here lorem ipsum."
    };
    $: post;  
</script> 

<div class="w-full px-2 py-3 m-1"> 
    <div class="sm:w-16 w-full sm:h-16 sm:float-left content-center"> 
        <img alt="{post.imglink}" src={post.imglink} /> 
    </div>
    <div class="sm:float-right content-center sm:px-2 px-1">
        <h1>{post.headline}</h1> 
        <p>{post.description}</p>
    </div> 
</div>