
function getData() {
    let data = {
        buyer             : document.getElementById("buyer").value,
        house_price  : document.getElementById("house_price").value,
        salary            : document.getElementById("salary").value
    }
    //data = validateData();
    return data;
}

function calculatePayment(salary, house_price) {
    // let salary = salary;
    let data = {
        payment_time       : "",
        initial_payment     : "",
        monthly_payment : ""
    }

    if (Number(salary)>5000) {
        let initial_payment = house_price * 0.25;
        let monthly_payment =  (house_price - initial_payment) / (7 * 12 );

        data["payment_time"] = "7 years";
        data["initial_payment"] = String(initial_payment);
        data["monthly_payment"] = String(monthly_payment)
    }
    
    if (Number(salary)<=5000) {
        let initial_payment = house_price * 0.1;
        let monthly_payment =  (house_price - initial_payment) / (10 * 12 );

        data["payment_time"] = "10 years";
        data["initial_payment"] = String(initial_payment);
        data["monthly_payment"] = String(monthly_payment)
    }

    return data;
}

function insertData(data_buyer, payment_details) {
    let temp = document.getElementById("template_buyer");
    let template_buyer = temp.content.cloneNode(true);
    let buyer = template_buyer.querySelector("#t-buyer");
    let house_price= template_buyer.querySelector("#t-house_price");
    let payment_time= template_buyer.querySelector("#t-payment_time");
    let initial_payment= template_buyer.querySelector("#t-initial_payment");
    let monthly_payment= template_buyer.querySelector("#t-monthly_payment");

    buyer.innerHTML = data_buyer["buyer"];
    house_price.innerHTML = data_buyer["house_price"];
    payment_time.innerHTML = payment_details["payment_time"];
    initial_payment.innerHTML = payment_details["initial_payment"];
    monthly_payment.innerHTML = payment_details["monthly_payment"];

    let container = document.querySelector("body");
    container.appendChild(template_buyer);
}

function showResults() {
    let data_buyer = getData();
    let payment_details = calculatePayment(data_buyer["salary"],data_buyer["house_price"]);
    insertData(data_buyer, payment_details);
}
