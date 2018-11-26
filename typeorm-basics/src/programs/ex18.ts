import { getNorthwindConnection } from "../utils/DbUtil";
import { Order } from "../entity/northwind/Order";

(async () => {
    const conn = await getNorthwindConnection();

    const ord1 = await conn.manager.findOne(Order, 10250);

    (await ord1.orderDetails).forEach(od => {
        console.log('unitPrice=%f, qty=%d, discount=%f',
        od.unitPrice, od.quantity, od.discount);
    });

    conn.close();

})();