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
    root.GeocachingApiV10.PostImage = factory(root.GeocachingApiV10.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PostImage model module.
   * @module model/PostImage
   * @version v1
   */

  /**
   * Constructs a new <code>PostImage</code>.
   * @alias module:model/PostImage
   * @class
   * @param base64ImageData {String} 
   */
  var exports = function(base64ImageData) {
    var _this = this;

    _this['base64ImageData'] = base64ImageData;


  };

  /**
   * Constructs a <code>PostImage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PostImage} obj Optional instance to populate.
   * @return {module:model/PostImage} The populated <code>PostImage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('base64ImageData')) {
        obj['base64ImageData'] = ApiClient.convertToType(data['base64ImageData'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} base64ImageData
   */
  exports.prototype['base64ImageData'] = undefined;
  /**
   * Description of the image
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;



  return exports;
}));


