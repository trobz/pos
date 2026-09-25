/*
    Copyright (C) 2023-Today GRAP (http://www.grap.coop)
    @author Sylvain LE GAL (https://twitter.com/legalsylvain)
    License AGPL-3 - See http://www.gnu.org/licenses/agpl-3.0.html
*/
import {PosStore} from "@point_of_sale/app/store/pos_store";
import {patch} from "@web/core/utils/patch";

patch(PosStore.prototype, {
    get currentOrder() {
        return this.get_order();
    },
    toggleNewLine() {
        const order = this.get_order();
        if (order) {
            order.create_new_line = !order.create_new_line;
        }
    },
});
