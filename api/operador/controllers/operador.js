"use strict";
const { sanitizeEntity } = require("strapi-utils");
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    const conversas = await strapi.services.conversas.find({ operador: 1})
    const conversasFormatadas = conversas.map((conversa) => ({
        id:conversa.id,
        created_at: conversa.created_at,
        status: conversa.status,
        operador: conversa.operador,
        mensagens: conversa.mensagens

    }))
    ctx.send(conversasFormatadas)
    // return entities.map((entity) =>
    //   sanitizeEntity(entity, { model: strapi.models.operadores })
    // );
  },
};
