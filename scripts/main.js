async function apiCall(url) {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log("data:",data);
        return data;


    }
    catch (err){
        console.log("err:",err);
    }

    //add api call logic here


}


function appendArticles(articles, main) {

    //add append logic here
    articles.forEach(function(el){
        let div = document.createElement("div");
        div.setAttribute("id","index-div");
        let div1 = document.createElement("div");
        div1.setAttribute("id","image-div");
        let div2 = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.urlToImage;

        let title = document.createElement("h3");
        title.innerText = el.title;

        let dis = document.createElement("p");
        dis.innerText = el.description;

        div2.append(title,dis);
        div1.append(img);

        div.append(div2, div1);
        div.onclick = () =>{
            localStorage.setItem("clicked_image",JSON.stringify(el));
            window.location.href = "news.html";
        }
         
        main.append(div);

    });

}

export { apiCall, appendArticles }