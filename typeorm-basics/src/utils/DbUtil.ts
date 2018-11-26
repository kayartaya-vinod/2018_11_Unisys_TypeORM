import { createConnection, Logger } from "typeorm";
import { Supplier } from "../entity/northwind/Supplier";
import { Product } from "../entity/northwind/Product";
import { Category } from "../entity/northwind/Category";
import { Order } from "../entity/northwind/Order";
import { Customer } from "../entity/northwind/Customer";
import { OrderDetails } from "../entity/northwind/OrderDetails";
import { Shipper } from "../entity/northwind/Shipper";

export const getNorthwindConnection = () => {
    return createConnection({
        type: "mssql",
        host: "localhost",
        port: 1223,
        username: "sa",
        password: "Welcome#123",
        database: "Northwind",
        synchronize: false,
        logging: "all",
        logger: "file",
        entities: [Product, Category, Supplier, 
            Order, Customer, OrderDetails, Shipper]
    });
}