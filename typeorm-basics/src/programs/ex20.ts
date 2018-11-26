import { getNorthwindConnection } from "../utils/DbUtil";
import { Shipper } from "../entity/northwind/Shipper";


(async () => {
    const conn = await getNorthwindConnection();

    const s1 = new Shipper();
    s1.name = 'DHL Couriers';
    s1.phone = '9278272672';

    const s2 = new Shipper();
    s2.name = 'BlueDart Couriers';
    s2.phone = '9221232611';

    await conn.transaction(async txMgr => {
        await txMgr.save(s1);
        // intentional failing to check if s1 is committed or not
        if (1 === 1) throw Error('Cancelling the transaction')
        await txMgr.save(s2);
    });

    conn.close();
})();