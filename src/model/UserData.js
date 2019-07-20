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
    define(['ApiClient', 'model/Coordinates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coordinates'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.UserData = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Coordinates);
  }
}(this, function(ApiClient, Coordinates) {
  'use strict';




  /**
   * The UserData model module.
   * @module model/UserData
   * @version v1
   */

  /**
   * Constructs a new <code>UserData</code>.
   * @alias module:model/UserData
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>UserData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserData} obj Optional instance to populate.
   * @return {module:model/UserData} The populated <code>UserData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('foundDate')) {
        obj['foundDate'] = ApiClient.convertToType(data['foundDate'], 'Date');
      }
      if (data.hasOwnProperty('dnfDate')) {
        obj['dnfDate'] = ApiClient.convertToType(data['dnfDate'], 'Date');
      }
      if (data.hasOwnProperty('correctedCoordinates')) {
        obj['correctedCoordinates'] = Coordinates.constructFromObject(data['correctedCoordinates']);
      }
      if (data.hasOwnProperty('isFavorited')) {
        obj['isFavorited'] = ApiClient.convertToType(data['isFavorited'], 'Boolean');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
    }
    return obj;
  }

  /**
   * The date the user found the Geocache
   * @member {Date} foundDate
   */
  exports.prototype['foundDate'] = undefined;
  /**
   * @member {Date} dnfDate
   */
  exports.prototype['dnfDate'] = undefined;
  /**
   * @member {module:model/Coordinates} correctedCoordinates
   */
  exports.prototype['correctedCoordinates'] = undefined;
  /**
   * @member {Boolean} isFavorited
   */
  exports.prototype['isFavorited'] = undefined;
  /**
   * @member {String} note
   */
  exports.prototype['note'] = undefined;



  return exports;
}));


