let btn = document.getElementById("add_item");
let input = document.getElementById("todo_item")
let list_group =document.getElementById("our_list");
let delete_all =document.getElementById("delete_all")
let list_arr = []


btn.addEventListener('click',function (e){
    e.preventDefault()
    let input_val = input.value;
    input.value = ""

    list_arr.push(input_val)
    const datas = list_arr.map(function (element,i){
        return `<li class="list-group-item d-flex list-group-item list-group-item-action list-group-item-primary justify-content-between align-items-center">
            ${element}</li>`})
    list_group.innerHTML = datas;

})

delete_all.addEventListener("click",function (){
    list_arr = []
    list_group.innerHTML = list_arr;
})