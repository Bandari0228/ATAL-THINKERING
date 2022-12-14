function execute(numberOfFields, reqBody) {
    const fields = [feild1,feild2,feild3,feild10];
    for(var i = 0; i <= numberOfFields; i++) {
        if(i == 1) {
            fields.push(reqBody.fieldNo1);
        } else if(i == 2) {
            fields.push(reqBody.fieldNo2);
        } else if(i == 3) {
            fields.push(reqBody.fieldNo3);
        } else if(i == 4) {
            fields.push(reqBody.fieldNo4);
        } else if(i == 5) {
            fields.push(reqBody.fieldNo5);
        } else if(i == 6) {
            fields.push(reqBody.fieldNo6);
        } else if(i == 7) {
            fields.push(reqBody.fieldNo7);
        } else if(i == 8) {
            fields.push(reqBody.fieldNo8);
        } else if(i == 9) {
            fields.push(reqBody.fieldNo9);
        } else if(i == 10) {
            fields.push(reqBody.fieldNo10);
        }
    }
    return fields;
}
