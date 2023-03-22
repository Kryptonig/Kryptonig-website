



//Array for the blog posts
const Blogs = [
    {
        publisher:'Evans',
        DatePublished:'14 jan 2023',
        type:'Featured',
        Blogtittle:'The Tech that would change the way we see crypto',
        Blogsmalltext:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....',
        crypto:'Cryptocurrency',
        technology:'Technology',
        Blogpost:'Loremmm',
        BlogImg:'./kryptonigimg/Blog 3.jpg'
    },
    {
        publisher:'Evans',
        DatePublished:'14 jan 2023',
        type:'Featured',
        Blogtittle:'The Tech that would change the way we see crypto',
        Blogsmalltext:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....',
        crypto:'Cryptocurrency',
        technology:'Technology',
        Blogpost:'Loremmm',
        BlogImg:'./kryptonigimg/slide2.jpg'
    },
    {
        publisher:'Evans',
        DatePublished:'14 jan 2023',
        type:'Featured',
        Blogtittle:'The Tech that would change the way we see crypto',
        Blogsmalltext:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis....',
        crypto:'Cryptocurrency',
        technology:'Technology',
        Blogpost:'Loremmm',
        BlogImg:'./kryptonigimg/Blog 2.jpg'
    }
]

const postDiv = document.querySelector('.posts')
const container = document.querySelector('.container')
 // looping through each array to create a div for each of the post in the arrsy
Blogs.forEach((post)=>{
    let FlexDiv = document.createElement('div')
    let link = document.createElement('a')
    let bigDiv = document.createElement('div')
    let publishDiv = document.createElement('div')
    let publisherName = document.createElement('div')
    let publishDate = document.createElement('div')
    let tittle = document.createElement('div')
    let smallTextDiv = document.createElement('div')
    let cryptoTech = document.createElement('div')
    let cryptoDiv = document.createElement('div')
    let technologyDiv = document.createElement('div')
    let BlogPicture = document.createElement('div')
    let blogimage = document.createElement('img')


    // All the classes for the post
    bigDiv.classList.add('bigDiv')
    BlogPicture.classList.add('blog-picture')
    publishDiv.classList.add('date-publish')
    tittle.classList.add('tittle-blog')
    FlexDiv.classList.add('flexDiv')
    smallTextDiv.classList.add('smallTextDiv')
    cryptoTech.classList.add('crypto-tech2')
    cryptoDiv.classList.add('c-t')
    technologyDiv.classList.add('c-t')
    link.classList.add('linkdiv')
    link.setAttribute('href', './Featuredposts.html')
    bigDiv.classList.add('reveal-img')
    //  The contents
    publisherName.textContent = post.publisher
    publishDate.textContent = post.DatePublished
    blogimage.src = post.BlogImg
    tittle.textContent = post.Blogtittle
    smallTextDiv.textContent = post.Blogsmalltext
    cryptoDiv.textContent= post.crypto
    technologyDiv.textContent = post.technology
    


    // Appending Area (displaying it to the dom)
    postDiv.appendChild(link)
    link.appendChild(bigDiv)
    BlogPicture.appendChild(blogimage)
    bigDiv.append(BlogPicture, FlexDiv)
    publishDiv.append(publisherName, publishDate)
    cryptoTech.append(cryptoDiv, technologyDiv)
    FlexDiv.append(publishDiv, tittle, smallTextDiv, cryptoTech)
})


///ADMIN JAVASCRIPT CODE

  