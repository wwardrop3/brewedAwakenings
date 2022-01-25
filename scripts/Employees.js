import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

//add click event that shows how many products each salesperson has sold
//need to import get orders
//check the id of the click employee click target and use it to extract the orders made from the orders array
document.addEventListener (
    "click",
    (clickEvent) => {
        if (clickEvent.target.id.startsWith("employee")){
            const [,employeeOrdersId] = clickEvent.target.id.split("--")
            let numOrders = 0
            for (const order of orders) {
                if(order.employeeId === parseInt(employeeOrdersId)){
                    numOrders++
                }
            }
            window.alert(`${clickEvent.target.innerHTML} sold ${numOrders} orders`)
        }
    }
)