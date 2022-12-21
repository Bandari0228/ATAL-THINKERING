function execute(count, index) {
    const fields = [];
    for(var i = 1; i <= count; i++) {
        // console.log(document.getElementById(`${index}-${i}`));
        fields.push(document.getElementById(`${index}-${i}`).value);
    }
    return fields;

    
}

export default execute;
