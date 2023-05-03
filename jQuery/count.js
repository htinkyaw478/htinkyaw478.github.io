function count() {
    let itemString = localStorage.getItem('items');
    if(itemString){
        let itemArray = JSON.parse(itemString);
        if(itemArray != null)$('#count_number').text(itemArray.length);
    }else $('#count_number').text('0');

}