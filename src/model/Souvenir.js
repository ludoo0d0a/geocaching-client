/**
 * Geocaching API v1.0
 * Geocaching API version 1.0.
 *
 * OpenAPI spec version: v1
 * Contact: apihelp@geocaching.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.6
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.Souvenir = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Souvenir model module.
   * @module model/Souvenir
   * @version v1
   */

  /**
   * Constructs a new <code>Souvenir</code>.
   * @alias module:model/Souvenir
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Souvenir</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Souvenir} obj Optional instance to populate.
   * @return {module:model/Souvenir} The populated <code>Souvenir</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('imagePath')) {
        obj['imagePath'] = ApiClient.convertToType(data['imagePath'], 'String');
      }
      if (data.hasOwnProperty('thumbImagePath')) {
        obj['thumbImagePath'] = ApiClient.convertToType(data['thumbImagePath'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('foundDateUtc')) {
        obj['foundDateUtc'] = ApiClient.convertToType(data['foundDateUtc'], 'Date');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} imagePath
   */
  exports.prototype['imagePath'] = undefined;
  /**
   * @member {String} thumbImagePath
   */
  exports.prototype['thumbImagePath'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Date} foundDateUtc
   */
  exports.prototype['foundDateUtc'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


