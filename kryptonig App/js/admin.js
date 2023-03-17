const adminToggle = document.getElementById('admin-toggle')
const uploadSettings = document.getElementById('upload-settings')
const formdiv = document.querySelector('.form-div')

adminToggle.addEventListener('click', Toggle)

function Toggle(){
    uploadSettings.classList.toggle('add-width')
}

const uploadbtn = document.getElementById('upload-btn')
uploadbtn.addEventListener('click',()=>{
    
    formdiv.classList.add('formshow')
    
    const close = document.getElementById('close')
    
    close.addEventListener('click',()=>{
        formdiv.classList.remove('formshow')
        Toggle()
        
    })
})

//form handle

const NamePublish = document.getElementById('name')
const datePublish = document.getElementById('date')
const tittleBlog = document.getElementById('tittleblog')

const postBlog = document.getElementById('postBlog')
const select = document.getElementById('select')
const form = document.getElementById('form')
const blogs = document.querySelector('.blogs')
const post = document.querySelector('.posts')

/*const imgs = {
    imgpic:'./kryptonigimg/slide1.jpg'
}*/

form.addEventListener('submit', FormAction)

function FormAction(e){
    e.preventDefault()

    //validations 

    if(NamePublish.value =="" || datePublish.value =='' || tittleBlog ==''  || postBlog =='' || select==''){
        alert("provide the missing input")
    }
    else{
        let inputName = NamePublish.value
        let inputdate = datePublish.value
        let inputblog = tittleBlog.value
        
        let  inputSelect = select.value
        let inputPost = postBlog.value


        const create = document.createElement('div')
        let publishDiv = document.createElement('div')
        let publisherName = document.createElement('div')
        let publishDate = document.createElement('div')
        let type = document.createElement('div')
        let tittle = document.createElement('div')
        let FlexDiv = document.createElement('div')
        let bigPicture = document.createElement('div')
        let picture = document.createElement('img')
        let blogText = document.createElement('div')
        let delbtn = document.createElement('div')
        let button = document.createElement('button')
        const imgBlog = document.getElementById('file').files[0]

        create.classList.add('bigDiv')
        publishDiv.classList.add('date-publish')
        bigPicture.classList.add('blog-picture')
        formdiv.classList.remove('formshow')
        tittle.classList.add('tittle-blog')
        FlexDiv.classList.add('flexDiv')
        type.classList.add('ft')
        blogText.classList.add('smallTextDiv2')
        button.classList.add('delbtn')


        /// contents
        publisherName.textContent = inputName
        publishDate.textContent = inputdate
        
        tittle.textContent = inputblog
        type.textContent = inputSelect
        blogText.textContent = inputPost
        button.innerHTML= 'Delete Post'

        blogText.addEventListener('click', ()=>{
            blogText.classList.toggle('readmore')
        })

       /*button.forEach(allbuttons => {
           allbuttons.addEventListener('click', ()=>{
               create.remove()
           })
       });*/

       //for the uploading images
        picture = new Image();
       const reader = new FileReader();
       reader.readAsDataURL(imgBlog);
       reader.onload = function(event){
         let newImage = event.target.result;
        picture.src = newImage

       }
       
        //apppend 
        post.append(create)
        bigPicture.appendChild(picture)
        publishDiv.append(publisherName, publishDate, type)
        delbtn.append(button)
        create.append(bigPicture, FlexDiv )
        FlexDiv.append(publishDiv, tittle, blogText, delbtn)
        

        if(blogs.contains(create)){
            const notice = document.querySelector('.notice')
            notice.innerHTML ='Below are your blog posts'
        }
    }
}