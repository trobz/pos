# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html)

from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    pos_order_add_new_line = fields.Boolean(
        related="pos_config_id.order_add_new_line",
        readonly=False,
        string="Add new line to order",
        help="If checked, a new button will be added to the POS order screen to add "
        "a new line to the current order instead of updating the existing line.",
    )
