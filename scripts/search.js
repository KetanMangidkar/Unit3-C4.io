async function storeSearchterm(term) {
    try{
        let res = await fetch(term);
        let data = await res.json();
        return data;
}
catch(err){
    console.log("err:",err);
}

}

export { storeSearchterm }