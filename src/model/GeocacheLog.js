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
    define(['ApiClient', 'model/Coordinates', 'model/GeocacheLogType', 'model/Image', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Coordinates'), require('./GeocacheLogType'), require('./Image'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.GeocachingApiV10) {
      root.GeocachingApiV10 = {};
    }
    root.GeocachingApiV10.GeocacheLog = factory(root.GeocachingApiV10.ApiClient, root.GeocachingApiV10.Coordinates, root.GeocachingApiV10.GeocacheLogType, root.GeocachingApiV10.Image, root.GeocachingApiV10.User);
  }
}(this, function(ApiClient, Coordinates, GeocacheLogType, Image, User) {
  'use strict';




  /**
   * The GeocacheLog model module.
   * @module model/GeocacheLog
   * @version v1
   */

  /**
   * Constructs a new <code>GeocacheLog</code>.
   * @alias module:model/GeocacheLog
   * @class
   * @param loggedDate {Date} 
   * @param text {String} 
   * @param geocacheCode {String} 
   */
  var exports = function(loggedDate, text, geocacheCode) {
    var _this = this;











    _this['loggedDate'] = loggedDate;
    _this['text'] = text;



    _this['geocacheCode'] = geocacheCode;

  };

  /**
   * Constructs a <code>GeocacheLog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GeocacheLog} obj Optional instance to populate.
   * @return {module:model/GeocacheLog} The populated <code>GeocacheLog</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceCode')) {
        obj['referenceCode'] = ApiClient.convertToType(data['referenceCode'], 'String');
      }
      if (data.hasOwnProperty('ownerCode')) {
        obj['ownerCode'] = ApiClient.convertToType(data['ownerCode'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = User.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('imageCount')) {
        obj['imageCount'] = ApiClient.convertToType(data['imageCount'], 'Number');
      }
      if (data.hasOwnProperty('isEncoded')) {
        obj['isEncoded'] = ApiClient.convertToType(data['isEncoded'], 'Boolean');
      }
      if (data.hasOwnProperty('isArchived')) {
        obj['isArchived'] = ApiClient.convertToType(data['isArchived'], 'Boolean');
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = ApiClient.convertToType(data['images'], [Image]);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('geocacheName')) {
        obj['geocacheName'] = ApiClient.convertToType(data['geocacheName'], 'String');
      }
      if (data.hasOwnProperty('ianaTimezoneId')) {
        obj['ianaTimezoneId'] = ApiClient.convertToType(data['ianaTimezoneId'], 'String');
      }
      if (data.hasOwnProperty('loggedDate')) {
        obj['loggedDate'] = ApiClient.convertToType(data['loggedDate'], 'Date');
      }
      if (data.hasOwnProperty('text')) {
        obj['text'] = ApiClient.convertToType(data['text'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('geocacheLogType')) {
        obj['geocacheLogType'] = GeocacheLogType.constructFromObject(data['geocacheLogType']);
      }
      if (data.hasOwnProperty('updatedCoordinates')) {
        obj['updatedCoordinates'] = Coordinates.constructFromObject(data['updatedCoordinates']);
      }
      if (data.hasOwnProperty('geocacheCode')) {
        obj['geocacheCode'] = ApiClient.convertToType(data['geocacheCode'], 'String');
      }
      if (data.hasOwnProperty('usedFavoritePoint')) {
        obj['usedFavoritePoint'] = ApiClient.convertToType(data['usedFavoritePoint'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} referenceCode
   */
  exports.prototype['referenceCode'] = undefined;
  /**
   * @member {String} ownerCode
   */
  exports.prototype['ownerCode'] = undefined;
  /**
   * @member {module:model/User} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {Number} imageCount
   */
  exports.prototype['imageCount'] = undefined;
  /**
   * @member {Boolean} isEncoded
   */
  exports.prototype['isEncoded'] = undefined;
  /**
   * @member {Boolean} isArchived
   */
  exports.prototype['isArchived'] = undefined;
  /**
   * @member {Array.<module:model/Image>} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} geocacheName
   */
  exports.prototype['geocacheName'] = undefined;
  /**
   * @member {String} ianaTimezoneId
   */
  exports.prototype['ianaTimezoneId'] = undefined;
  /**
   * @member {Date} loggedDate
   */
  exports.prototype['loggedDate'] = undefined;
  /**
   * @member {String} text
   */
  exports.prototype['text'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/GeocacheLogType} geocacheLogType
   */
  exports.prototype['geocacheLogType'] = undefined;
  /**
   * @member {module:model/Coordinates} updatedCoordinates
   */
  exports.prototype['updatedCoordinates'] = undefined;
  /**
   * @member {String} geocacheCode
   */
  exports.prototype['geocacheCode'] = undefined;
  /**
   * @member {Boolean} usedFavoritePoint
   */
  exports.prototype['usedFavoritePoint'] = undefined;



  return exports;
}));


